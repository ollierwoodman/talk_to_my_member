import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeadTag from '@/components/HeadTag'
import { Card } from 'flowbite-react'

export default function Disclaimer() {
  return (
    <>
      <HeadTag title="Disclaimer" />
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='bg-blue-100 flex flex-wrap flex-1 justify-center items-center px-4 py-4 lg:px-32'>
          <div className="max-w-3xl">
            <Card>
              <h5 className="text-2xl mb-2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Disclaimer
              </h5>
              <p className='text-justify'>
                There are inherent limitations and biases with using GPT (the transformer model that ChatGPT uses) to generate text related to law-making and government policy. Currently, this project uses GPT-3.5-Turbo for text generation. GPT-3.5-Turbo (henceforth referred to as 'GPT') is a closed-source language model developed by OpenAI.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Limitations
              </h5>
              <p className='text-justify'>
                GPT is often guilty of generating text that sounds very authorative and yet is completely false. It is your responsibility to fact check and proofread the text that this website generates for you.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Biases
              </h5>
              <p className='text-justify'>
                GPT has been deliberately programmed to avoid generating text that discusses certain subjects (e.g. harmful, unethical or illegal topics). It is possible that while using this website, the generated text will contain GPT's refusal to discuss such topics.
                <br/><br/>
                Similarly, GPT will refuse to argue for or against some policies (e.g. arguing against climate change action, arguing against democracy) due to the political leaning that it has been programmed to adhere to. While using this website, you are expected to be aware of these biases and edit any generated text to align with the views you want to communicate.
              </p>
              <h5 className="text-lg mb-2 mt-4 font-bold text-center tracking-tight text-gray-900 dark:text-white">
                Release of liability
              </h5>
              <p className='text-justify'>
                By using this website, you agree that you are responsible for any how any text generated while using the website is used or distributed.  
              </p>
            </Card>
          </div>
        </div>
        <Footer className="" />
      </div>
    </>
  )
}
