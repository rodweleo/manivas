import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMediaLinks() {
    return (
        <ul className="flex *:text-xl gap-2.5 *:cursor-pointer">
            <li><FaInstagram /></li>
            <li><FaXTwitter /></li>
            <li><FaLinkedin /></li>
        </ul>
    )
}