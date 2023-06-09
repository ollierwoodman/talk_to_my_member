import { Navbar } from "flowbite-react";
import NewEmailButton from "./NewEmailButton";

export default function Header({ path }) {
  return (
    <>
      <Navbar fluid={false} className="py-6">
        <Navbar.Brand href="/" className="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Talk to my member</span>
        </Navbar.Brand>
        <div className={path === '/new/email' ? "flex" : "flex md:order-2"}>
          <NewEmailButton className={path === '/new/email' ? "hidden" : "hidden md:flex"} />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/member/find">Find my member</Navbar.Link>
          <Navbar.Link href="/new/email" className={`flex items-center ${path === '/new/email' ? "hidden" : "flex md:hidden"} bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            New email
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
