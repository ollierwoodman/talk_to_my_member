import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeadTag from '@/components/HeadTag'
import Link from 'next/link'

export default function SupportUs() {
  return (
    <>
      <HeadTag title="Support us" />
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-wrap flex-1 justify-center items-center bg-blue-100 px-4 py-4 lg:px-32'>
          <div class="rounded-md bg-blue-700 p-2">
            <div class="h-full max-w-3xl bg-white py-4 px-8 rounded">
              <h5 className="text-2xl mb-2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Ways to support this website
              </h5>
              <p className='text-justify'>
                Hi there! Thanks for visiting. I appreciate you wishing to support the website in some way. I am undertaking this project with no intention of making money or accepting funding. Despite that, if you still wish to support the project, I have laid out some ways below.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Tell a friend
              </h5>
              <p className='text-justify'>
                Give the power of this tool to a friend, family member, colleague, etc. Perhaps someone who doesn't already involves themselves with politics, but feels strongly about a current issue. Allow their voice to be heard by their member of parliament.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Contribute your feedback and suggestions
              </h5>
              <p className='text-justify'>
                Your feedback and suggestions are valuable and welcome! Feel free to get in touch via GitHub or, in the near future, via email. 
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Make a donation
              </h5>
              <p className='text-justify'>
                While completely unecessary, you can donate to this project via <Link className="underline text-blue-700" href={'https://www.buymeacoffee.com/ooodman'}>Buy Me a Coffee</Link>. This project is completely non-profit, hence all donations will go towards hosting, supporting and further improving the website.
              </p>
            </div>
          </div>
        </div>
        <Footer className="" />
      </div>
    </>
  )
}
