import { redirect } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

export const rootLoader = () => {
  const user = auth.currentUser;
  if (user === null) {
    redirect("/");
  }

  return { user };
};
