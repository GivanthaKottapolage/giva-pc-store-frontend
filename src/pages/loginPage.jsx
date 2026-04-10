import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function login(){
        console.log("Login button clicked");
        console.log("Email: ", email)
        console.log("password: ",password)

        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login",{
                email: email,
                password: password,
            });
            console.log(res)

            if(res.data.role== "admin"){
                //window.location.href = "/admin";
                navigate("/admin");
            }else{
                //window.location.href ="/";
                navigate("/");
            }
            
            //alert("Login Successful! Welcome back.");
            toast.success("Login Successful! Welcome back.");

        } catch (err) {

            //alert("Login failed! Please check your credentials and try again");
            toast.error("Login failed! Please check your credentials and try again");
            console.log("Error during login: ");
            console.log(err);
            
        }

    }

    return(
        <div className = "w-full h-screen bg-[url('/bg2.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">
                <img src="/logo.png" alt="logo" className="w-[200px] h-[200px] mb-[20px] "></img>

                <h1 className="text-[50px] text-green text-shadow-accent text-shadow-2xs text-center font-bold">Your Trusted Tech Partner</h1>
                <p className="text-[30px] text-white italic text-center">Reliable products, expert advice, and unmatched customer support.</p>

            </div>
            <div className="w-[50%] h-full flex justify-center items-center">

                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px]">
                    <h1 className="text-[40px] font-bold mb-[20px] text-white text-shadow-white">Login</h1>
                    <input
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            
                        }}
                        type="email" placeholder="your email" className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-green"/>
                    <input 
                    onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            
                        }}
                    
                    type="password" placeholder="your password" className="w-full h-[50px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-green"/>
                    <p className="text-white not-italic w-full mb-[20px] text-right">Forgot your password? <Link to= "/forgot-password" className="text-green italic">Reset it here</Link></p>
                    <button onClick={login} className="w-full h-[50px] bg-accent text-white font-bold text-[20px] rounded-lg border-accent hover:bg-transparent hover:text-accent">Login</button>
                    <p className="text-white not-italic">Don't have an account? <Link to = "/register" className="text-green italic">Register here</Link> </p>


                </div>

            </div>
            
        </div>
    )
}