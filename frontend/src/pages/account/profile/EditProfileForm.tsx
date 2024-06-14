import { Form, useNavigate } from "react-router-dom"
import TextField from "../../../components/ui/TextField"
import { auth } from "../../../firebase/firebase.config";
import { IconButton } from "../../../components/ui/icon_button";
import { getUserById } from "../../../functions/getUserById";
import { useEffect, useRef, useState } from "react";

export const EditProfileForm = () => {
    const [currentUser, setUser] = useState<any>()
    const [showPrompt, setShowPromptDialog] = useState(false)
    const user = auth.currentUser;
    const navigate = useNavigate();
    const galleryBtnRef = useRef<HTMLInputElement | null>(null)
    const cameraBtnRef = useRef<HTMLInputElement | null>(null)



    useEffect(() => {
        getUserById(user?.uid).then((response: any) => {
            setUser(response.user)
        })
    }, [])

    const handleGalleryClick = () => {
        console.log(cameraBtnRef.current?.click())
    }

    const handleCameraClick = () => {
        console.log(galleryBtnRef.current?.click())
    }

    return <section className="p-5">
        <div>
            <button type="button" title="Go Back" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left text-slate-200 hover:text-slate-400"></i></button>
        </div>
        <form className="h-fit flex flex-col gap-10 items-center">
            <div className="relative w-fit">
                <img src="https://cdn.pixabay.com/photo/2023/02/08/14/02/ai-generated-7776701_640.jpg" alt={`${user?.displayName}'s Avatar`} width="150px" className="rounded-full shadow-lg shadow-green-500" />
                <button type="button" onClick={() => setShowPromptDialog(true)} className="absolute right-0 bottom-5">
                    <i className="fa-solid fa-camera scale-150 text-white bg-green-500 rounded-full border-2 border-white p-1"></i>
                </button>
            </div>
            <div className="w-full flex flex-col space-y-3">
                <TextField
                    options={{
                        label: "First Name",
                        hintText: "First Name",
                        required: true,
                        prefixIcon: "fa-solid fa-user",
                        defaultValue: currentUser.firstName
                    }} />
                <TextField
                    options={{
                        label: "Last Name",
                        hintText: "Last Name",
                        required: true,
                        prefixIcon: "fa-solid fa-user",
                        defaultValue: currentUser?.lastName
                    }} />
                <TextField
                    options={{
                        label: "Email Address",
                        hintText: "e.g. johndoe@gmail.com",
                        type: "email",
                        defaultValue: currentUser?.emailAddress,
                        prefixIcon: "fa-solid fa-envelope"
                    }} />
                <TextField
                    options={{
                        label: "Mobile Number",
                        hintText: "e.g. 0734562378",
                        type: "tel",
                        defaultValue: currentUser?.phoneNumber,
                        prefixIcon: "fa-solid fa-phone",
                        required: true
                    }} />
                <TextField
                    options={{
                        label: "ID Number",
                        hintText: "e.g. 123345678",
                        type: "number",
                        min: 0,
                        defaultValue: currentUser?.idNumber,
                        prefixIcon: "fa-solid fa-id-card",
                        required: true
                    }} />
            </div>
            <Form method="post" className="flex justify-start w-full">
                <IconButton
                    options={{
                        variant: "primary",
                        label: "Save Changes",
                        type: "submit",
                        style: "rounded-md w-[200px] h-[50px]",
                        disabled: true
                    }} />
            </Form>
        </form>

        {showPrompt && <dialog className="fixed w-full h-full top-0 bg-slate-950/50 flex flex-col items-center justify-center filter backdrop-blur-xl">
            <div className="w-2/4 flex flex-col gap-3 rounded-xl bg-white">
                <ul className="space-y-5 p-5">
                    <li className="text-2xl font-bold">
                        <button type="button" onClick={() => handleCameraClick()}><i className="fa-solid fa-camera"></i> Camera
                            <input type="file" accept="image/*" capture="environment" hidden ref={cameraBtnRef}></input>
                        </button>
                    </li>
                    <li className="text-2xl font-bold">
                        <button type="button" onClick={() => handleGalleryClick()}><i className="fa-solid fa-images"></i> Gallery
                            <input type="file" src="" alt="" hidden ref={galleryBtnRef} accept="image/png, image/jpeg, image/jpg" />
                        </button>
                    </li>
                </ul>
                <button onClick={() => setShowPromptDialog(false)} className="w-full h-12 text-lg  overflow-hidden flex items-center justify-center rounded-b-xl font-bold hover:bg-red-300 border-t-[1px] border-slate-300">
                    CANCEL
                </button>
            </div>
        </dialog>}


    </section >
}