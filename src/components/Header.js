import { Navbar, Button, Badge } from "flowbite-react";

export default function Header({ path }) {
  return (
    <>
      <Navbar fluid={false} className="py-6">
        <Navbar.Brand href="/" className="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Talk to your member</span>
        </Navbar.Brand>
        <div className={path === '/new/email' ? "flex" : "flex md:order-2"}>
          <Button href="/new/email"
            gradientDuoTone="purpleToPink"
            className={path === '/new/email' ? "hidden" : "hidden md:flex"}
          >
            New email
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/member/find">Find my member</Navbar.Link>
          <Navbar.Link href="/new/email" className="flex items-center md:hidden">
            <span className="text-white -ml-3 py-1 px-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 align-self-center">
              New email
            </span>
            <Badge color="pink" className="ml-2 md:hidden">
              Powered by ChatGPT
            </Badge>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
