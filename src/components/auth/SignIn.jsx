import React, {useState} from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const SignIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        });
    }
    return ( 
       
        <div>
            <form onSubmit={SignIn}>
                <h1>Log In</h1>
                <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
        </div>
     );
}
 
export default SignIn;