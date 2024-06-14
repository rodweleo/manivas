import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const getUserById = async (uId: string | undefined) => {
  const usersRef = collection(db, "users");
  try {
    const q = query(usersRef, where("uId", "==", uId));
    const qSnapshot = await getDocs(q);

    const user = qSnapshot.docs[0].data();
    return { user };
  } catch (error) {
    return error;
  }
};
