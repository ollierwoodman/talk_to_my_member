import Link from "next/link";

const defaultButtonText = "New email";

function buildButtonHref(postcode, isFor, policyName, username, address) {
  const baseUrl = '/new/email';
  const queryParams = {};
  if (postcode) {
    queryParams.postcode = postcode;
  }
  if (isFor) {
    queryParams.isFor = isFor;
  }
  if (policyName) {
    queryParams.policyName = policyName;
  }
  if (username) {
    queryParams.username = username;
  }
  if (address) {
    queryParams.address = address;
  }
  const queryString = new URLSearchParams(queryParams).toString();
  return `${baseUrl}${queryString ? '?' : ''}${queryString}`;
}

export default function NewEmailButton({className, postcode, isFor, policyName, username, address, buttonText=defaultButtonText}) {
  return (
    <>
      <Link
        className={`${className} text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg`}
        href={buildButtonHref(postcode, isFor, policyName, username, address)}
      >
        <span className="flex items-center rounded-md text-sm px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          {buttonText}
        </span>
      </Link>
    </>
  );
}
