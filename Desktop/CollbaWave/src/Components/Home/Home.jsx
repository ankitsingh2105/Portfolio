import React from 'react'
import "./Home.css"

import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from '../../firebaseConfig';
import mainImg from "./mainImg.svg"
export default function Home(props) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    return (
        <main className="main_home" id={props.id} >
            <div className='align' style={{ flexDirection: "row" }} >
                <div className="align">
                    <h1>
                        Code Hard
                    </h1>
                    <h1>
                        Code Silly!
                    </h1>
                    <p>
                        <b>"CollabWave"</b> is a modern and user-friendly task collaboration application designed to streamline teamwork, enhance productivity, and foster effective communication among team members. This app is built on the Firebase Firestore database, enabling real-time collaboration, notifications, and seamless task management.
                    </p>
                    <div className="align2">
                        <button onClick={() => { window.location.href = "/login" }} >Get Started</button>
                    </div>
                </div>
            </div>
            <img src={mainImg} alt="SVG Image" />
        </main>
    )
}
