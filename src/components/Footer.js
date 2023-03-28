import { Footer as FlowbiteFooter, Navbar } from "flowbite-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      <div className="justify-self-center lg:justify-self-start">
        <Navbar.Brand href="/" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 w-5 h-5"
            alt="Talk to your member logo"
          >
            <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
          </svg>
          <span className="self-center whitespace-nowrap text-md lg:text-sm font-semibold dark:text-white">Talk to your member</span>
        </Navbar.Brand>
      </div>
      <div className="justify-self-center lg:justify-self-center">
        <FlowbiteFooter.LinkGroup className="flex flex-col gap-2 lg:flex-row justify-center text-center">
          <FlowbiteFooter.Link href="https://github.com/ollierwoodman/talk_to_my_member">Github</FlowbiteFooter.Link>
          <FlowbiteFooter.Link href="/privacy">Privacy</FlowbiteFooter.Link>
          <FlowbiteFooter.Link href="/disclaimer">Disclaimer</FlowbiteFooter.Link>
          <FlowbiteFooter.Link href="https://www.buymeacoffee.com/ooodman">Buy me a boba 🧋</FlowbiteFooter.Link>
        </FlowbiteFooter.LinkGroup>
      </div>
      <div className="justify-self-center lg:justify-self-end">
        <FlowbiteFooter.Copyright className="" by="Ollie Woodman" year={new Date().getFullYear()} />
      </div>
    </footer>
  );
}