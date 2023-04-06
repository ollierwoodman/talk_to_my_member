import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadTag from "@/components/HeadTag";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Custom404() {
  return <>
    <HeadTag title="404" />
      <div className='min-h-screen flex flex-col'>
        <Header path="/" />
        <div className='bg-blue-100 flex flex-wrap flex-1 justify-center items-center px-4 py-4 lg:px-32'>
          <div className="max-w-3xl">
            <Card>
              <h5 className="text-2xl mb-2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                404
              </h5>
              <p className='text-justify'>
                Whoops! There's no page here. 
              </p>
              <Link className="text-white bg-blue-700 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 group flex h-min items-center justify-center p-2 text-center font-medium focus:z-10 rounded-lg" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </Link>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
  </>
}