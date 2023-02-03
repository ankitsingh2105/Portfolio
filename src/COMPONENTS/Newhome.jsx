import React from 'react'
import './home.css'
import sound from './sound.mp3'
import img1 from './home1.jpeg';
import img2 from './home4.jpeg';
import img3 from './home3.jpeg';
import kk1 from './kk1.jpg'
import kk2 from './kk2.jpg'
import kk3 from './kk3.jpg'
import actingthinking from './actingthinking.png'
import bulb from './bulb.png'
import about1 from './about.png'
import books from './books.png'
import contacts from './contacts.png'
import certificates from './certificates.png'
import main1 from './main1.png'
import Api from './Api.png'
import messaging from './messaging.png'
import { useState } from 'react';
import { useRef } from 'react';
export default function Newhome() {
    const icon = useRef(null);
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
    const alerting = () => {
        window.alert('⚡⚡Adding Soon⚡⚡');
    }

    const SendtoWhatspp = () => {
        let naam = document.getElementById("newid1").value;
        let email = document.getElementById('newid2').value;
        let text = document.getElementById('newid3').value;
        let Message = `https://wa.me/918954057108?text=" + "Name :: " + ${naam} + " %0a " + "Email :: " + ${email} + " %0a " + " Message :: " + ${text}`
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
    const [backgroundToWhite, setbackgroundToWhite] = useState({})
    const [backgroundYellotoorange, setbackgroundYellotoorange] = useState({});
    const [truck, settruck] = useState({})
    const [daynight, setdaynight] = useState(true)
    const [sunmoon, setsunmoon] = useState('🌚');
    const [backblacktowhite, setbackblacktowhite] = useState('');
    const [coloring, setcoloring] = useState({})
    const [reverse, setreverse] = useState({})
    const [borderblue, setborderblue] = useState({})
    let colorOfText = "#fe6235";  //orange one
    const ChangeTheme = (colorOfText) => {
        setcoloring({
            color: 'black'
        })
        setreverse({
            color: 'white'
        })
        setborderblue({
            borderColor: 'black'
        })
        document.body.style.background = 'white'
        document.body.style.backgroundPosition = 'center';
        setsunmoon('🌚')
        setbackblacktowhite({
            border: '.2px solid rgb(0, 0, 0)',
        })
        setgreetings({
            color: `${colorOfText}`,
            textShadow: ".2px .2px 0px black",
            // fontSize : "23px"
        })
        setgreetings2({
            color: `${colorOfText}`,
            textShadow: ".5px .5px 0px black"
        })
        setwhitetoblack({
            color: '#0a192f',
            fontWeight: 600
        })
        setblacktowhite({
            border: `4px solid ${colorOfText}`,
        })
        setbackorange({
            background: colorOfText,
            borderColor: 'black',
            opacity: '85%'
        })
        setborderGoldToOrange({
            'borderColor': colorOfText,

        })
        setborderblack({
            'borderColor': '#0a192f',
        })
        setsectioncolor({
            webkitBackdropFilter: "blur(5px) saturate(200%)",
            backgroundColor: " rgb(241, 241, 241, .94)",
        })
        setyelloToblack({
            color: '#0a192f',
            fontWeight: '900'
        })
        setbackgroundToWhite({
            background: 'white',

        })
        settruck({
            color: '#0a192f',
            'borderColor': '#0a192f',

        })
        setbackgroundYellotoorange({
            background: colorOfText,
        })
        setdaynight(false);
    }
    const DarkMode = () => {
        setborderblue({
            borderColor: '#fe6235'
        })
        setcoloring({
            color: 'white'
        })
        setreverse({
            color: '#fe6235'
        })
        setsunmoon('🌞');
        document.body.style.background = 'rgb(43 51 64 / 98%)'
        setborderGoldToOrange({
            'borderColor': '#fe6235',
        })
        setbackblacktowhite({
            border: '.2px solid white',
        })
        setgreetings({
            color: '#fe6235',
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
            background: "rgba(22, 35, 57, 0.94)"
        })
        setborderblack({
            'borderColor': 'white',
        })
        setsectioncolor({
            backgroundColor: "rgb(22 35 57 / 94%)",
            webkitBackdropFilter: "blur(5px) saturate(200%)",
        })
        setyelloToblack({
            color: '#fe6235',
        })
        setbackgroundToWhite({
            background: '#fe6235'
        })
        setbackgroundYellotoorange({
            // background: 'rgb(43 51 64 / 98%)',
        })
        settruck({
            color: 'white',
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

            <div className='first' style={blacktowhite} >
                {/* Navbar */}
                <nav className="navbar" style={backorange}>
                    <div className="logo letter" style={borderblue} >
                        <div className="" style={coloring} >
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
                                    {/* <i class="fa-solid fa-address-card"></i> */}
                                    {/* About */}
                                </div>
                            </div>
                            <div className="info">
                                <div className="number" style={reverse} >02.
                                </div>
                                <div style={coloring} id='one2' className="infoindex " onClick={(() => scrollSection(work))}>
                                    {/* Projects */}
                                </div>
                            </div>
                            <div className="info">
                                <div className="number" style={reverse} >03.
                                </div>
                                <div style={coloring} id='one3' className="infoindex" onClick={(() => scrollSection(contact))}>
                                    {/* Contact */}
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
                <div className="section align check" style={sectioncolor} ref={top}>

                    <div className="intro" >
                        <div className="donts"></div>
                        <div className="greetings  display2" style={greetingstyle2}>
                            Hello there I am,
                        </div>
                        <div className="name" style={yelloToblack}>
                            Ankit Singh
                        </div>
                        <div className="surname" style={yelloToblack}>
                            CHAUHAN
                        </div>
                        <div className="dot" style={greetingstyle}>
                            ..................................
                            ..................................
                        </div>
                        <div className="greetings2 newpreeting" style={greetingstyle2}>
                            looking for internships
                        </div>
                        <div className="resume align2" onClick={alerting}>
                            RESUME
                        </div>
                        <div className="margin">
                        </div>
                    </div>
                    <div>
                        <div>
                            <img loading="lazy" className='newImg' src={main1} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className='first first1' style={blacktowhite} ref={about} >
                <div className="section" style={sectioncolor} >
                    <div className="info1 align2">
                        <br />
                        <div className="number1" style={whitetoblack}>01.</div>
                        <h1 className="inner_heading" style={greetingstyle}>
                            About Me
                        </h1>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={about1} alt="" />
                        <p className="info_para" style={whitetoblack}>
                            Hi, I am Ankit Singh Chauhan, a 21 years old self-taught Web developer in
                            love with developing websites and learning new ways to improve myself.
                            <br /><br />
                            I have completed my schooling and college from Haldwani, a city in the Nainital district
                            in Uttrakhand, INDIA.<br />
                            <br></br>Completed my Bachelor of Science, Mathematics (B.Sc) from Kumaun University. Planning to
                            do <strong className='Mca' style={greetingstyle}  >Masters of Computer Applications</strong>.
                        </p>
                    </div>
                    <div>
                    </div>
                    <div className="languages" style={greetingstyle}>
                        I know the following languages and library____________
                        <div className="align2">
                            <img loading="lazy" className='books' src={books} alt="" />
                        </div>
                    </div>
                    <ul className='lost'>
                        <li style={whitetoblack} className='lik'>C++</li>
                        <li style={whitetoblack} className='lik'>C</li>
                        <li style={whitetoblack} className='lik'>HTML5 &nbsp;        <i style={greetingstyle} class="fa-brands fa-html5"></i></li>
                        <li style={whitetoblack} className='lik'>CSS3&nbsp;&nbsp;    <i style={greetingstyle} class="fa-brands fa-css3-alt"></i></li>
                        <li style={whitetoblack} className='lik'>Javascript &nbsp;   <i style={greetingstyle} class="fa-brands fa-square-js"></i></li>
                        <li style={whitetoblack} className='lik'>React Js&nbsp;&nbsp;<i style={greetingstyle} class="fa-brands fa-react"></i>
                            <br />
                            &nbsp;&nbsp;Concepts I know in <strong className='Mca' style={greetingstyle}>React JS</strong></li>
                        <ul className='lost'>
                            <li style={greetingstyle} className='lik'>Conditional Rendering</li>
                            <li style={greetingstyle} className='lik'>Props</li>
                            <li style={greetingstyle} className='lik'>Hooks
                                <ul className='lost'>
                                    <li style={whitetoblack} className='lik'>useState Hook</li>
                                    <li style={whitetoblack} className='lik'>useRef Hook</li>
                                    <li style={whitetoblack} className='lik'>useEffect Hook</li>
                                    <li style={whitetoblack} className='lik'>useContext Hook</li>
                                    <li style={whitetoblack} className='lik'>useReducer Hook</li>
                                </ul>
                            </li>
                            <li style={greetingstyle} className='lik'>React-Router-Dom</li>
                            <li style={greetingstyle} className='lik'>State Management </li>
                            <ul className='lost'>
                                <li style={whitetoblack} className='lik'>Context Api</li>
                                <li style={whitetoblack} className='lik'>React Redux</li>
                            </ul>
                            <li style={greetingstyle} className='lik'>Axios</li>
                            <li style={greetingstyle} className='lik'>Jest for Unit testing</li>
                            <li style={greetingstyle} className='lik'>Lazy loading</li>
                        </ul>
                    </ul>
                    <div className="languages" style={greetingstyle}>
                        I also know the following  ____________
                    </div>
                    <ul className='lost'>
                        <li style={whitetoblack} className='lik'>Github&nbsp;&nbsp; <i style={greetingstyle} class="fa-brands fa-github"></i></li>
                        <li style={whitetoblack} className='lik'>Git&nbsp;&nbsp;    <i style={greetingstyle} class="fa-brands fa-git"></i></li>
                        <li style={whitetoblack} className='lik'>Web Hosting&nbsp;&nbsp;    <i style={greetingstyle} class="fa-solid fa-globe"></i></li>
                        <li style={whitetoblack} className='lik'>Netlify</li>
                    </ul>
                    <div className="competitive" style={whitetoblack}>
                        I also do competitive programming
                        I am active on Codechef, Codeforces, Leetcode
                        I have Highest Rating of 1828 (4 <i style={greetingstyle} class="fa-solid fa-star"></i>) on CODECHEF
                    </div>
                    <br></br>
                    {/* <div> */}
                    <div className="head-certify" style={whitetoblack}>
                        I also have Hackerank Certifications (<i style={greetingstyle} class="fa-brands fa-hackerrank"></i>) you can click and see them
                    </div>
                    <div className="align2">
                        <img loading="lazy" src={certificates} className='actingthinking' alt="certificates" />
                    </div>
                    <ul className='lost'>
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/d7f5c7a96e11" className='certificate' target="_blank" rel="noopener noreferrer" style={greetingstyle}>Rest Api -- Intermediate</a> </li>
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/d361cc12a646" className='certificate' target="_blank" rel="noopener noreferrer" style={greetingstyle}>Javascript -- Intermediate</a></li>
                        <li className='hack' style={greetingstyle}> <a href="https://www.hackerrank.com/certificates/4c12a2eeb3aa" className='certificate' target="_blank" rel="noopener noreferrer" style={greetingstyle}>Problem Solving -- Intermediate</a></li>
                    </ul>
                    <br></br>
                    <br></br>
                    {/* </div> */}


                </div>
            </div>
            {/* First page end */}


            {/* Second page */}
            <div className="first" style={blacktowhite} ref={work} >
                <div className="section" style={sectioncolor}>
                    <div className="info1 align2 " ><br />
                        <div className="number1" style={whitetoblack}>02.</div>
                        <div className="inner_heading" style={greetingstyle}>
                            Projects
                        </div>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={bulb} alt="" />
                    </div>
                    <div className='' style={{ "flexDirection": "column" }}>
                        <p className="info_para" style={whitetoblack}>
                            The following are the projects I have completed so far. Some of them are
                            websites for businesses and some are implemented projects after learning concepts.
                        </p>
                        <div className="languages" style={greetingstyle}>
                            The Work Projects I have Completed so far____________
                        </div>
                        <ul className='lost'>
                            <li style={whitetoblack} className='lik'>HashTag Bakery - Bakery and Flower shop</li>
                            <li style={whitetoblack} className='lik'>KK Food Haldwani - Family Restaurant</li>
                            <li style={whitetoblack} className='lik'>AnkitSinghChauhan.tech - Portfolio Website</li>
                        </ul>
                        <div className="languages" style={greetingstyle}>
                            The Personal Projects I have added here____________
                        </div>
                        <ul className='lost'>
                            <li style={whitetoblack} className='lik'>Real Time Weather Web App</li>
                            <li style={whitetoblack} className='lik'>Spelling Quiz Web App</li>
                            <li style={whitetoblack} className='lik'>Competative Coding Infomer</li>
                            <li style={whitetoblack} className='lik'>BackGround Color Changer</li>
                        </ul>
                    </div>
                    <div className="align2">
                        <div style={whitetoblack} className='lik'>link to all below</div>
                        <img loading="lazy" className='actingthinking align2 ' src={actingthinking} alt="" />
                    </div>
                </div>


                {/*  first one */}
                <div className="section" style={sectioncolor}>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>001.</div>
                        <div className="bakery" style={greetingstyle} >HASHTAG BAKERY <br /> (hashtagbakery.in  )</div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        I created a website for bakery which is based in Delhi-NCR.
                        <br />
                        <br />
                        I used <strong className='string' style={greetingstyle}>REACT</strong> as library and used concepts like props, hooks
                        (useState, useEffect, useRef, useContext) and <strong className='string' style={greetingstyle}>React-Router-Dom </strong>
                        to switch between pages faster. Created a customized layout for the website and a
                        <strong className='string' style={greetingstyle}> Cart </strong> so that users can easily place the order.
                        <br></br>
                        <br></br>
                        Used <strong className='string' style={greetingstyle}>Context Api </strong> as state manager to manage global data, which was consumed using
                        <strong className='string' style={greetingstyle}> useContext Hook. </strong> Had to manage few states so prefered Context Api over
                        <strong className='string' style={greetingstyle}> React Redux.</strong>
                        <br /><br />
                        Also implemented <strong className='string' style={greetingstyle}> Lazy Loading </strong> to improve the performance and reduce the memory footprint of the application.
                        Saved the cart data in <strong className='string' style={greetingstyle}> Local Storage </strong>so the items won't disappear after refresh.

                        <br /><br />
                        <div className="design" style={greetingstyle}>
                            I hosted the website on netlify and used godaddy for domain name.
                            Overall I used,
                        </div>
                        <ul className='text1'>
                            <li style={whitetoblack} className='lik'>Reactjs    <i style={greetingstyle} class="fa-brands fa-react"></i></li>
                            <li style={whitetoblack} className='lik'>Javascript <i style={greetingstyle} class="fa-brands fa-square-js"></i></li>
                            <li style={whitetoblack} className='lik'>CSS3       <i style={greetingstyle} class="fa-brands fa-css3-alt"></i></li>
                        </ul>
                        <br />
                    </p>
                    <div className="sample" style={whitetoblack}>
                        Here is a sample of the same website
                    </div>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={img2} alt="nikaljao" className='hash_images' />
                        <img loading="lazy" style={borderGoldToOrange} src={img3} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={img1} alt="nikaljao" className='hash_images1' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://www.hashtagbakery.in/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            HASHTAGBAKERY.IN
                        </a>
                    </div>
                    <div>.</div>
                </div>


                {/*  second project */}
                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>002.</div>
                        <div className="bakery" style={greetingstyle} >KK FOOD <br /> (kkfoodshaldwani.in  )</div>
                    </div> <br />
                    <p className="info_para" style={whitetoblack}>
                        I created a website for a Haldwani based family restaurant.
                        <br />
                        <br />
                        I used <strong className='string' style={greetingstyle}>REACT</strong> as library  and used the concept of react-router, props
                        to make the website fast. Created a customised layout for this website, I used useEffect to make a animated logo before showing the real content.
                        Also implemented <strong className='string' style={greetingstyle}> Lazy Loading </strong> to improve the performance and reduce the memory footprint of the application.
                        <br></br>
                        <br></br>
                        <div className="design" style={greetingstyle}>
                            I hosted the website on netlify and used Hostinger (.in) domain. <br />
                            Overall I used-
                        </div>
                        <ul className='text1'>
                            <li style={whitetoblack} className='lik'>Reactjs    <i style={greetingstyle} class="fa-brands fa-react"></i></li>
                            <li style={whitetoblack} className='lik'>Javascript <i style={greetingstyle} class="fa-brands fa-square-js"></i></li>
                            <li style={whitetoblack} className='lik'>CSS3       <i style={greetingstyle} class="fa-brands fa-css3-alt"></i></li>
                        </ul>
                        <br />
                        I also got a lot of help from the <strong className='string' style={greetingstyle}>StackOver Flow community (558 reputations as I am wrting this)</strong><br />
                        <i style={greetingstyle} class="fa-brands fa-stack-overflow"></i>
                        <br /><br />

                    </p>
                    <div className="sample" style={whitetoblack}>
                        Here is a sample of the same website which is RESPONSIVE in all devices
                    </div>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={kk3} alt="nikaljao" className='hash_images' />
                        <img loading="lazy" style={borderGoldToOrange} src={kk1} alt="nikaljao" className='hash_images' />
                    </div>
                    <div className="img-display">
                        <img loading="lazy" style={borderGoldToOrange} src={kk2} alt="nikaljao" className='hash_images1' />
                    </div>
                    <div className="links">
                        <a className="github" href="https://www.kkfoodshaldwani.in/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            KKFOODSHALDWANI.IN
                        </a>
                    </div>
                    <div>.</div>
                </div>
            </div>


            {/* third project */}

            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>003.</div>
                        <div className="bakery" style={greetingstyle} >Portfolio Website<br /> <small style={whitetoblack}>(React JS)</small><br /> </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        I created my <strong style={greetingstyle} className='string'>Portfolio Website </strong> using React JS to showcase my work I have completed so far.
                        <br />
                        <br />
                        I used <strong style={greetingstyle} className='string'>NETLIFY</strong> to host the website and <strong style={greetingstyle} className='string'>GITHUB </strong>
                        to deploy the project on netlify. I used hostinger for <strong style={greetingstyle} className='string'>domain</strong> name.
                        <br />
                    </p>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitsingh2105/Portfolio" className='align' style={{ flexDirection: "column" }}>
                            <i style={greetingstyle} class="fa-brands fa-github stack"></i>
                        </a>
                        <div style={whitetoblack} className='visit'>Code</div>
                    </div>
                    {/* <hr /> */}
                    <div className="links">
                        <a className="github" href="https://ankitsinghchauhan.tech/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            ANKITSINGHCHAUHNA.TECH
                        </a>
                    </div>
                    <div>.</div>
                </div>
            </div>


            {/*  third  one demo */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>004.</div>
                        <div className="bakery" style={greetingstyle} >Weather Web App<br /> <small style={whitetoblack}>(Vanilla JS)</small><br /> </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <div className="align2" style={{ "marginBottom": "22px" }}>
                            <img loading="lazy" className='actingthinking2' src={Api} alt="api" />
                        </div>
                        I created a project where we can see the real time weather report of different city all over the world.
                        The data is <strong className='string' style={greetingstyle}> fetched </strong> from a free weather API website.
                        <br />
                        <br />
                        I used <strong style={greetingstyle} className='string'>NETLIFY</strong> to host the website and <strong style={greetingstyle} className='string'>GITHUB </strong>
                        to deploy the project on netlify.
                        <br />
                        <br />
                        I used <strong style={greetingstyle} className='string'> Async Await </strong> so that a loader is shown, the API if fetched synchronously and
                        data is show after the loader element. I also used <strong style={greetingstyle} className='string'>LOCAL STORAGE </strong>
                        to save the record of previous searches.
                        <br />
                        <br />
                        This project was made using <strong style={greetingstyle} className='string'>Vanilla Javascript</strong> CSS and HTML
                    </p>
                    <div className="languages" style={greetingstyle}>
                        I implemented the following concepts____
                    </div>
                    <ul className='lost'>
                        <li style={whitetoblack} className='lik'>Async Await</li>
                        <li style={whitetoblack} className='lik'>Fetch Api</li>
                        <li style={whitetoblack} className='lik'>Event Listeners</li>
                        <li style={whitetoblack} className='lik'>Selectors</li>
                        <li style={whitetoblack} className='lik'>Local Storage</li>
                    </ul>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitsingh2105/Weather-App" className='align' style={{ flexDirection: "column" }}>
                            <i style={greetingstyle} class="fa-brands fa-github stack"></i>
                        </a>
                        <div style={whitetoblack} className='visit'>Code</div>
                    </div>
                    {/* <hr /> */}
                    <div className="links">
                        <a className="github" href="https://weatherappfetchapi.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            WEATHERAPI.NETLIFY.APP
                        </a>
                    </div>
                    <div>.</div>
                </div>
            </div>


            {/* 4th project */}
            <div className='first first1' style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>005.</div>
                        <div className="bakery" style={greetingstyle} >Spell Quiz<br /> <small style={whitetoblack}>(Vanilla JS)</small><br /> </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        I created a project where we can test english spellings, the voice assistant will speak the words and you have to
                        write the words and the voice will response accordingly.
                        <br />
                        <br />
                        I used <strong style={greetingstyle} className='string'>NETLIFY</strong> to host the website and <strong style={greetingstyle} className='string'>GITHUB </strong>
                        to deploy the project on netlify.
                        <br />
                        <br />
                        This project was made using <strong style={greetingstyle} className='string'>Vanilla Javascript</strong> CSS and HTML
                    </p>
                    <div className="languages" style={greetingstyle}>
                        I implemented the following concepts____
                    </div>
                    <ul className='lost'>
                        <li style={whitetoblack} className='lik'>Speech Synthesis Api</li>
                        <li style={whitetoblack} className='lik'>Session Storage</li>
                        <li style={whitetoblack} className='lik'>Local Storage</li>
                    </ul>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitsingh2105/Spelling_Practice" className='align' style={{ flexDirection: "column" }}>
                            <i style={greetingstyle} class="fa-brands fa-github stack"></i>
                        </a>
                        <div style={whitetoblack} className='visit'>Code</div>
                    </div>
                    {/* <hr /> */}
                    <div className="links">
                        <a className="github" href="https://spellhornet.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            SPELLHORNET.NETLIFY.APP
                        </a>
                    </div>
                    <div>.</div>
                </div>
            </div>

            <div className='first first1' style={blacktowhite}>
                <div className="section" style={sectioncolor} >
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>006.</div>
                        <div className="bakery" style={greetingstyle} >Contest Informer<br /> <small style={whitetoblack}>(Vanilla JS)</small><br /> </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        <div className="align2" style={{ "marginBottom": "22px" }}>
                            <img loading="lazy" className='actingthinking2' src={Api} alt="api" />
                        </div>
                        I created a small project where I fetched an API and displayed the upcoming contests of Codechef, Codeforces, and Atcoder.
                        <br />
                        <br />
                        I used <strong style={greetingstyle} className='string'>NETLIFY</strong> to host the website and <strong style={greetingstyle} className='string'>GITHUB </strong>
                        to deploy the project on netlify.
                        <br />
                        <br />
                        This project was made entirely using <strong style={greetingstyle} className='string'>Vanilla Javascript</strong>.
                        <br />
                        <br />
                    </p>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitsingh2105/FreeRestAPi" className='align' style={{ flexDirection: "column" }}>
                            <i style={greetingstyle} class="fa-brands fa-github stack"></i>
                        </a>
                        <div style={whitetoblack} className='visit'>Code</div>
                    </div>
                    <div className="links">
                        <a className="github" href="https://contestinformer.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            CONTESTINFORMER.NETLIFY.APP
                        </a>
                    </div>
                    <div>.</div>
                </div>
            </div>
            {/*  third  one demo */}
            <div className='first first1' style={blacktowhite}   >

                <div className="section" style={sectioncolor} >
                    <div>
                    </div>
                    <div className="languages">
                        <div className="number1" style={whitetoblack}>007.</div>
                        <div className="bakery" style={greetingstyle} >Background Color Change<br />  <small style={whitetoblack}>(Vanilla JS)</small><br /> </div>
                    </div>
                    <p className="info_para" style={whitetoblack}>
                        I created a small project where you can change the colour of the background change by clicking on the colour you want.
                        <br />
                        <br /><br />
                        I also used <strong style={greetingstyle} className='string'>LOCAL STORAGE</strong> to save the current colour, so that the colour won't change
                        when you refresh the page after selecting some.
                        <br />
                        <br />
                    </p>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitsingh2105/BackGround_Color_Change" className='align' style={{ flexDirection: "column" }}>
                            <i style={greetingstyle} class="fa-brands fa-github stack"></i>
                        </a>
                        <div style={whitetoblack} className='visit'>Code</div>
                    </div>
                    <div className="links">
                        <a className="github" href="https://bodycolorchange.netlify.app/" target="_blank" rel="noopener noreferrer" style={greetingstyle}>
                            BODYCOLORCHANGE.NETLIFY.APP
                        </a>
                    </div>
                </div>
                <div>.</div>
            </div>


            {/*  third  one demo */}

            {/* Second page end */}
            {/* .}

            {/* Third page */}
            <div className="first" ref={contact} style={blacktowhite}>

                <div className="section" style={sectioncolor}>
                    <div className="info2 align2">
                        <div className="number1" style={whitetoblack}>03.</div>
                        <div className="inner_heading" style={greetingstyle}>
                            Contact
                        </div>
                        <hr style={backblacktowhite} className='line1' />
                        <img loading="lazy" style={{ "height": "70px" }} src={contacts} alt="" />
                    </div>

                    <div className="contact-info">
                        <div></div>
                        <div className='active' style={whitetoblack}>
                            I am actively looking for internships if degree is not
                            your concern then you can definitely ping me.  <br /> <br />
                            If you do so, I will be able to add some more worthy projects here,
                            so contact me <strong className='string' style={greetingstyle}>ASAP!! 👀</strong>
                        </div>
                        {/* <video autoPlay loop muted src={messaging} type="video/gif" id='video1' /> */}
                        <img loading="lazy" className='newGif' src={messaging} alt="loading..." />
                    </div>

                    {/*  form to contact */}
                    <div className="form" >
                        <form action="" style={borderblack} className='contact_form'>
                            <div className="heading_contact" style={greetingstyle}>
                                Deliver you message from here
                            </div>
                            <input style={backgroundToWhite} type="text" id='newid1' className="info_contact Name" placeholder='Your Name' required></input>
                            <input style={backgroundToWhite} type="text" id='newid2' className="info_contact Email" placeholder='Your Email' required></input>
                            <textarea style={backgroundToWhite} type="text" id='newid3' className='info_contact textmsg' name="" cols="27" rows="10" placeholder='Your message' required></textarea>
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
                        <div className="align">
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
                                    {/* <div className='alternates' style={{whitetoblack  , lineHeight : "26px" , letterSpacing:"1px"}} > */}
                                    Visit my Stack Overflow account where I try to get answers and <strong style={greetingstyle}>give answers related to WEB DEVELOPMENT</strong>, which helps me to improve my ability to understand codes.
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/19757319/ankit" className='align' style={{ flexDirection: "column" }}>
                                    <i style={greetingstyle} class="fa-brands fa-stack-overflow stack"></i>
                                </a>
                                <div style={whitetoblack} className='visit'>Visit my profile by clicking above icon</div>
                            </div>
                        </div>
                    </div>
                    <div className="acknoledgement" style={borderGoldToOrange}>
                        <div className='MyName' style={whitetoblack}>
                            Designed By <strong style={greetingstyle}>Ankit Singh Chauhan</strong>
                        </div>
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
                    <div className='dot'>.</div>
                </div>
            </div>
            <div>
            </div>
            {/* Third page end */}


            <div className="movetotop" onClick={(() => scrollSection(top))} style={backgroundYellotoorange}>
                <i class="fa-solid fa-arrow-up"></i>
            </div>
            {/* <button className="change_theme secondColor" ref={icon} onClick={() => ChangeTheme('green')} ></button>
            <button className="change_theme firstColor" ref={icon} onClick={() => ChangeTheme('#FF5757')} ></button>
            <button className="change_theme thirdColor" ref={icon} onClick={() => ChangeTheme('#fab005')} ></button> */}
            <div className="align2 socialMedia" >
                <a href="https://stackoverflow.com/users/19757319/ankit?tab=topactivity" className='hovering' target="_blank" rel="noopener noreferrer">
                    <i style={greetingstyle} class="fa-brands fa-stack-overflow social_icon socialIcon2 socail1"></i>
                </a>
                <a href="https://github.com/ankitsingh2105" target="_blank" without rel="noreferrer" >
                    <i style={greetingstyle} class="socail2 fa-brands fa-github social_icon socialIcon2 "></i>
                </a>
                <a href="https://www.linkedin.com/in/ankit-singh-chauhan-30057220a/" target="_blank" rel="noopener noreferrer">
                    <i style={greetingstyle} class="fa-brands socail3 fa-linkedin social_icon socialIcon2"></i>
                </a>
                <a href="https://www.instagram.com/_ankitchauhan__/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <i style={greetingstyle} class="fa-brands socail4 fa-instagram social_icon socialIcon2"></i>
                </a>
                <a href="mailto:ankitchauhn21500@gmail.com" target="_blank" without rel="noreferrer">
                    <i style={greetingstyle} class="fa-solid socail5 fa-envelope social_icon socialIcon2"></i>
                </a>
            </div>


        </>
        // Project end 
        // Last updated on 7 october 2022
        // Last updated on 9 october 2022
        // Last updated on 10 october 2022  => (added dark mode) 1:39am , 10:46am
        // Last updated on 8 Novermber 2022 => (added stackOverflow link and removed errors) : 2:45PM
        // Last updated on 11 Novermber 2022 => (added new project [rest API]) : 4:15PM
        // Last Updated on 15 January 2023
    )
}