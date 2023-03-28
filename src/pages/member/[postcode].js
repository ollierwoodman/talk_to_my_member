import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Alert, Card } from "flowbite-react";
import MemberDetails from "@/components/MemberDetails";
import MemberFinder from "@/components/MemberFinder"
import { PARAM_NAME_POSTCODE } from "./find";

export const postcodePattern = /^\d{4}$/;

export function isAustralianPostcode(str) {
  // 4 digits, e.g. 0200, 4567
  return postcodePattern.test(str);
}

export default function Member({ postcode, mp_data, postcodeIsValid }) {
  let content = <></>
  
  if (!postcodeIsValid) {
    content = (
      <>
        <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-4">
          Find your member
        </h5>
        <MemberFinder />
        <Alert
          color="red"
          onDismiss={function onDismiss(){return alert("Alert dismissed!")}}
        >
          <span>
            <span className="font-medium">
              Error!
            </span>
            {` "${postcode ? postcode : ''}" is not a valid postcode`}
          </span>
        </Alert>
      </>
    );
  } else {
    content = (
      <>
        <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-4">
          About your member
        </h5>
        <MemberDetails data={mp_data} />
      </>
    )
  }

  return (
    <>
      <HeadTag title="My member" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="bg-blue-100 flex flex-wrap flex-1 justify-center items-center px-4 py-4 lg:px-32">
          <Card className="">
            {content}
          </Card>
        </main>
        <Footer className="" />
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const postcodesToPrerender = ["2000", "3000", "4000", "5000", "6000", "7000"];

//   return {
//     paths: postcodesToPrerender.map((_postcode) => {
//       return { params: { postcode: _postcode } };
//     }),
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  const postcode = context.params[PARAM_NAME_POSTCODE];
  let mp_data = {};
  let postcodeIsValid = true;

  if (!isAustralianPostcode(context.params[PARAM_NAME_POSTCODE])) {
    postcodeIsValid = false;
    return { props: { postcode, mp_data, postcodeIsValid } };
  }

  const SAVEOURMEDICARE_API_URL = process.env.SAVEOURMEDICARE_API_URL;

  const url = new URL(`${SAVEOURMEDICARE_API_URL}postcode/${postcode}`);

  // Fetch data from external API
  const res = await fetch(url);
  mp_data = await res.json();

  console.log(mp_data)

  // Pass data to the page via props
  return { props: { postcode, mp_data, postcodeIsValid } };
}
