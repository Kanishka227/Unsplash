import styles from "./Login.module.css"
import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleSignIn = async() => {
    try{
      await createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      navigate('/')
    }
    catch(error){
      alert(error)
      console.log("error creating email and password ", error);     
    }   
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <h3 className={styles.title}>Unsplash</h3>
        <input type="email" placeholder="Email Address" ref={email}/>
        <input type="password" placeholder="Password" ref={password}/>
        <button onClick={handleSignIn}>SignIn</button>
      </div>
    </div>
  );
}
