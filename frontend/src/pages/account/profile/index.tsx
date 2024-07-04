import { Form, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { Button } from "@/components/ui/button";
import { GiStairsGoal } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

export const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const signOut = async () => {
    await auth.signOut();
    navigate("/", {
      replace: true,
    });
  };
  return (
    <main className="w-full h-full flex flex-col">
      <article className="space-y-5">
        <section className="flex flex-col items-center">
          <div className="relative flex flex-col items-center">
              <img
                src={user?.photoURL}
                alt={`${user?.displayName}'s Avatar`}
                width="100px"
                className="rounded-full shadow-lg shadow-green-500"
              />
              <h1 className="text-xl font-semibold">{user?.displayName}</h1>
              <p>A Professional App Developer</p>
              <Form action="edit" className="w-full mt-5">
                <Button className="rounded-full w-full" type="submit">Edit Profile</Button>
              </Form>
            </div>
        </section>
        <section>
          <ul className="divide-y">
            <li><Button type="button" variant="link" className="w-full flex justify-between" onClick={() => navigate("/account/goals/create-goal")}><div className="flex items-center gap-1"><GiStairsGoal /> Create a Goal</div> <IoIosArrowForward /></Button></li>
            <li><Button onClick={() => signOut()} variant="link">Sign Out</Button></li>
          </ul>
        </section>
      </article>
      
      

     
    </main>
  );
};
