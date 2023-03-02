import { auth, db, google } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

export const googleSignIn = () => {
  signInWithPopup(auth, google)
    .then((res) => {
      const user = {
        userId: res.user.uid,
        username: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
        library: [],
        basket: [],
      };
      storeUser(user);
    })
};

const storeUser = async (user) => {
  const colRef = collection(db, "users");
  const queryUser = query(colRef, where("email", "==", user.email));
  const get = await getDocs(queryUser);
  let exists = false;
  get.forEach(() => {
    exists = true;
  });
  if (!exists) {
    const docRef = doc(db, "users", user.userId);
    setDoc(docRef, user);
  }
};
