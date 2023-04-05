import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberDetails from "@/components/MemberDetails";
import MemberFinderForm from "@/components/MemberFinderForm"
import { Alert, Card, Spinner } from "flowbite-react";
import { isAustralianPostcode, PARAM_NAME_POSTCODE } from "./find";
import { useMember } from "@/resources/useMember";

export default function Member({ postcode }) {
  const { data: member, error: memberError, isLoading: memberIsLoading } = useMember(postcode);

  let content = null;
  const postcodeIsValid = isAustralianPostcode(postcode)
  
  if (!postcodeIsValid) {
    content = (
      <>
        <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-4">
          Find your member
        </h5>
        <MemberFinderForm />
        <Alert
          color="red"
        >
          <span className="font-bold">
            Whoops!
          </span>
          {` "${postcode ? postcode : ''}" is not a valid postcode`}
        </Alert>
      </>
    );
  }

  if (memberIsLoading) {
    content = (
      <div className="flex flex-col text-center gap-4">
        <h5 className="tracking-tight text-gray-900 dark:text-white mb-2">
          About your member at
          {` postcode "${postcode}"`}
        </h5>
        <Spinner size="xl" />
      </div>
    )
  } else {
    if (member && member.mp_data && member.postcode && member.mp_data.data) {
      content = (
        <>
          <h5 className="text-center tracking-tight text-gray-900 dark:text-white mb-2">
            Your member for
            {` postcode "${postcode}" `}
            is:
          </h5>
          <MemberDetails data={member.mp_data.data} postcode={member.postcode} />
        </>
      )
    } else {
      content = (
        <>
          <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-4">
            Find your member
          </h5>
          <MemberFinderForm />
          <Alert
            color="yellow"
          >
            <span className="font-bold">
              Oh no!
            </span>
            {` We couldn't find a member for the postcode "${postcode ? postcode : ''}"`}
          </Alert>
        </>
      );
    }
  }

  return (
    <>
      <HeadTag title="My member" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="bg-blue-100 flex flex-wrap flex-1 justify-center items-center px-4 py-4 lg:px-32">
          <Card className="max-w-3xl md:px-16">
            {content}
          </Card>
        </main>
        <Footer className="" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      postcode: (context.query[PARAM_NAME_POSTCODE]),
    }
  }
}