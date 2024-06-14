import { redirect } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

export const accountLoader = () => {
  const user = auth.currentUser;

  if (user === null) {
    redirect("/login");
  }

  return { user };
};
