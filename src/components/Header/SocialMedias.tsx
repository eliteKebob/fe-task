import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedias = () => {
  return (
    <React.Fragment>
      <Link href={"/"}>
        <FaInstagram />
      </Link>
      <Link href={"/"}>
        <FaYoutube />
      </Link>
      <Link href={"/"}>
        <FaDiscord />
      </Link>
      <Link href={"/"}>
        <FaXTwitter />
      </Link>
    </React.Fragment>
  );
};

export default SocialMedias;
