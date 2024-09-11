import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/audi-putra" },
  { icon: <FaTwitter />, link: "https://twitter.com/audi_putra" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/audi-putra" },
  { icon: <FaYoutube />, link: "https://youtube.com/c/AudiPutra" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.link} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
