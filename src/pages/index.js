import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import HeadTag from '@/components/HeadTag'

export default function Home() {
  return (
    <>
      <HeadTag title="Home" />
      <div className='min-h-screen flex flex-col'>
        <Header path="/" />
        <div className='flex flex-wrap flex-1 bg-blue-100 justify-center items-center px-4 py-4 lg:px-32'>
          <div className="max-w-5xl rounded-md bg-blue-700 p-2">
            <div className="h-full w-full bg-purple-100 rounded">
              <Image src='/img/house_of_reps.jpg' className='rounded' alt='Australian house of representatives' width="1000" height="1000" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
