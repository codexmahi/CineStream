import React from 'react';
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice';






   
  const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{})
    .catch((error)=>{
      navigate("/error");
    });
  };

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName,photoURL} = user;
        dispatch
        (addUser
          ({uid:uid, email:email, displayName:displayName, photoURL:photoURL})
        );
         navigate("/browse");
          
      } else {
         dispatch(removeUser());
          navigate("/");
         
      }
    });
    // Clean up the subscription when the component unmounts
    return () => unSubscribe();
  },[]);


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
   <div className="relative inline-block">
  
  
  
  
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
    <div className="text-white text-center p-4">
      <h1 className="font-bold text-2xl">Your Text Here</h1>
      <p className="text-lg">Additional info here</p>
    </div>
  </div>
</div>
    {
      user && (
        <div className="flex p-2">
         <button className="border border-zinc-900 p-1 m-2 rounded-full">
  <img
    className="w-12 h-12 rounded-full"
    alt="user-icon"
    src={user.photoURL}
  />
</button>

          <button
            onClick={handleSignOut}
            className="py-2 px-3 m-2 bg-zinc-900 rounded-lg text-white   active:bg-opacity-70 transition duration-150 "
          >
            Sign Out
          </button>
        </div>
      )
    }
  </div>
  
  );
};


export default Header;
