import { useState } from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import swal from "sweetalert";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const Signup = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      swal({
        title: "Signned In",
        icon: "success",
        buttons: false,
        timer: 3000
      })
navigate('/loginn')
      console.log(user);
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
    <h1 className="text-xl font-bold">Sign up</h1>
    
      <div className="p-2 w-full md:w-1/3">
      <div className="relative">
        <label for="message" className="leading-7 text-sm text-gray-300">
          User Email
        </label>
        <input
         id="message"
         name="message"
         placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
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
          type={"password"}
          id="message"
          name="message"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        </div>
      </div>
      <div className="p-2 w-full">
        <button onClick={Signup}
        className="flex mx-auto text-white bg-green-600 border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
        >  {loading ? <TailSpin height={25} color="white" /> : "Signup"}</button>
         </div>
         <div className=" mt-4">
        <p>Already have an account <Link to={'/loginn'}><span className="text-blue-500">Login</span></Link></p>
      </div>
      </div>
    
  );
}

export default App;