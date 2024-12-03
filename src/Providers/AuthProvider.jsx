import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

// step 2
export const AuthContext = createContext(null);


// step 1
const AuthProvider = ({children}) => {

    // step 5 
    const [user, setUser] = useState(null);
    // step 6
    const [loading, setLoading] = useState(true);

    // step 8
    const createUser = (email, password) =>{
        // step 10
        setLoading(true);
        // step 9
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // step 29
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // step 4
    const userInfo = {
        // step 7
        user,
        loading,
        // step 11
        createUser, 
        // step 30
        signInUser
        
    }
    return (
        // step 3
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;