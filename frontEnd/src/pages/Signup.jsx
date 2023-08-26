import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import cry from "../assets/cry-2.png";
import unity from "../assets/unity-5.png";
import unreal from "../assets/unreal-5.png";
import spiderman from "../assets/spiderman.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      alert("Passwords do not match. Please confirm your password correctly.");
      return;
    }

    axios.post("http://localhost:3024/users/registration", {
      Username: name,
      Password: pass,
    })
    .then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data.message);
        navigate("/");
      }
    });
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>  
        <div className="login">
          <h1>Signup</h1>
          <label htmlFor="name">Full Name</label>
          <input value={name} type="text" placeholder="Full name" onChange={(event) => setName(event.target.value)} />
          <label htmlFor="email">Email</label>
          <input value={email} type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
          <label htmlFor="pass">Password</label>
          <input value={pass} type="password" placeholder="Password" onChange={(event) => setPass(event.target.value)}/>
          <label htmlFor="confirmPass">Confirm Password</label>
          <input value={confirmPass} type="password" placeholder="Confirm Password" onChange={(event) => setConfirmPass(event.target.value)}/>
          <button type="submit" className="cta-btn">Signup</button>
        </div>
      </form>
      <div className="not_registered">
        <p className="notregistertext">Already have an account?</p>
        <Link to='/login'>
          <button className="cta-btn"> Login here </button>
        </Link>
      </div>
      <section className="spiderman">
        <h2 className="spiderman-heading">
          Discover gaming paradise at our website, where epic adventures await!
        </h2>
        <img src={spiderman} alt="" className="spiderman-img" />
      </section>
    </div>
  );
}

export default Signup;
