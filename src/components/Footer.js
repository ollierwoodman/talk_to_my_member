import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      <div className="justify-self-center lg:justify-self-start">
        <Link href="/" className="w-full flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 w-5 h-5"
            alt="Talk to my member logo"
          >
            <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
          </svg>
          <span className="self-center whitespace-nowrap text-md lg:text-sm font-semibold dark:text-white">Talk to my member</span>
        </Link>
      </div>
      <div className="justify-self-center">
        <div className="flex flex-col gap-4 lg:flex-row text-sm text-gray-700 justify-center text-center">
          <Link className="hover:underline" href="https://github.com/ollierwoodman/talk_to_my_member">GitHub</Link>
          <Link className="hover:underline" href="/privacy">Privacy</Link>
          <Link className="hover:underline" href="/disclaimer">Disclaimer</Link>
          <Link className="hover:underline" href="/support-us">Support us ❤️</Link>
        </div>
      </div>
      <div className="justify-self-center lg:justify-self-end text-gray-700">
        {`© Ollie ${new Date().getFullYear()}`}
      </div>
    </footer>
  );
}