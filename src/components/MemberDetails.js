import { PARAM_NAME_POSTCODE } from "@/pages/member/find";
import { Button } from "flowbite-react";
import React from "react";
import NewEmailButton from "./NewEmailButton";

export default function MemberDetails({ data, postcode }) {
  return (
    <>
      <div className="gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 pb-2 md:text-4xl">
            {`${data.salutation} ${data.first_name} ${data.surname}`}
          </div>
          <div className="text-md font-extralight text-gray-800 md:text-2xl">
            {`Member for ${data.electorate}, ${data.state}`}
          </div>
        </div>
        <div className="grid grid-cols-12 items-center text-md text-gray-800 gap-4 pt-4 md:text-xl">
          <div className="col-span-8 font-mono break-all">
            {` ${data.email_address}`}
          </div>
          <NewEmailButton className="col-span-4" postcode={postcode} />
          <div className="col-span-8 font-mono">
            {` ${data.electorate_telephone}`}
          </div>
          <Button className="col-span-4" href={`tel:${data.electorate_telephone}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call
          </Button>
          <div className="col-span-8 font-mono">
            {` ${data.electorate_full_address}`}
          </div>
          <Button className="col-span-4" onClick={window.open(`https://www.google.com/maps/search/${data.electorate_postal_suburb} ${data.electorate_postal_state} ${data.electorate_postal_postcode} Australia`, '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Google Maps
          </Button>
        </div>
      </div>
      <div className="text-gray-400 text-xs pt-2 text-center">
          Member details are not guaranteed to be accurate
      </div>
    </>
  );
}
