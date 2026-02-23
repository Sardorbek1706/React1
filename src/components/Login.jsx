import { Link,useNavigate } from "react-router-dom";
import google from "../assets/flat-color-icons_google.png"
import facebook from "../assets/logos_facebook.png"
import Wrapper from "./Wrapper";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    async function clickLogin(){
        console.log(email,password)
        const res = await axios.post("https://educoin-b2b-dev.educoinapp.uz/api/v1/auth/login",{
            identifier:email,
            password
        })
        if(res.status == 201){
            navigate("/")
        }
    }

  return (
    <div className="relative w-5xl h-175 m-auto flex bg-[#3200C3] shadow-2xl">
      <Wrapper />
      <div className="w-[65%] h-full rounded-l-[40px] bg-white pt-32">
        <div className="ml-37.5 w-112.5 h-105">
          <h2 className="mb-7.5 font-bold text-4xl">Sign In</h2>
          <div className="flex flex-col gap-5">
            <fieldset className="w-full h-12.5 border rounded-[10px]">
              <legend className="text-sm ml-4 px-1">Email</legend>
              <input onChange={(e) => setEmail(e.target.value)} className="w-full h-full focus:outline-none text-2xl pl-4 text-[#555]" type="text" />
            </fieldset>
            <fieldset className="w-full h-12.5 border rounded-[10px]">
              <legend className="text-sm ml-4 px-1">Password</legend>
              <input onChange={(e) => setPassword(e.target.value)} className="w-full h-full focus:outline-none text-2xl pl-4 text-[#555]" type="password" />
            </fieldset>
          </div>
          <button onClick={clickLogin} className="cursor-pointer bg-[#212121] w-full h-12.5 border rounded-[10px] text-center text-white mt-4 mb-2">
            Sign In
          </button>
          <div>
            <span>Already have an account?</span>
            <Link className="text-blue-500 ml-2" to="/register">
              register
            </Link>
          </div>
          <div className="flex justify-between items-center my-5">
            <hr className="w-[40%]" />
            <span>or</span>
            <hr className="w-[40%]" />
          </div>
          <div className="flex gap-4">
            <button className="cursor-pointer w-[50%] h-12.5 border rounded-[10px] flex items-center justify-center">
              <img src={google} alt="google" />
              <p>Sign up with Google</p>
            </button>
            <button className="cursor-pointer w-[50%] h-12.5 border rounded-[10px] flex items-center justify-center">
              <img src={facebook} alt="google" />
              <p>Sign up with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}