import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosArrowBack } from "react-icons/io";

const EditProfileSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\+\d{1,15}$/),
});
export const EditProfileForm = () => {
  const user = auth.currentUser
  const [showPrompt, setShowPromptDialog] = useState(false);
  const navigate = useNavigate();
  const galleryBtnRef = useRef<HTMLInputElement | null>(null);
  const cameraBtnRef = useRef<HTMLInputElement | null>(null);

  const handleGalleryClick = () => {
    console.log(cameraBtnRef.current?.click());
  };

  const handleCameraClick = () => {
    console.log(galleryBtnRef.current?.click());
  };

  const EditProfileForm = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof EditProfileSchema>) {
    console.log(values);
  }

  return (
    <section className="p-5">
      <Form {...EditProfileForm}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <button
                type="button"
                title="Go Back"
                onClick={() => navigate(-1)}
              >
                <IoIosArrowBack />
              </button>
              Edit Profile
            </CardTitle>
          </CardHeader>
          <form onSubmit={EditProfileForm.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <div className="relative w-fit">
                <img
                  src="https://cdn.pixabay.com/photo/2023/02/08/14/02/ai-generated-7776701_640.jpg"
                  alt={`${user?.displayName}'s Avatar`}
                  width="150px"
                  className="rounded-full shadow-lg shadow-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPromptDialog(true)}
                  className="absolute right-0 bottom-5"
                >
                  <i className="fa-solid fa-camera scale-150 text-white bg-blue-500 rounded-full border-2 border-white p-1"></i>
                </button>
              </div>
              <FormField
                control={EditProfileForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John"
                        {...field}
                        defaultValue={user ? user.displayName! : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Doe"
                        {...field}
                        defaultValue={
                          user ? user.displayName! : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={EditProfileForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="abc@example.com"
                        {...field}
                        defaultValue={user ? user.email! : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="##########"
                        {...field}
                        defaultValue={user ? user.phoneNumber! : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Changes</Button>
            </CardFooter>
          </form>
        </Card>
      </Form>

      {showPrompt && (
        <dialog className="fixed w-full h-full top-0 bg-slate-950/50 flex flex-col items-center justify-center filter backdrop-blur-xl">
          <div className="w-2/4 flex flex-col gap-3 rounded-xl bg-white">
            <ul className="space-y-5 p-5">
              <li className="text-2xl font-bold">
                <button type="button" onClick={() => handleCameraClick()}>
                  <i className="fa-solid fa-camera"></i> Camera
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    hidden
                    ref={cameraBtnRef}
                  ></input>
                </button>
              </li>
              <li className="text-2xl font-bold">
                <button type="button" onClick={() => handleGalleryClick()}>
                  <i className="fa-solid fa-images"></i> Gallery
                  <input
                    type="file"
                    src=""
                    alt=""
                    hidden
                    ref={galleryBtnRef}
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </button>
              </li>
            </ul>
            <button
              onClick={() => setShowPromptDialog(false)}
              className="w-full h-12 text-lg  overflow-hidden flex items-center justify-center rounded-b-xl font-bold hover:bg-red-300 border-t-[1px] border-slate-300"
            >
              CANCEL
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
};
