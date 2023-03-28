import EmailPreview from "@/components/EmailPreview";
import MemberDetails from "@/components/MemberDetails";
import Personaliser from "@/components/Personaliser";
import PolicyPicker from "@/components/PolicyPicker";
import MemberFinder from "@/components/MemberFinder"
import { Card, Button } from "flowbite-react";

const postcode = '312';
const email = '';

export default function EmailBuilder() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 xl:col-span-4 space-y-4">
          <Card className="" id="policy-picker">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              1. What policy do you want to talk about?
            </h5>
            <PolicyPicker />
          </Card>
          <Card className="">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2. Find your member
            </h5>
            <MemberFinder isForm={false} />
          </Card>
          <Card className="">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              3. Make it personal
            </h5>
            <p className="text-sm text-justify text-gray-500">
              Adding your name and address to your message will let your member know that you are one of their constituents and hence make them much more likely to read (or even reply) to your message.
            </p>
            <Personaliser />
          </Card>
        </div>
        <div className="flex flex-col col-span-12 sm:col-span-6 xl:col-span-8">
          <Card id="results"
            className="flex-1"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About your member:
            </h5>
            <MemberDetails postcode={postcode} emptyMessage={"No data yet - complete step 2"} />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
              The first draft of your message:
            </h5>
            <EmailPreview email={email} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
              <Button 
                color="gray"
                onClick={
                  async () => {
                    try {
                      await navigator.clipboard.writeText(text);
                      console.log('Content copied to clipboard');
                    } catch (err) {
                      console.error('Failed to copy: ', err);
                    }
                  }
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-5 h-5">
                  <path strokeLinecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                </svg>
                Copy to clipboard
              </Button>
              <Button 
                onClick={console.log("Yep")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-5 h-5">
                  <path strokeLinecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
