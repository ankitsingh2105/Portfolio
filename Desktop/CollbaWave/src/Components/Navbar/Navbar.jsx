import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import firebaseConfig from '../../firebaseConfig';

export default function Navbar(props) {

    const { id } = props;
    const scroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [name, setname] = useState("")
    const [loading, setloading] = useState(true);
    const [tempStat, setTempStat] = useState(true);

    useEffect(() => {
        let state = localStorage.getItem("localTempState") || "true";
        if (state === "true") {
            setTempStat(true);
        } else {
            setTempStat(false);
        }
        
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setloading(false);
            }
        });
    }, []);


    const handleLogout = async (e) => {
        await signOut(auth);
        toast.success("Logging Out", { autoClose: 1500 });
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem("localTempState", false);
                setname(user.displayName)
            } else {
                localStorage.setItem("localTempState", true);
            }
        });
    }, [auth])

    function getFirstWord(str) {
        const firstWord = str.split(' ')[0];
        return firstWord;
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const currentUrl = window.location.pathname;
    const parts = currentUrl.split('/');
    const userID = parts[parts.length - 1];

    const movetoauth = () => {
        window.location.href = `auth/edit/codes/${userID}`
    }

    return (
        <nav id={id} className='main_nav'>
            <ToastContainer />
            <img src={logo} alt="" srcSet="" />
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { scroll("home") }}>Home</li>
                <li onClick={() => { scroll("service") }}>Services</li>
                <li onClick={() => { scroll("message") }}>Message</li>
            </ul>
            <ul>
                {
                    tempStat ? (
                        <>
                            <li className="login_signup">
                                <Link className='login_signup2' style={{ textDecoration: "none", color: "black" }} to="login">Login</Link>
                            </li>
                            <li><Link className='login_signup2' style={{ textDecoration: "none", color: "black" }} to="signup">Sign Up</Link></li>
                        </>

                    ) : (
                        <>
                            <li>
                                {
                                    loading ? (
                                        <>
                                        <b>Welcome</b>
                                        <div className="loadingWheel2"></div>
                                        </>
                                    ) : (
                                        <>
                                            <b>Welcome </b> <div>
                                                {getFirstWord(name)}
                                            </div>
                                        </>
                                    )
                                }
                            </li>
                            <li className="login_signup2" onClick={movetoauth} style={{ color: "black", textDecoration: "none" }}>
                                Codes
                            </li>
                            <li className="login_signup2" onClick={handleLogout}>Logout</li>
                        </>
                    )
                }
            </ul>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </nav>
    )
}
