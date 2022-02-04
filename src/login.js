import React from "react";
import {useNavigate} from "react-router"
import { auth } from "./config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "react-bootstrap";
import "./bootstrap/dist/css/bootstrap.css";

function Login(){
    const navigate = useNavigate();
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res);
            navigate("/h");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div style={{marginTop:"20px"}}>
            <Button onClick={googleLogin}>Sign In with Google</Button>
        </div>
    )
}
export default Login;