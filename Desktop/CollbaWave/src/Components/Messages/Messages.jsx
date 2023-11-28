import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';

export default function Messages() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const [loading , setloading] = useState(false);

    const [userName, setUserName] = useState("");
    const messagesCollection = collection(db, 'messages');

    const [messageArray, setMessageArray] = useState([]);

    const currentUrl = window.location.pathname;
    const parts = currentUrl.split('/');
    const userID = parts[parts.length - 1];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(userID);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        const q = query(messagesCollection, where("recipientId", "==", userName));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            let tempArray = [];

            snapshot.docChanges().forEach((change) => {
                const newMessage = change.doc.data();
                console.log("this is -> ", newMessage);
                tempArray = [...tempArray, newMessage];
            });
            setMessageArray(tempArray);
            setloading(true);
        });

        return () => {
            console.log("Unsubscribed");
            unsubscribe();
        };
    }, [messagesCollection, userName]);

    return (
        <>
            <center>
                <h1>Messages</h1>
                <main className="align">

                {
                    !loading ? <div style={{margin: "100px 0px"}} className='saveLoadingWheel' ></div> :  
                    messageArray.map((e,index)=>{
                        const {senderId , message , senderDisplayName, timestamp }= e;
                        return(
                            <>
                            <main className='firebaseCodes' key={index}>
                                <br />
                                <b>Sender Name: {senderDisplayName}</b>
                                <br />
                                <br />
                                <b>Sender id: {senderId}</b>
                                <pre>
                                    <code className='codeInfo' >{message}</code>
                                </pre>
                            </main>
                        </>
                        )
                    })
                }
                </main>
            </center>
        </>
    );
}
