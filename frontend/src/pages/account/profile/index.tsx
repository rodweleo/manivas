import { Form, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { ProfileMenuListItem } from "@/components/profile/widgets/ProfileMenuListItem";

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
    <section className="w-full h-full flex flex-col justify-between gap-5 p-5">
      <ul className="space-y-10 flex flex-col items-center w-full">
        <li>
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2023/02/08/14/02/ai-generated-7776701_640.jpg"
              alt={`${user?.displayName}'s Avatar`}
              width="150px"
              className="rounded-full shadow-lg shadow-green-500"
            />
            <Form action="edit">
              <button className="absolute -right-2 bottom-5">
                <i className="fa-solid fa-pen text-white bg-green-500 rounded-full border-2 border-white p-3"></i>
              </button>
            </Form>
          </div>
        </li>

        <li className="w-full">
          <NavLink to="/account/support" className="w-full">
            <ProfileMenuListItem label="Support" icon="fa-solid fa-phone" />
          </NavLink>
        </li>
      </ul>

      <button
        className="bg-red-200 text-red-400 font-bold text-xl py-2 rounded-md"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </section>
  );
};
