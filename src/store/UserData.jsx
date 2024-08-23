import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserData() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("user is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
      toast.success("user logged out successfully", {
        position: "bottom-right",
      });
    } catch (err) {
      toast.error(err.message, { position: "bottom-right" });
    }
  }

  return (
    <>
      {userDetails ? (
        <div>
          <p>name {userDetails.fName}</p>
          <p>lastname {userDetails.lName}</p>
          <p>email {userDetails.email}</p>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <p>no user log in</p>
      )}
    </>
  );
}

export default UserData;
