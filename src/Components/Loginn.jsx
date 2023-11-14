import { useState,useContext } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import swal from "sweetalert";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const useAppstate = useContext(Appstate);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
     
      if(user){
        useAppstate.setLogin(true);
      swal({
        title: "Logged In",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      navigate('/')
    }else{
      swal({
        title: "Invalid Credentials",
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    } catch (error) {
      console.log(error.message);
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);
  };


  return (
    <div className="w-full flex flex-col mt-8 items-center">
      <h1 className="text-xl font-bold">Login</h1>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label for="message" className="leading-7 text-sm text-gray-300">
            User Email
          </label>
        <input
        id="message"
        name="message"
          onChange={(event) => {
            setLoginEmail(event.target.value);
         }}
            className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
         </div>
      </div>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label for="message" className="leading-7 text-sm text-gray-300">
            User Password
          </label>
        <input
          type="password"
          id="message"
          name="message"
          onChange={(event) => {
            setLoginPassword(event.target.value);
        }}
            className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        />
         </div>
      </div>
      <div className="p-2 w-full">
        <button
        onClick={login}
        className="flex mx-auto text-white bg-green-600 border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Login"}
        </button>
      </div>
      <div className=" mt-4">
        <p>Do not have account? <Link to={'/SignnUp'}><span className="text-blue-500">Sign Up</span></Link></p>
      </div>
    </div>
  );
}

export default App;