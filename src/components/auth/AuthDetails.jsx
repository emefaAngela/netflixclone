import React,{useEffect,useState} from "react";
import {auth} from "../../firebase";
import { onAuthStateChanged } from "@firebase/auth";
const AuthDetails = () => {
    const [authUser,setauthUser] = useState(null);

    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if (user){
                setauthUser(user)
            } else {
                setauthUser(null);
            }
        })
    },[])
    return ( 
        <div>  
            {/* { authUser ? <h1>Signed In<h1/>: <>Signed Out</>} */}
            </div>
        
        
     );
}
 
export default AuthDetails;