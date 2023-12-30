// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe2d_OZ_Y3sXs1FnoRNHUIcIdustAsKMc",
  authDomain: "netflixgptbydilip.firebaseapp.com",
  projectId: "netflixgptbydilip",
  storageBucket: "netflixgptbydilip.appspot.com",
  messagingSenderId: "88855626084",
  appId: "1:88855626084:web:e982842c8a010555d97a71",
  measurementId: "G-V3KY2DXYQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
