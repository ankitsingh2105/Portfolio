import React, { useState } from 'react';
import "./Login.css"
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebaseConfig'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

import { Helmet } from 'react-helmet';

export default function Login() {

  const [passEmail, setpassEmail] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      toast("Checking Credentials", { autoClose: 5000 });
      e.target.email.value = "";
      e.target.password.value = "";
      await signInWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      toast.success("Logging in", { autoClose: 1500 });
      window.location.href = `user/${docSnap.data().userID}`;
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials", { autoClose: 1500 });
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const forgotPass = async () => {
    let check = isValidEmail(passEmail);
    if (!passEmail) {
      toast.error("Please enter an email address", { autoClose: 1500 });
      return;
    } else if (!check) {
      toast.error("Please enter a valid email address", { autoClose: 1500 });
      return;
    }
    toast.success("Processing", { autoClose: 2000 });

    try {
      await sendPasswordResetEmail(auth, passEmail);
      toast.success("Email sent. Please check your email account.", { autoClose: 1500 });
    } catch (error) {
      toast.error("Email don't exist", { autoClose: 1500 });
    }
  }


  const copyingEmail = (e) => {
    setpassEmail(e.target.value)
  }

  return (
    <main className="Login_main">

      <ToastContainer />
      <Helmet>
        <title>Collab Wave ~ Log In</title>
      </Helmet>

      <h1>
        Welcome back to Colab Wave
      </h1>
      <h2>~ Login to you ColabWave account ~</h2>
      <form onSubmit={handleLogin} action="">
        <input onChange={copyingEmail} required type="email" placeholder='Email' name="email" />
        <input required placeholder='Password' type="password" name="password" />
        <button>Login</button>
        <br />
      </form>
      <button onClick={() => { forgotPass() }} >Forgot Password?</button>
      <h2>Don't have an account? Sign Up here</h2>
      <button onClick={() => { window.location.href = `/signup` }} >Sign Up</button>
      <br /><br />
    </main>
  )
}