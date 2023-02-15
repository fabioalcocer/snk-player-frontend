import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-500/30 py-5 px-10 sm:flex-row sm:gap-0">
        <div className="flex gap-6 text-zinc-400">
          <Link
            href="https://twitter.com/fabioalcocer17"
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my Twitter account"
          >
            <BsTwitter className="h-5 w-5 fill-zinc-200 hover:fill-blue-400 hover:group-hover:fill-blue-400 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300" />
          </Link>
          <Link
            href="https://github.com/fabioAlcocer"
            className="group -m-1 p-1"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to my GitHub account"
          >
            <BsGithub className="h-5 w-5 fill-zinc-200 hover:fill-zinc-800 hover:group-hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fabio-alcocer/"
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my LinkedIn account"
          >
            <BsLinkedin className="h-5 w-5 fill-zinc-200 hover:fill-blue-600 hover:group-hover:fill-blue-600 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300" />
          </Link>
        </div>
        <p className="text-center text-sm text-zinc-400">
          © 2023 Developed by Fabio Alcocer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
