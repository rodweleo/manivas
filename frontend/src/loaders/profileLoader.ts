import { auth } from "@/firebase/firebase.config";

export const profileLoader = () => {
  const user = auth.currentUser;

  return { user };
};
