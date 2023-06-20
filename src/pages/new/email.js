import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadTag from "@/components/HeadTag";
import { Card, Button, Spinner, Label, TextInput, ToggleSwitch, Alert, Textarea } from "flowbite-react";
import { useMember } from "@/resources/useMember";
import { useState } from "react";
import { isAustralianPostcode, PARAM_NAME_POSTCODE, POSTCODE_PATTERN } from "../member/find";
import { useCompletion } from "@/resources/useCompletion";
import { usePolicies } from "@/resources/usePolicies";
import { PARAM_NAME_FORORAGAINST, PARAM_NAME_POLICYNAME } from "../api/compose";
import React from "react";
import LegoSpinner from "@/components/LegoSpinner";

export const PARAM_NAME_STATE = "state";
export const PARAM_NAME_USER_FULL_NAME = "username";
export const PARAM_NAME_USER_FULL_ADDRESS = "address";

const EMAIL_BODY_INITIAL = `I. Introduction
  Brief greeting, addressing the representative by their title
  Introduce yourself and state the purpose of your email: to express your support for a particular policy and to urge them to take action on it

II. Background
  Provide context and background information about the policy
  Explain why this policy is important to you and how it would benefit the community

III. Supporting Evidence
  Provide evidence to support your argument, such as statistics or personal anecdotes
  Explain how this policy aligns with the representative's values and party platform

IV. Call to Action
  Clearly state what action you would like the representative to take
  Explain how their action would benefit the community and why it is important

V. Conclusion
  Thank the representative for their time and consideration
  End with a polite closing
  Provide your contact information (name, address and perhaps a phone number)`

function memberDataExists(memberData) {
  return memberData && memberData.mp_data && memberData.mp_data.data
}

function sortAndMapPoliciesToOptions(policies) {
  const sortedPolicies = policies.sort((a, b) => new Date(b.last_edited_at) - new Date(a.last_edited_at));
  return sortedPolicies.map((option) => (
    <option key={option.id} value={option.name}>
      {option.name}
    </option>
  ));
}

function buildEmailBody(completionData, shouldCompose, username, address, memberData){
  if (!completionData || !completionData.text) {
    if (shouldCompose) {
      return 'Error encountered while generating email text'
    } else {
      return EMAIL_BODY_INITIAL
    }
  }
  
  let out = '';
  if (memberDataExists(memberData)) {     
    out += `Dear ${member.mp_data.data.salutation} ${member.mp_data.data.first_name} ${member.mp_data.data.surname}`
  } else {
    out += `Dear [YOUR MEMBER'S TITLE AND FULL NAME]`
  }

  out += `${completionData.text}`

  out += `Yours sincerely
  ${ username ? username : '[YOUR FULL NAME]' }
  ${ address ? address : '[YOUR ADDRESS]' }`

  return out
}

function constructMailToURI(email, subject, body) {
  let link = 'mailto:' + encodeURIComponent(email);

  if (subject) {
    link += '?subject=' + encodeURIComponent(subject);
  }

  if (body) {
    link += (subject ? '&' : '?') + 'body=' + encodeURIComponent(body);
  }

  return link;
}

export default function NewEmail({ initialPostcode="", initialIsFor=true, initialPolicyName="", initialUsername="", initialAddress="" }) {
  const [postcode, setPostcode] = useState(initialPostcode);
  const [isFor, setIsFor] = useState(initialIsFor);
  const [policyName, setPolicyName] = useState(initialPolicyName);
  const [username, setUsername] = useState(initialUsername);
  const [address, setAddress] = useState(initialAddress);
  const [shouldCompose, setShouldCompose] = useState(false);
  // const [isThankYouModalShown, setIsThankYouModalShown] = useState(false);

  let emailRecipient = "";
  let emailSubject = "";
  let emailBody = ""

  const onPostcodeChange = event => {
    setPostcode(event.target.value);
  };
  const onIsForChange = () => {
    setIsFor(!isFor);
  };
  const onPolicyNameChange = event => {
    setPolicyName(event.target.value);
  };
  const onUsernameChange = event => {
    setUsername(event.target.value);
  };
  const onAddressChange = event => {
    setAddress(event.target.value);
  };
  // const toggleThankYouModal = () => {
  //   setIsThankYouModalShown(!isThankYouModalShown);
  // };

  let policiesOptions = <></>
  let recipientContent = <></>
  let subjectContent = <></>
  let emailContent = <></>

  const { data: policiesData, error: policiesError, isLoading: policiesIsLoading } = usePolicies();
  const { data: memberData, error: memberError, isLoading: memberIsLoading } = useMember(postcode, isAustralianPostcode(postcode));
  const { data: completionData, error: completionError, isLoading: completionIsLoading } = useCompletion(isFor, policyName, shouldCompose);

  if (policyName) {
    emailSubject = `In ${isFor ? "support of" : "opposition of"} ${policyName}`;
    subjectContent = <>
      <Label htmlFor="subject" value="Email subject" hidden />
      <Textarea
        id="subject"
        className="whitespace-pre-line flex-1"
        value={`${emailSubject}`}
        disabled={true}
        rows={1}
      />
    </>
  } else {
    emailSubject = `Sample subject`;
    subjectContent = <>
      <Alert
        className="flex-grow"
        color={"blue"}
      >
        {" Enter a policy for a sample subject"}
      </Alert>
    </>
  }

  if (!policiesIsLoading && !policiesError) {
    policiesOptions = sortAndMapPoliciesToOptions(policiesData);
  }

  if (memberIsLoading) {
    recipientContent = <Spinner size="xl" className="" />
  } else {
    if (memberDataExists(memberData)) {
      const recipientTitle = memberData.mp_data.data.salutation;
      const recipientFirstName = memberData.mp_data.data.first_name;
      const recipientSurname = memberData.mp_data.data.surname;
      const recipientEmailAddress = memberData.mp_data.data.email_address;
      
      emailRecipient = recipientEmailAddress;
      
      recipientContent = <>
        <Label htmlFor="recipient" value="Email recipient" hidden />
        <Textarea
          id="recipient"
          className="whitespace-pre-line flex-1"
          placeholder="Email content will appear here..."
          value={`${recipientTitle} ${recipientFirstName} ${recipientSurname} <${recipientEmailAddress}>`}
          disabled={true}
          rows={1}
        />
      </>
    } else {      
      let alertMessage = "";
      let alertColour = "";
      if (isAustralianPostcode(postcode)) {
        alertMessage = `Couldn't find a member for the postcode "${postcode}"`;
        alertColour = "red";
      } else {
        alertMessage = `Enter your postcode to retrieve your member's details`;
        alertColour = "blue";
      }

      recipientContent = <>
        <Alert
          className="flex-grow"
          color={alertColour}
        >
          {` ${alertMessage}`}
        </Alert>
      </>
    }
  }

  if (completionIsLoading) {
    emailContent = <LegoSpinner />
  } else {
    if (completionError) {
      // console.error(completionError)
    } else {
      emailContent = <>
        <Label htmlFor="emailbody" value="Email body" hidden />
        <Textarea
          id="emailbody"
          className="whitespace-pre-line flex-1"
          placeholder="Email content will appear here..."
          value={buildEmailBody(completionData, shouldCompose, username, address, memberData)}
          disabled={true}
          rows={15}
        />
      </>;
    }
  }

  return (
    <>
      <HeadTag title="New email" />
      <div className='min-h-screen flex flex-col'>
        <Header path="/new/email" />
        <main className="flex flex-1 justify-center items-center bg-purple-100 px-4 py-4">
          <div className="grid grid-cols-12 gap-4 max-w-7xl">
            <div className="col-span-12 sm:col-span-6 xl:col-span-5 space-y-4">
              <Card className="">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  1. What policy do you want to talk about?
                </h5>
                <div className="flex flex-wrap items-center justify-start gap-4">
                  <p className="text-sm">I am passionately</p>
                  <ToggleSwitch
                    className=""
                    checked={isFor}
                    label={isFor ? "for" : "against"}
                    onChange={onIsForChange}
                  />
                  <Label htmlFor="policy" value="Policy name" hidden />
                  <TextInput id="policy"
                    className="flex-grow"
                    type="text" 
                    list="policies" 
                    placeholder="e.g. climate change action"
                    required={false}
                    disabled={false}
                    value={policyName}
                    onChange={onPolicyNameChange}
                  />
                  <datalist id="policies">
                    {policiesOptions}
                  </datalist>
                </div>
                <button 
                  className={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg`}
                  onClick={() => {setShouldCompose(true)}}
                >
                  <span className="flex items-center rounded-md text-sm px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Write email for me
                  </span>
                </button>
                <p className="text-xs text-gray-500 text-center">Powered by ChatGPT.</p>
              </Card>
              <Card className="">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  2. Find your member
                </h5>
                <div className="flex flex-wrap items-center gap-4">
                  <Label htmlFor="postcode" value="My postcode is" className="flex-none mx-auto" />
                  <TextInput id="postcode"
                    className="flex-1 min-w-[8rem]"
                    type="text" 
                    placeholder="e.g. 3000"
                    pattern={POSTCODE_PATTERN.source}
                    title="Please enter a valid Australian postcode e.g. 2000"
                    required={true}
                    disabled={false}
                    value={postcode}
                    onChange={onPostcodeChange}
                  />
                </div>
              </Card>
              <Card className="">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  3. Make it personal
                </h5>
                <p className="text-sm text-justify text-gray-500">
                  Adding your name and address to your message will let your
                  member know that you are one of their constituents and hence
                  make them much more likely to read (or even reply) to your
                  message.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Label htmlFor="fullname" value="Full name" className="flex-none" />
                  <TextInput
                    id="fname"
                    className="flex-grow"
                    type="text"
                    placeholder="John Citizen"
                    required={false}
                    value={username}
                    onChange={onUsernameChange}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Label htmlFor="address" value="Residential address" className="flex-none" />
                  <TextInput
                    id="address"
                    className="flex-grow"
                    type="text"
                    placeholder="123 Fake Street, Melbourne 3000"
                    required={false}
                    value={address}
                    onChange={onAddressChange}
                  />
                </div>
                <p className="text-xs text-gray-500 text-center">
                  We don't store or share these details with anyone.
                </p>
              </Card>
            </div>
            <div className="flex flex-col col-span-12 sm:col-span-6 xl:col-span-7">
              <Card id="results" className="">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Your generated email:
                </h5>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-md text-gray-900 dark:text-white my-3">
                    To:
                  </p>
                  {recipientContent}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-md text-gray-900 dark:text-white my-3">
                    Subject:
                  </p>
                  {subjectContent}
                </div>
                <p className="text-md text-gray-900 dark:text-white mt-4">
                  The first draft of your message:
                </p>
                {emailContent}
                <div className={`grid grid-cols-1 xl:grid-cols-2 gap-2 ${completionIsLoading ? "hidden" : ""}`}>
                  <button
                    className="text-white text-sm bg-gray-500 border border-transparent hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-500 dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:disabled:hover:bg-gray-500 group flex h-min items-center justify-center p-2.5 text-center font-medium focus:z-10 rounded-lg"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(`${emailRecipient ? `TO: \n${emailRecipient}\n\n` : ``}SUBJECT: \n${emailSubject ? emailSubject : `In ${isFor ? "support of" : "opposition of"} [policy]`}\n\nBODY: \n${emailBody ? emailBody : EMAIL_BODY_INITIAL}`);
                        console.log("Content copied to clipboard");
                      } catch (err) {
                        console.error("Failed to copy: ", err);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                      />
                    </svg>
                    Copy to clipboard
                  </button>
                  <button href={constructMailToURI(emailRecipient, emailSubject, emailBody)} 
                    className="text-white text-sm bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 group flex h-min items-center justify-center p-2.5 text-center font-medium focus:z-10 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    Send email
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">It is expected that you proofread and edit the generated email yourself before sending it.</p>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {/* <React.Fragment>
        <Modal
          dismissible={true}
          show={isThankYouModalShown}
          onClose={() => {setIsThankYouModalShown(false)}}
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            Test
          </Modal.Footer>
        </Modal>
      </React.Fragment> */}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      initialPostcode: context.query[PARAM_NAME_POSTCODE] ? decodeURIComponent(context.query[PARAM_NAME_POSTCODE]) : "",
      initialIsFor: context.query[PARAM_NAME_FORORAGAINST] === "against" ? false : true, 
      initialPolicyName: context.query[PARAM_NAME_POLICYNAME] ? decodeURIComponent(context.query[PARAM_NAME_POLICYNAME]) : "", 
      initialUsername: context.query[PARAM_NAME_USER_FULL_NAME] ? decodeURIComponent(context.query[PARAM_NAME_USER_FULL_NAME]) : "", 
      initialAddress: context.query[PARAM_NAME_USER_FULL_ADDRESS] ? decodeURIComponent(context.query[PARAM_NAME_USER_FULL_ADDRESS]) : "",
    }
  }
}