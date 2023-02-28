import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function getStripeSession(line_items, items) {
  const stripeRequest = await fetch(
    "https://api.stripe.com/v1/checkout/sessions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: buildQuery({
        payment_method_types: ["card"],
        mode: "payment",
        success_url:
          "https://arcade-asylum.vercel.app/api/success?id={CHECKOUT_SESSION_ID}",
        cancel_url: "https://arcade-asylum.vercel.app/api/cancel?id={CHECKOUT_SESSION_ID}",
        line_items,
      }),
    }
  );

  const stripeResponse = await stripeRequest.json();
  const ck = stripeResponse.url.split("/").pop().split("#")[0];
  await createCheckoutSession(items, ck);
  window.location.href = stripeResponse.url;
}

async function createCheckoutSession(line_items, ck_id) {
  await setDoc(doc(db, "checkouts", ck_id), {
    id: ck_id,
    uid: auth.currentUser?.uid,
    items: line_items,
    payment: null,
  });
}

function buildQuery(data, prefix = "") {
  // Determine the data type
  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

  // Loop through the object and create the query string
  return Object.keys(data)
    .map(function (key, index) {
      // Cache the value of the item
      const value = data[key];

      // Add the correct string if the object item is an array or object
      if (type === "array") {
        key = prefix + "[" + index + "]";
      } else if (type === "object") {
        key = prefix ? prefix + "[" + key + "]" : key;
      }

      // If the value is an array or object, recursively repeat the process
      if (typeof value === "object") {
        return buildQuery(value, key);
      }

      // Join into a query string
      return key + "=" + encodeURIComponent(value);
    })
    .join("&");
}
