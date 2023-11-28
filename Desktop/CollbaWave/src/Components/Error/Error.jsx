import React from 'react'
import error from "./logo.png";
export default function Error() {
    return (
        <div className="errorContainer" >
            <span style={{marginBottom : "5rem"}} className="align">
                <img style={{ marginTop: "4em" }} src={error} alt="" />
                <span style={{marginTop : "3rem"}} ><b>~Make an account my friend~</b></span>
                <br />
                <span><b>~Page don't exist, you can signup or login below~ </b></span>
                <br />
                <br />
                <div className="align4">
                <button onClick={()=>{window.location.href = "/signup"}}>Sign up</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={()=>{window.location.href = "/login"}}>Log In</button>
                </div>
            </span>
        </div>
    )
}
