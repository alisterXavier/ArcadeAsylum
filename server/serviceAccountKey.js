module.exports = {
  type: "service_account",
  project_id: "arcadeasylum-46375",
  private_key_id: process.env.Private_key_id,
  private_key: process.env.Private_Key.replace(/\\n/g, "\n"),
  client_email:
    "firebase-adminsdk-ej7f2@arcadeasylum-46375.iam.gserviceaccount.com",
  client_id: process.env.Client_id,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ej7f2%40arcadeasylum-46375.iam.gserviceaccount.com",
};
