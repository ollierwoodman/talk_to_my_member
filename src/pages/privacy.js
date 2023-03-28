import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import HeadTag from '@/components/HeadTag'

export default function Privacy() {
  return (
    <>
      <HeadTag title="Privacy" />
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-wrap flex-1 justify-center items-center bg-purple-100 px-4 py-4 lg:px-32'>
          <div class="rounded-md bg-gradient-to-r from-pink-500 to-purple-500 p-2">
            <div class="h-full max-w-xl bg-white py-4 px-8 rounded">
              <h5 className="text-2xl mb-2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Privacy
              </h5>
              <p className='text-justify'>
                In order for this website to provide the features that it does, some of the data you enter will be shared with third parties (i.e. <Link href="http://openai.com">OpenAI</Link>, <Link href="http://saveourmedicare.com.au">SaveOurMedicare.com.au</Link>). This data is sent anonymously and hence cannot be traced back to you.
                <br/><br/>
                Speaking in specifics - your postcode, should you choose to enter it, is shared with <Link href="http://saveourmedicare.com.au">SaveOurMedicare.com.au</Link>, while the name of the policy that you enter and whether you entered 'for' or 'against' is sent to <Link href="http://openai.com">OpenAI</Link>. Any other details that you enter (e.g. full name, address) is not transmitted away from your device and hence isn't stored by us or shared with any third parties.
              </p>
            </div>
          </div>
        </div>
        <Footer className="" />
      </div>
    </>
  )
}
