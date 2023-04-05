import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeadTag from '@/components/HeadTag'

export default function Disclaimer() {
  return (
    <>
      <HeadTag title="Disclaimer" />
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-wrap flex-1 justify-center items-center bg-blue-100 px-4 py-4 lg:px-32'>
          <div class="rounded-md bg-blue-700 p-2">
            <div class="h-full max-w-3xl bg-white py-4 px-8 rounded">
              <h5 className="text-2xl mb-2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Disclaimer
              </h5>
              <p className='text-justify'>
                There are inherent limitations and biases with using ChatGPT to generate text related to government policy. 
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Limitations
              </h5>
              <p className='text-justify'>
                ChatGPT is often guilty of generating text that sounds very authorative and yet is completely false. It is your responsibility to fact check and proofread the text that this website generates for you.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Biases
              </h5>
              <p className='text-justify'>
                ChatGPT has been deliberately programmed to avoid generating text that discusses certain subjects (e.g. harmful, unethical or illegal topics). It is possible that while using this website, the generated text will contain ChatGPT's refusal to discuss such topics.
                <br/><br/>
                Similarly, ChatGPT will refuse to argue for or against some policies (e.g. arguing against climate change action, arguing against democracy) due to the political leaning that it has been programmed to adhere to. While using this website, you are expected to be aware of these biases and edit any generated text to align with the views you want to communicate.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Release of liability
              </h5>
              <p className='text-justify'>
                By using this website, you agree that you are responsible for any how any text generated while using the website is used or distributed.  
              </p>
            </div>
          </div>
        </div>
        <Footer className="" />
      </div>
    </>
  )
}
