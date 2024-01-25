import Image from "next/image";
import Link from "next/link";
import { FaHandPointRight, FaHeart } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-dark-purple text-light-blue">
      <div className="container text-center py-12 md:flex items-center justify-between">
        <p className="flex items-center gap-2">
          <Image
            className="mx-auto"
            src="/favicon.png"
            alt="logo"
            width={50}
            height={50}
          />
          Designed & Developed by Perfect Nkosi
        </p>
        <p className="flex items-center justify-center gap-2">
          Thank You For Visiting <FaHeart color="red" />
        </p>
        <p className="flex items-center justify-center gap-2">
          Source code for this portfolio <FaHandPointRight />
          <Link
            className="text-light-foreground"
            href="https://github.com/PNkosi/Portfolio"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Source Code
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
