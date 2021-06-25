import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0RX7-kPbl32PLcD50q-VxDdbi_1SWTpo",
  authDomain: "chain-store-6ee82.firebaseapp.com",
  projectId: "chain-store-6ee82",
  storageBucket: "chain-store-6ee82.appspot.com",
  messagingSenderId: "826287464450",
  appId: "1:826287464450:web:c054ec1c0aa7bf7d26071b"
})

export const auth = app.auth()
export default app
