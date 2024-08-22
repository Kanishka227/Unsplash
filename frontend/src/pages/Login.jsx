import styles from "./Login.module.css";
import { auth } from "../utils/firebase-config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleLogInButton = async() => {
    try{
      await signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      navigate("/")
    }
    catch(error){
      alert(error)
    }
  }
  const handleNewUserButton = () => {
    navigate("/signup")
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <h3 className={styles.title}>Unsplash</h3>
        <input type="email" placeholder="Email Address" ref={email}/>
        <input type="password" placeholder="Password" ref={password}/>
        <button onClick={handleLogInButton}>LogIn</button>
        <button onClick={handleNewUserButton}>New user ? SignUp</button>
      </div>
    </div>
  );
}
