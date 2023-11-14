import { useState } from "react";
import {
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from "./FirebaseConfig";

function App() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <button className="flex mx-auto text-white bg-green-600 border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" onClick={logout}> LOGOUT </button>
        </div>
    );
}

export default App;