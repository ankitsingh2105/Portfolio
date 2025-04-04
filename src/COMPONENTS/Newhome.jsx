import React from 'react'
import './home.css'
import sound from './sound.mp3'
// import hash from './hashMockup.png';
// import kk from './kkMockup.png';
// import weather from './weatherMockup.png';
// import spelling from './spellMockup.png'
// import ank from './ankitMockup.png'
import actingthinking from './actingthinking.png'
import bulb from './bulb.png'
import about1 from './about.png'
import contacts from './contacts.png'
// import certificates from './certificates.png'
// import resume from "./AnkitRESUME.pdf"
// import Api from './Api.png'
import messaging from './messaging.png'
// import linkBee from "./linkbeeIMG.png"
// import collab from "./COLLABB.png"
import video from "./doodleVideo.mp4";
import video2 from "./linkbee.mp4";
import video3 from "./prepMateVideo.mp4";
import video4 from "./linkedinEditorClip.mp4";
import video5 from "./LaterTube.mp4"
import countapi from 'countapi-js';
import timeStamped from "./ytimestamped.png"
import nitTV from "./nittvImage.png"

import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function Newhome() {
    const about = useRef(null);
    const work = useRef(null);
    const contact = useRef(null);
    const top = useRef(null);

    const scrollSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
        document.getElementById('playing').play();
    };

    useEffect(() => {
        countapi.visits().then((result) => {
            console.log("the resule :: ", result.value);
        });
    }, [])

    const SendtoWhatspp = () => {
        let naam = document.getElementById("newid1").value;
        let email = document.getElementById('newid2').value;
        let text = document.getElementById('newid3').value;
        let Message = `https://wa.me/91?text=" + "Name :: " + ${naam} + " %0a " + "Email :: " + ${email} + " %0a " + " Message :: " + ${text}`
        window.open(Message, '_blank').focus();
    }
    const [greetingstyle, setgreetings] = useState({ color: '#FF5757' });
    const [greetingstyle2, setgreetings2] = useState({})
    const [whitetoblack, setwhitetoblack] = useState({})
    const [blacktowhite, setblacktowhite] = useState({})
    const [backorange, setbackorange] = useState({})
    const [borderGoldToOrange, setborderGoldToOrange] = useState({})
    const [borderblack, setborderblack] = useState({})
    const [sectioncolor, setsectioncolor] = useState({})
    const [yelloToblack, setyelloToblack] = useState({})
    const [yelloToblack2, setyelloToblack2] = useState({})
    const [yelloToblack3, setyelloToblack3] = useState({})
    const [backgroundYellotoorange, setbackgroundYellotoorange] = useState({});
    const [truck, settruck] = useState({})
    const [daynight, setdaynight] = useState(true)
    const [sunmoon, setsunmoon] = useState('🌚');
    const [backblacktowhite, setbackblacktowhite] = useState('');
    const [coloring, setcoloring] = useState({})
    const [reverse, setreverse] = useState({})
    const [borderblue, setborderblue] = useState({})
    let colorOfText = "#FF3B3F";  //orange one
    // let colorOfText = "#FFD700";  //orange one

    const ChangeTheme = () => {
        setcoloring({
            color: 'black',
        })
        setreverse({
            color: 'white'
        })
        document.body.style.background = 'white'
        document.body.style.backgroundPosition = 'center';
        setsunmoon('🌚')
        setbackblacktowhite({
            border: '.2px solid rgb(0, 0, 0)',
        })
        setgreetings({
            color: `${colorOfText}`,
            // textShadow: ".2px .2px 0px black",
        })
        setgreetings2({
            color: `${colorOfText}`,
            textShadow: ".5px .5px 0px black"
        })
        setwhitetoblack({
            color: '#0a192f',
            fontWeight: 500
        })
        setblacktowhite({
            border: `2px solid ${colorOfText}`,
        })
        setbackorange({
            background: colorOfText,
            // opacity: '85%'
        })
        setborderGoldToOrange({
            'borderColor': colorOfText,

        })
        setborderblack({
            'borderColor': '#0a192f',
        })
        setsectioncolor({
            // webkitBackdropFilter: "blur(5px) saturate(200%)",
            backgroundColor: "rgb(251 251 251 / 94%)",
        })
        setyelloToblack({
            color: 'black',
            fontWeight: '900'
        })
        setyelloToblack2({
            color: 'black',
            fontWeight: '900'
        })
        setyelloToblack3({
            background: "black"
        })
        settruck({
            color: '#0a192f',
            'borderColor': '#0a192f',

        })
        setbackgroundYellotoorange({
            background: colorOfText,
        })
        setborderblue({
            borderTop: "2px solid white",
            borderBottom: "2px solid white",
            borderLeft: "2px solid black",
            borderRight: "2px solid black",
        })
        setdaynight(false);
    }

    const DarkMode = () => {
        setborderblue({
            borderTop: "2px solid #fe6235",
            borderBottom: "2px solid #fe6235",
            borderLeft: "2px solid white",
            borderRight: "2px solid white",
        })
        setcoloring({
            color: 'white'
        })
        setreverse({
            color: '#fe6235'
        })
        setsunmoon('🌞');
        document.body.style.background = '#04293a'
        setborderGoldToOrange({
            'borderColor': '#fe6235',
        })
        setbackblacktowhite({
            border: '.2px solid white',
        })
        setgreetings({
            color: '#fe6235'
        })
        setgreetings2({
            color: 'white',
        })
        setwhitetoblack({
            color: 'white',
        })
        setblacktowhite({
            border: "4px solid rgb(43 51 64 / 98%)"
        })
        setbackorange({
            backdropFilter: "blur(4px)",
            webkitBackdropFilter: "blur(4px)",
            background: "#04293a"
        })
        setborderblack({
            'borderColor': 'white',
        })
        setsectioncolor({
            // backgroundColor: "#04293a",
            "background-image": "radial-gradient(#08425d, #04293a, #04293a)",
            // backgroundColor: "rgb(22 35 57 / 94%)",
            // webkitBackdropFilter: "blur(5px) saturate(200%)",
        })
        setyelloToblack({
            color: '#fe6235',
        })
        setyelloToblack2({
            color: 'white',
        })
        setyelloToblack3({
            background: "white"
        })
        setbackgroundYellotoorange({
            // background: 'rgb(43 51 64 / 98%)',
        })
        settruck({
            color: 'rgb(254, 98, 53)',
            'borderColor': 'white'
        })
        setdaynight(true);
    }

    const DayNight = () => {
        if (daynight) {
            console.log("one")
            ChangeTheme(colorOfText);
        }
        else {
            DarkMode();
            console.log("two")
        }
    }

    const [check, setcheck] = useState(true);
    if (check) {
        DarkMode();
        setcheck(false)
    }

    return (
        <>
            {/* making dots */}

            <div className='first' style={blacktowhite} ref={top} >
                {/* Navbar */}
                <nav className="navbar" style={backorange}>
                    <div className="letter" style={borderblue} >
                        <div className='logotext'>
                            A
                        </div>
                        <audio src={sound} id='playing' ></audio>
                    </div>
                    <div className="about_section">
                        <ul className="list">
                            <div className="info about">
                                <div className="number" style={reverse} >01.
                                </div>
                                <div style={coloring} id='one1' className="infoindex align2 " onClick={(() => scrollSection(about))} >
                                    About
                                </div>
                            </div>
                            <div className="info">
                                <div className="number" style={reverse} >02.
                                </div>
                                <div style={coloring} id='one2' className="infoindex " onClick={(() => scrollSection(work))}>
                                    Projects
                                </div>
                            </div>
                            <div className="info">
                                <div className="number" style={reverse} >03.
                                </div>
                                <div style={coloring} id='one3' className="infoindex" onClick={(() => scrollSection(contact))}>
                                    Contact
                                </div>
                            </div>
                            <div className="info">
                                <div className="sun" onClick={() => DayNight('#8636cc')}>
                                    {sunmoon}
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>

                {/* Nav bar end */}

                {/* first page */}
                <div className="section align check" style={sectioncolor}>

                    <div className="intro" >
                        <div className="donts"></div>
                        <div className="greetings  display2" style={greetingstyle2}>
                            Hello there I am,
                        </div>
                        <div className="align">

                            <div className="align spacing">
                                <div className="name" style={yelloToblack2}>
                                    A
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    n
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    k
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    i
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    t
                                </div>
                            </div>
                            <div className="align ">
                                <div className="name" style={yelloToblack2}>
                                    S
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    i
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    n
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    g
                                </div>
                                <div className="name" style={yelloToblack2}>
                                    h
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div className="surname" style={yelloToblack}>
                                C
                            </div>
                            <div className="surname" style={yelloToblack}>
                                H
                            </div>
                            <div className="surname" style={yelloToblack}>
                                A
                            </div>
                            <div className="surname" style={yelloToblack}>
                                U
                            </div>
                            <div className="surname" style={yelloToblack}>
                                H
                            </div>
                            <div className="surname" style={yelloToblack}>
                                A
                            </div>
                            <div className="surname" style={yelloToblack}>
                                N
                            </div>
                        </div>
                        <div className="dot" style={greetingstyle}>
                            ..................................
                            ..................................
                        </div>
                        <div className="greetings2 newpreeting" style={greetingstyle2}>
                            looking for internships
                        </div>
                        <div style={{ border: "none" }} className="resume align2">
                            <a href="https://drive.google.com/file/d/1b3Ye7wKyBzitNkXqJeMPWeuxmccWaG4q/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }} >RESUME</a>
                        </div>
                        <div className="margin">
                        </div>
                    </div>

                </div>
            </div>

            <div className='first first1' style={blacktowhite} ref={about} >
                <div className="section section2" style={sectioncolor} >
                    <div className="info1 align2">
                        <br />
                        <div className="number1" style={whitetoblack}>01.</div>
                        <div className="align">
                            <div className="round1"></div>
                            <h1 className="inner_heading" style={greetingstyle}>
                                About Me
                            </h1>
                            <div className="round2"></div>
                        </div>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={about1} alt="" />
                        <p className="info_para" style={whitetoblack}>

                            Hi, I am Ankit Singh Chauhan, a 23 years old self-taught Web developer in
                            love with developing web apps and learning new ways to improve myself.
                            <br /><br />

                            {/* I have completed my schooling and college in Haldwani, a city in the Nainital district
                            in Uttrakhand, INDIA.<br /> */}

                            <br></br>I have completed my Bachelor of Science, (B.Sc) from Kumaun University, Nainital. Currently, a student of <strong className='Mca' style={greetingstyle}> NIT Bhopal </strong> enrolled in MCA program.
                        </p>
                    </div>

                    <br />

                    <div className="languages" style={greetingstyle}>
                        I know the following languages and library -
                    </div>

                    <ul className='lost2'>
                        <li style={whitetoblack} className='lik'>C++</li>

                        <li style={whitetoblack} className='like'>HTML5 &nbsp; <i style={greetingstyle} class="fa-brands fa-html5"></i></li>

                        <li style={whitetoblack} className='like'>CSS3&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-css3-alt"></i></li>

                        <li style={whitetoblack} className='like'>Javascript &nbsp;<i style={greetingstyle} class="fa-brands fa-square-js"></i></li>

                        <li style={whitetoblack} className='like'>React Js&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-react"></i></li>

                        <li style={whitetoblack} className='like'>Express Js&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-react"></i></li>

                        <li style={whitetoblack} className='like'>Node Js&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-react"></i></li>

                        <li style={whitetoblack} className='like'>Mongo DB&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-react"></i></li>
                    </ul>
                    <br />

                    <div className="languages" style={greetingstyle}>
                        I also know the following -
                    </div>

                    <ul className='lost2'>
                        <li style={whitetoblack} className='like'>Web Sockets</li>
                        <li style={whitetoblack} className='like'>Web RTC</li>
                        <li style={whitetoblack} className='like'>Chart JS</li>
                        <li style={whitetoblack} className='like'>Github&nbsp;&nbsp; <i style={greetingstyle} class="fa-brands fa-github"></i></li>

                        <li style={whitetoblack} className='like'>Git&nbsp;&nbsp;    <i style={greetingstyle} class="fa-brands fa-git"></i></li>

                        <li style={whitetoblack} className='like'>Firebase&nbsp;&nbsp;    <i style={greetingstyle} class="fa-solid fa-fire"></i></li>

                        <li style={whitetoblack} className='like'>Web Hosting&nbsp;&nbsp;    <i style={greetingstyle} class="fa-solid fa-globe"></i></li>

                        <li style={whitetoblack} className='like'>Responsive Web Designs&nbsp;&nbsp;    <i style={greetingstyle} class="fa-solid fa-pen-nib"></i></li>

                        <li style={whitetoblack} className='like'>Chat GPT</li>
                        <br />

                    </ul>
                    <br />
                    <br />

                    {/* <div className="competitive" style={whitetoblack}>
                        I also do competitive programming using <strong className='Mca' style={greetingstyle}> C++ </strong>
                        I am active on Codechef, Codeforces, Leetcode
                        and have Highest the Rating of 1828 (4 <i style={greetingstyle} class="fa-solid fa-star"></i>) on CODECHEF
                    </div>
                    <br></br> */}


                    {/* <div className="head-certify" style={whitetoblack}>
                        Here are my Hackerank Certificates (<i style={greetingstyle} class="fa-brands fa-hackerrank"></i>) you can click and see them
                    </div>
                    <div className="align2">
                        <img loading="lazy" src={certificates} className='actingthinking' alt="certificates" />
                    </div>
                    <ul className='lost'>
                        <br />
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/d7f5c7a96e11" target="_blank" rel="noopener noreferrer" style={greetingstyle}>Rest Api -- Intermediate</a> </li>
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/d361cc12a646" target="_blank" rel="noopener noreferrer" style={greetingstyle}>Javascript -- Intermediate</a></li>
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/4c12a2eeb3aa" target="_blank" rel="noopener noreferrer" style={greetingstyle}>Problem Solving -- Intermediate</a></li>
                    </ul> */}
                </div>
            </div>
            {/* First page end */}


            {/* Second page */}
            <div className="first" style={blacktowhite} ref={work} >
                <div className="section section2" style={sectioncolor}>
                    <div className="info1 align2 " ><br />
                        <div className="number1" style={whitetoblack}>02.</div>
                        <div className="align">
                            <div className="round1"></div>
                            <div className="inner_heading" style={greetingstyle}>
                                Projects
                            </div>
                            <div className="round2"></div>
                        </div>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={bulb} alt="" />
                    </div>
                    <div className='' style={{ "flexDirection": "column" }}>

                        {/* <p className="info_para" style={whitetoblack}>
                            The following are the projects I have completed so far. Some of them are
                            websites for businesses and some are implemented projects after learning concepts.
                        </p> */}

                        {/* <div className="languages" style={greetingstyle}>
                            The Work Projects I have Completed so far
                        </div> */}

                        {/* <ul className='lost'>
                            <li style={whitetoblack} className='like'><a href="http://hashtagbakery.in/">HashTag Bakery - Bakery and Flower shop</a></li>
                            <li style={whitetoblack} className='like'><a href="https://kkfoodshaldwani.netlify.app/">KK Food Haldwani - Family Restaurant</a></li>
                            <li style={whitetoblack} className='like'><a href="https://ankitsinghchauhan.in/">AnkitSinghChauhan.in - Portfolio Website</a>⭐</li>
                        </ul> */}

                        {/* <div className="languages" style={greetingstyle}>
                            My Web Apps
                        </div> */}

                        <ul className='lost'>
                            <li style={whitetoblack} className='like'><a about='blank' href="https://chromewebstore.google.com/detail/linkedin-editor/dpbccjhabjmnohefgjoongadmjpanfmd">Linkedin Editor - Chrome Extension (90+ users)</a>⭐⭐</li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://chromewebstore.google.com/detail/latertube/didekppekbpacecobggngndcmeaafinm?authuser=0&hl=en">LaterTube - Chrome Extension (25+ users) </a>⭐⭐</li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://nittv.live">NIT TV - Omegle-style platform for NITians</a>⭐⭐</li>


                            <li style={whitetoblack} className='like'><a about='blank' href="https://github.com/ankitsingh2105/DoodleQuest">Doodle Quest </a>⭐</li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://chromewebstore.google.com/detail/ytimestamped/nfdcoabfdeamnfgpjbkndhfhobhacpha?authuser=0&hl=en">YTimeStamped - Chrome Extension </a>⭐⭐</li>
                            <li style={whitetoblack} className='like'><a about='blank' href="https://github.com/ankitsingh2105/PrepMate">PrepMate </a>⭐</li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://linkbeemern.vercel.app/">LinkBEE </a>⭐</li>

                            {/* <li style={whitetoblack} className='like'><a href="https://linkbee.online/">Linkbee Web App</a></li> */}

                            {/* <li style={whitetoblack} className='like'><a about='blank' href="https://colllabwavenitb.netlify.app/">Collab Wave Web App</a></li> */}

                            {/* <li style={whitetoblack} className='like'><a about='blank' href="https://weatherappfetchapi.netlify.app/">Real Time Weather Web App</a></li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://firecartredux.netlify.app/">Firebase + Redux E-commerce Web App</a></li> */}

                            {/* <li style={whitetoblack} className='like'><a about='blank' href="https://firecartredux.netlify.app/">Spelling Quiz Web App</a></li>

                            <li style={whitetoblack} className='like'><a about='blank' href="https://contestinformer.netlify.app/">Competitive Coding Informer</a></li> */}
                        </ul>
                    </div>
                    <div className="align2">
                        {/* <div style={greetingstyle}>working link to all below</div> */}
                        <img style={{ marginBottom: "15px" }} loading="lazy" className='actingthinking align2 ' src={actingthinking} alt="" />
                    </div>
                </div>
            </div>



            {/* TODO :: PROJECTS */}

            {/* Chrome extension */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>001.</div>
                        <div className="bakery" style={greetingstyle} >Linkedin Editor - chrome extension</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className="lik">
                            ✅<strong style={greetingstyle} className="Mca">Analytics</strong>: Crossed 90 users with 1400+ impressions.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🚀 <strong style={greetingstyle} className="Mca">Enhance LinkedIn Posts</strong>: Edit your LinkedIn posts directly with text styling options.
                        </li>

                        <li style={whitetoblack} className="lik">
                            📝 <strong style={greetingstyle} className="Mca">Comment Editing</strong>: Apply text formatting to your comments and posts seamlessly.
                        </li>

                        <li style={whitetoblack} className="lik">
                            ✨ <strong style={greetingstyle} className="Mca">Hotkey Shortcuts</strong>:
                            <ul>
                                <li>Ctrl+B for <strong>bold</strong></li>
                                <li>Ctrl+I for <em>italic</em></li>
                                <li>Ctrl+Y for bullet lists</li>
                                <li>Ctrl+M for numbered lists</li>
                            </ul>
                        </li>

                        <li style={whitetoblack} className="lik">
                            🎉 <strong style={greetingstyle} className="Mca">User-Friendly</strong>: Intuitive interface designed to make your LinkedIn experience smooth and engaging.
                        </li>
                    </p>


                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>ReactJS</strong></li>
                            <li><strong className='string' style={greetingstyle}>CSS</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <video width="320" height="240" controls>
                            <source src={video4} type="video/mp4" />
                        </video>
                    </div>
                    <div className="links">
                        <a className="github" href="https://chromewebstore.google.com/detail/linkedin-editor/dpbccjhabjmnohefgjoongadmjpanfmd" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            Download Link
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            {/* Chrome extension */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>002.</div>
                        <div className="bakery" style={greetingstyle} >LaterTube - Chrome Extension</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className="lik">
                            🎥 <strong style={greetingstyle} className="Mca">Save YouTube Videos</strong>: Store video URLs, thumbnails, and titles to watch later.
                        </li>

                        <li style={whitetoblack} className="lik">
                            ✅ <strong style={greetingstyle} className="Mca">Watch Button</strong>: Quickly watch saved videos directly from the extension.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🔖 <strong style={greetingstyle} className="Mca">Filtering Through Tags</strong>: Organize and filter your saved videos using custom tags for easy navigation.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🔗 <strong style={greetingstyle} className="Mca">Related Links</strong>: Add and manage related links for each video to keep additional resources handy.
                        </li>

                    </p>



                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Vanilla JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>CSS3</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <video width="320" height="240" controls>
                            <source src={video5} type="video/mp4" />
                        </video>
                    </div>
                    <div className="links">
                        <a className="github" href="https://chromewebstore.google.com/detail/latertube/didekppekbpacecobggngndcmeaafinm?authuser=0&hl=en" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            Download Link
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            {/* NIT TV */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>003.</div>
                        <div className="bakery" style={greetingstyle} >NIT-TV</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className="lik">
                            🔒 <strong style={greetingstyle} className="Mca">NIT-Exclusive Access</strong>: Only students with NIT's emails can log in.
                        </li>

                        <li style={whitetoblack} className="lik">
                            📹 <strong style={greetingstyle} className="Mca">Random 1-on-1 Video Chat</strong>: Get paired with other NIT students for real-time conversations.
                        </li>

                        <li style={whitetoblack} className="lik">
                            ⚡ <strong style={greetingstyle} className="Mca">Firebase Authentication</strong>: Secure login with Google authentication.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🎥 <strong style={greetingstyle} className="Mca">WebRTC for Video Streaming</strong>: Peer-to-peer video calls without servers storing any data.
                        </li>

                        <li style={whitetoblack} className="lik">
                            📡 <strong style={greetingstyle} className="Mca">Real-time Matching System</strong>: Instantly connects users with available peers.
                        </li>
                    </p>




                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>MERN</strong></li>
                            <li><strong className='string' style={greetingstyle}>Tailwind CSS</strong></li>
                            <li><strong className='string' style={greetingstyle}>WebSockets</strong></li>
                            <li><strong className='string' style={greetingstyle}>WebRTC</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img width="320" height="240" controls src={nitTV} alt='nitTvImage'>
                        </img>
                    </div>
                    <div className="links">
                        <a className="github" href="https://nittv.live" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            Live Link
                        </a>
                    </div>
                    <br />
                </div>
            </div>


            {/* Chrome extension */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>004.</div>
                        <div className="bakery" style={greetingstyle} >YTimeStamped - Chrome Extension</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className="lik">
                            ⏱️ <strong style={greetingstyle} className="Mca">Custom Timestamps</strong>: Add personalized timestamps to YouTube videos for quick navigation.
                        </li>

                        <li style={whitetoblack} className="lik">
                            📝 <strong style={greetingstyle} className="Mca">AI-Generated Notes</strong>: Use AI to generate relevant notes for each timestamp effortlessly.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🎨 <strong style={greetingstyle} className="Mca">Color-Coded Markers</strong>: Visually distinguish timestamps on the progress bar with custom colors.
                        </li>

                        <li style={whitetoblack} className="lik">
                            🔗 <strong style={greetingstyle} className="Mca">Attach Related Links</strong>: Save additional resources or references alongside each timestamp.
                        </li>
                    </p>

                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Vanilla JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>CSS3</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        {/* <video width="320" height="240" controls>
                            <source src={video5} type="video/mp4" />
                        </video> */}
                        <img width="370" height="220" src={timeStamped} alt="" srcset="" />
                    </div>
                    <div className="links">
                        <a className="github" href="https://chromewebstore.google.com/detail/ytimestamped/nfdcoabfdeamnfgpjbkndhfhobhacpha?authuser=0&hl=en" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            Download Link
                        </a>
                    </div>
                    <br />
                </div>
            </div>


            {/*  Doodle quest */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>005.</div>
                        <div className="bakery" style={greetingstyle} >Doodle Quest</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>
                            🎮 <strong style={greetingstyle} className="Mca">Gaming Web App</strong>: Users can join or create specific rooms, where they can draw the object on the board, and others will guess it.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🏠 <strong style={greetingstyle} className="Mca">Room Connectivity</strong>: Implemented the ability for users to join a specific room.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            💬 <strong style={greetingstyle} className="Mca">Real-Time Chatting</strong>: Integrated functionality allowing users in the same room to communicate.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🎨 <strong style={greetingstyle} className="Mca">Real-Time Drawing Board</strong>: Developed a feature where players can express their creativity and guess drawings.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🏆 <strong style={greetingstyle} className="Mca">Leaderboard Updates</strong>: Implemented real-time updates to keep track of players' scores and rankings as the game progresses.
                        </li>
                    </p>

                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Web Sockets</strong></li>
                            <li><strong className='string' style={greetingstyle}>MongoDB</strong></li>
                            <li><strong className='string' style={greetingstyle}>Express JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Node JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>React JS</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <video width="320" height="240" controls>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="links">
                        <a className="github" href="https://doodlequest.vercel.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            DOODLE QUEST LIVE LINK
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            {/* PrepMate */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>006.</div>
                        <div className="bakery" style={greetingstyle} >PrepMate</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>
                            💼<strong style={greetingstyle} className="Mca">Connect with Peers</strong>: Users can schedule mock interviews with others or invite friends directly.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🎥 <strong style={greetingstyle} className="Mca">Real-time Colloboration</strong>: Offers video calls and a collaborative coding environment.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            📅 <strong style={greetingstyle} className="Mca">Flexible Scheduling</strong>: Easy options to book or cancel bookings.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🔔 <strong style={greetingstyle} className="Mca">Notification System</strong>: Real-time notifications with WebSockets to keep users in the loop.
                        </li>
                    </p>

                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Web Sockets</strong></li>
                            <li><strong className='string' style={greetingstyle}>Web RTC</strong></li>
                            <li><strong className='string' style={greetingstyle}>MongoDB</strong></li>
                            <li><strong className='string' style={greetingstyle}>Express JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Node JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>React JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Docker</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <video width="320" height="240" controls>
                            <source src={video3} type="video/mp4" />
                        </video>
                    </div>
                    <div className="links">
                        <a className="github" href="https://github.com/ankitsingh2105/PrepMate" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            PREPMATE GITHUB
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            {/* Linkbee */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>007.</div>
                        <div className="bakery" style={greetingstyle} >LinkBee</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>
                            🎨 <strong style={greetingstyle} className="Mca">Customizable Profiles</strong>: Choose from different themes, fonts, and background images to make your profile stand out.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🔗 <strong style={greetingstyle} className="Mca">Link Management</strong>: Add, edit, and delete links effortlessly.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            📊 <strong style={greetingstyle} className="Mca">Analytics</strong>: Track the number of clicks on each link and gain insights into your audience's behaviour.
                        </li>

                        <li style={whitetoblack} className='lik'>
                            🌐 <strong style={greetingstyle} className="Mca">Unique Profile Link</strong>: Share your unique URL across all your social media platforms.
                        </li>
                    </p>

                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Chart.JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>MongoDB</strong></li>
                            <li><strong className='string' style={greetingstyle}>Express JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>React JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Node JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Cookie and JWT</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <video width="320" height="240" controls>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                    <div className="links">
                        <a className="github" href="https://linkbeemern.vercel.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            LinkBee Live Link
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            {/* Portfolio */}
            {/* <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>006.</div>
                        <div className="bakery" style={greetingstyle} >Portfolio Website</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        I created my <strong style={greetingstyle} className='string'>Portfolio Website </strong> using React JS to showcase the work I have completed so far.
                        <br />
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={ank} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://ankitsinghchauhan.in/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            ANKITSINGHCHAUHNA.IN
                        </a>
                    </div>
                    <br />
                </div>
            </div> */}

            {/* first one
            <div className="first" style={blacktowhite}>
                <div className="section" style={sectioncolor}>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>007.</div>
                        <div className="bakery" style={greetingstyle} >HASHTAG BAKERY</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>Created a bakery website using React</li>

                        <li style={whitetoblack} className='lik'>Utilized  React-Router-Dom to switch between pages faster.</li>

                        <li style={whitetoblack} className='lik'>Utilized  Context API  as the state manager for global data</li>

                        <li style={whitetoblack} className='lik'>Implemented  Lazy Loading  to enhance website performance.</li>

                        <li style={whitetoblack} className='lik'>Saved cart data in  Local Storage to persist items across page refreshes.</li>
                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>React-Router-Dom</strong></li>
                            <li><strong className='string' style={greetingstyle}>Context API</strong></li>
                            <li><strong className='string' style={greetingstyle}>Lazy Loading </strong></li>
                            <li><strong className='string' style={greetingstyle}>Local Storage</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={hash} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://www.hashtagbakery.in/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            HASHTAGBAKERY.IN
                        </a>
                    </div>
                    <br />
                </div>
            </div>


            {/*  second project */}
            {/* <div className="first" style={blacktowhite}  >
                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>007.</div>
                        <div className="bakery" style={greetingstyle} >KK FOOD</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>

                        <li style={whitetoblack} className='lik'>Created a family restaurant website using  React</li>

                        <li style={whitetoblack} className='lik'>Implemented  Lazy Loading to improve performance and reduce memory usage</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>ReactJS</strong></li>
                            <li><strong className='string' style={greetingstyle}>Lazy Loading </strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={kk} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://kkfoodshaldwani.netlify.app" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            KKFOODSHALDWANI.IN
                        </a>
                    </div>
                    <br />
                </div>
            </div> */} 





            {/* <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>006.</div>
                        <div className="bakery" style={greetingstyle} >Link Bee Web App (firebase) </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>
                            Users can create unique links where they can add links to their social media and upcoming events.</li>

                        <li style={whitetoblack} className='lik'> Utilized Firebase for storing and managing user data in real-time. </li>

                        <li style={whitetoblack} className='lik'>React Router for seamless navigation</li>

                        <li style={whitetoblack} className='lik'>Asynchronous Javascript</li>

                        <li style={whitetoblack} className='lik'>Also used CSS <strong className='string' style={greetingstyle}>Flex Box and Grid</strong>.</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Firebase</strong></li>
                            <li><strong className='string' style={greetingstyle}>React-Router-Dom</strong></li>
                            <li><strong className='string' style={greetingstyle}>Async JS</strong></li>
                            <li><strong className='string' style={greetingstyle}>FlexBox & Grid</strong></li>
                            <li><strong className='string' style={greetingstyle}>Dynamic Rendering</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={linkBee} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://linkbee.online/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            LINKBEE.ONLINE
                        </a>
                    </div>
                    <br />
                </div>
            </div> */}



            {/* 
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>008.</div>
                        <div className="bakery" style={greetingstyle} >Collab Wave Web App </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>
                            Users can share their codes as messages to the other users of the web app.</li>

                        <li style={whitetoblack} className='lik'> Secure and personalized experience with user login. </li>

                        <li style={whitetoblack} className='lik'>Effortlessly manage your codes and stay organized.</li>

                        <li style={whitetoblack} className='lik'>Leveraging Firebase for seamless real-time updates.</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Realtime Updates</strong></li>
                            <li><strong className='string' style={greetingstyle}>Messaging Feature</strong></li>
                            <li><strong className='string' style={greetingstyle}>Code Saving functionality</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={collab} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://colllabwavenitb.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            COLLABWAVE.NETLIFY.APP
                        </a>
                    </div>
                    <br />
                </div>
            </div>


            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>009.</div>
                        <div className="bakery" style={greetingstyle} >Weather Web App </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>Created a project to display real-time weather reports of different cities.</li>

                        <li style={whitetoblack} className='lik'>Utilized  async await
                            to handle asynchronous API data fetching and showing a loader while the data is being fetched </li>

                        <li style={whitetoblack} className='lik'>Used Local Storage    to save previous search records and Session Storage    for refreshed data for every session.</li>

                        <li style={whitetoblack} className='lik'>Implemented Speech Synthesis API    for voice-based place search.</li>

                        <li style={whitetoblack} className='lik'>Also used CSS Flex Box and Grid   .</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Async Await </strong></li>
                            <li><strong className='string' style={greetingstyle}>Local Storage</strong></li>
                            <li><strong className='string' style={greetingstyle}>Speech Synthesis</strong></li>
                            <li><strong className='string' style={greetingstyle}>Flex Box & Grid</strong></li>
                            <li><strong className='string' style={greetingstyle}>Vanilla JS</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={weather} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://weatherappfetchapi.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            WEATHERAPI.NETLIFY.APP
                        </a>
                    </div>
                    <br />
                </div>
            </div> */}



            {/* 4th project */}
            {/* <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>010.</div>
                        <div className="bakery" style={greetingstyle} >Spell Quiz</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>Created a web app for     testing English spellings      using a voice assistant.</li>

                        <li style={whitetoblack} className='lik'>Implemented a     voice assistant      that says words and prompts the user to write them.</li>

                        <li style={whitetoblack} className='lik'>Used     local storage      to save the progress of each level.</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>voice assistant</strong></li>
                            <li><strong className='string' style={greetingstyle}>Local Storage</strong></li>
                            <li><strong className='string' style={greetingstyle}>Speech Synthesis</strong></li>
                            <li><strong className='string' style={greetingstyle}>English Testing</strong></li>
                        </div>
                    </p>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={spelling} alt="nikaljao" className='hash_images' />
                    </div>
                    <div></div>
                    <div className="links">
                        <a className="github" href="https://spellhornet.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            SPELLHORNET.NETLIFY.APP
                        </a>
                    </div>
                    <br />
                </div>
            </div> */}


            {/* 5th project
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>009.</div>
                        <div className="bakery" style={greetingstyle} >Firebase + Redux Web App</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>

                        <li style={whitetoblack} className='lik'>I developed a web app using  Firebase and  React Redux  with the functionality of an  e-commerce web app .</li>

                        <li style={whitetoblack} className='lik'>Google login/sign up and manual login/sign up integration using  Firebase Auth </li>

                        <li style={whitetoblack} className='lik'>Image uploading functionality with  Firebase Storage </li>

                        <li style={whitetoblack} className='lik'> Shopping Cart:  Enabled users to  add products  to their cart,  view the cart contents , and  update or remove items .</li>

                        <li style={whitetoblack} className='lik'>Integrated  React Router  for navigation between different pages</li>

                    </p>
                    <p className="info_para" style={whitetoblack}>
                        <div>
                            <li><strong className='string' style={greetingstyle}>Firebase</strong></li>
                            <li><strong className='string' style={greetingstyle}>React Redux</strong></li>
                            <li><strong className='string' style={greetingstyle}>React Router</strong></li>
                            <li><strong className='string' style={greetingstyle}>Login/Signup</strong></li>
                        </div>
                    </p>
                    <div className="links">
                        <a className="github" href="https://spellhornet.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            FIRECARTREDUX.NETLIFY.APP
                        </a>
                    </div>
                    <br />
                </div>
            </div>

            <div className='first first1' style={blacktowhite}>
                <div className="section" style={sectioncolor} >
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>0010.</div>
                        <div className="bakery" style={greetingstyle} >Contest Informer<br /> </div>
                        <br />
                    </div>
                    <div className="align">
                        <img loading="lazy" className='actingthinking2 align' src={Api} alt="api" />
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <li style={whitetoblack} className='lik'>I created a small project where I fetched an API and displayed the upcoming contests of <strong className='string' style={greetingstyle}>Codechef</strong>, <strong className='string' style={greetingstyle}>Codeforces</strong>, and <strong className='string' style={greetingstyle}>Atcoder</strong>.</li>
                        <li style={whitetoblack} className='lik'><strong className='string' style={greetingstyle}>Fetched</strong> data from an external <strong className='string' style={greetingstyle}>API</strong>.</li>
                    </p>
                    <div className="links">
                        <a className="github" href="https://contestinformer.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            CONTESTINFORMER.NETLIFY.APP
                        </a>
                    </div>
                    <br />
                </div>
            </div> */}





            {/* Todo : contact form */}
            <div className="first" ref={contact} style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div className="info2 align2">
                        <div className="number1" style={whitetoblack}>03.</div>
                        <div className="align">
                            <div className="round1"></div>
                            <div className="inner_heading" style={greetingstyle}>
                                Contact
                            </div>
                            <div className="round2"></div>
                        </div>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={contacts} alt="" />
                    </div>

                    <div className="contact-info">
                        <p className="info_para" style={whitetoblack}>
                            I am actively looking for internships. I am also open to code along,
                            I believe in sharing knowledge which often yields great projects. <br /> <br />

                            If you do so, I will be able to add some more worthy projects here,
                            so contact me <strong className='string' style={greetingstyle}>ASAP!! 👀</strong>
                        </p>
                        {/* <video autoPlay loop muted src={messaging} type="video/gif" id='video1' /> */}
                        <img loading="lazy" className='newGif' src={messaging} alt="loading..." />
                    </div>

                    {/*  form to contact */}
                    <div className="form" >
                        <form action="" style={borderblack} className='contact_form'>
                            <div className="heading_contact" style={greetingstyle}>
                                Deliver you message
                            </div>
                            <input type="text" id='newid1' className="info_contact " placeholder='Your Name' required></input>
                            <input type="text" id='newid2' className="info_contact " placeholder='Your Email' required></input>
                            <textarea type="text" id='newid3' className='info_contact ' name="" cols="27" rows="10" placeholder='Your message' required></textarea>
                            <div className="shake">
                                <div type='button' id='delivery' className="submit"
                                    onClick={SendtoWhatspp}>
                                    <i class="fa-solid fa-truck" style={truck} ></i>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="social">
                        <div className='alternates' style={whitetoblack} >
                            Or contact me through
                        </div>
                        <div className="align" style={{ "font-size": "22px" }} >
                            <a href="https://github.com/ankitsingh2105"> <i style={greetingstyle} class="fa-brands fa-github social_icon"></i></a>
                            <a href="https://www.linkedin.com/in/ankit-singh-chauhan-30057220a/" target="_blank" rel="noopener noreferrer">
                                <i style={greetingstyle} class="fa-brands fa-linkedin social_icon"></i>
                            </a>
                            <a href="https://www.instagram.com/_ankitchauhan__/?next=%2F" target="_blank" rel="noopener noreferrer">
                                <i style={greetingstyle} class="fa-brands fa-instagram social_icon"></i>
                            </a>
                            <a href="mailto:ankitchauhn21500@gmail.com">
                                <i style={greetingstyle} class="fa-solid fa-envelope social_icon"></i>
                            </a>
                        </div>
                        <div>
                            <div className='align' style={{ flexDirection: "column", fontWeight: "bolder" }}>
                                <div className='alternates' style={whitetoblack} >
                                    Visit my Stack Overflow account where I try to get answers and <strong style={greetingstyle}>give answers related to WEB DEVELOPMENT</strong>, which helps me to improve my ability to understand codes.
                                </div>
                                <a href="https://stackoverflow.com/users/19757319/ankit" target="_blank" rel="noreferrer" >
                                    <br />
                                    <img style={{ border: "1px solid black" }} src="https://stackexchange.com/users/flair/26054765.png?theme=clean" className="stackOverflowLink" alt='Stack' />
                                </a>
                                <div style={whitetoblack} className='visit'>Visit my profile by clicking the above image </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="acknoledgement" style={borderGoldToOrange}>
                        <br />
                        <div className='MyName' style={whitetoblack}>
                            Designed By <strong style={greetingstyle}>Ankit Singh Chauhan</strong>
                        </div>
                        <br />
                        {/* <div className='year' style={greetingstyle} >
                            2022
                        </div> */}
                        <div className='MyName' style={whitetoblack}>
                            Deployed on <strong style={greetingstyle}>Github</strong>
                        </div>
                        <br />
                        <div className='year' style={whitetoblack} >
                            Domain from <strong style={greetingstyle}>Hostinger</strong>
                        </div>
                        <div className='year' style={whitetoblack} >
                            <br />
                            Hosted on <strong style={greetingstyle}>Netlify</strong>
                        </div>
                        <div style={whitetoblack}>
                            ............................
                        </div>
                    </div>
                    <br />
                </div>



            </div>
            <div>
            </div>
            {/* Third page end */}


            <div className="movetotop" onClick={(() => scrollSection(top))} style={backgroundYellotoorange}>
                <i class="fa-solid fa-arrow-up"></i>
            </div>



            <div className="align2 socialMedia" >
                <div className="verticalLine6" style={yelloToblack3}> </div>
                <div className="circle1" style={{ yelloToblack2 }}> </div>
                <a aria-label="Link to Stack OverFlow" href="https://stackoverflow.com/users/19757319/ankit?tab=topactivity" className='hovering' target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-stack-overflow social_icon socialIcon2 socail1"></i>
                </a>

                <div className="verticalLine1" style={yelloToblack3}> </div>
                <a aria-label="Link to GitHub" href="https://github.com/ankitsingh2105" target="_blank" without rel="noreferrer" >
                    <i class="socail2 fa-brands fa-github social_icon socialIcon2 "></i>
                </a>

                <div className="verticalLine2" style={yelloToblack3}> </div>
                <a aria-label="Link to LinkedIn" href="https://www.linkedin.com/in/ankit-singh-chauhan-30057220a/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands socail3 fa-linkedin social_icon socialIcon2"></i>
                </a>

                <div className="verticalLine3" style={yelloToblack3}> </div>
                <a aria-label="Link to Instagram" href="https://www.instagram.com/_ankitchauhan__/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands socail4 fa-instagram social_icon socialIcon2"></i>
                </a>

                <div className="verticalLine4" style={yelloToblack3}> </div>
                <a aria-label="Link to Gmail" href="mailto:ankitchauhn21500@gmail.com" target="_blank" without rel="noreferrer">
                    <i class="fa-solid socail5 fa-envelope social_icon socialIcon2"></i>
                </a>

                <div className="verticalLine5" style={yelloToblack3}> </div>
                <div className="circle2"> </div>
            </div>
        </>
    )
}
