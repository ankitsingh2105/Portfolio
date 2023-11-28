import React from 'react'
import "./Message.css"
import firebaseConfig from '../../firebaseConfig';
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
export default function Message(props) {
    const {id} = props;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const handleMessage = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        let user = auth.currentUser;
        const db = getFirestore(app);
        const ref = doc(db, 'messages', user.uid);
        await setDoc(ref, {
            messengers: { message: message, name: name, email: email }
        });
        toast("Messages reveived, Thanks" , {autoClose:1500});
        e.target.name.value=" ";
        e.target.email.value=" ";
        e.target.message.value=" ";
    }

    return (
        <main id={id} className="Message_main message_align">
            <h1>~ Send us a messgae ~</h1>
            <form onSubmit={handleMessage} className='message_align'>
                <h4>~ Deliever you message from here ~</h4>
                <input required placeholder="Name" type="text" name='name' />
                <input required placeholder='Email' type="email" name='email' />
                <textarea required placeholder='Enter the message' name="message" cols="30" rows="10"></textarea>
                <br />
                <button>Send</button>
            </form>
            <footer>
    </footer>
        </main>
    )
}
