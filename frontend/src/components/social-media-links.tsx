import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMediaLinks() {
    return (
        <ul className="flex gap-2.5 text-2xl cursor-pointer">
            <li><button title="Instagram"><FaInstagram /></button></li>
            <li><button title="X (Formerly known as Twitter)"><FaXTwitter /></button></li>
            <li><button title="LinkedIn"><FaLinkedin /></button></li>
        </ul>
    )
}