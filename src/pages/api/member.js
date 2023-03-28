import { getDataFromOpenAustralia } from "@/resources/openaustralia";
import { getMemberByPostcode } from "@/resources/saveourmedicare";

export function isAustralianPostcode(str) {
  // 4 digits, e.g. 0200, 4567
  const postcodePattern = /^\d{4}$/;
  return postcodePattern.test(str);
}

// This gets called on every request
export async function getServerSideProps(context) {
  let saveOurMedicareMemberData = {};
  if (!isAustralianPostcode(context.query[QUERY_PARAM_POSTCODE])) {
    return { props: { saveOurMedicareMemberData } }
  }

  const SAVEOURMEDICARE_API_URL = process.env.SAVEOURMEDICARE_API_URL;
  const postcode = context.query[QUERY_PARAM_POSTCODE];

  const urlString = `${SAVEOURMEDICARE_API_URL}postcode/${postcode}`;
  const url = new URL(urlString);

  // Fetch data from external API
  const res = await fetch(url)
  saveOurMedicareMemberData = await res.json()

  // Pass data to the page via props
  return { props: { saveOurMedicareMemberData } }
}

export default async function handler({saveOurMedicareMemberData}, req, res) {
  if (req.method !== 'GET') {
      res.status(400).json('Not a GET request');
  }

  if (!req.query[QUERY_PARAM_POSTCODE]) {
      res.status(400).json('Some or all of the query parameters were not present');
  }

  if (!isAustralianPostcode(req.query[QUERY_PARAM_POSTCODE])) {
      res.status(400).json(`Query parameter ${QUERY_PARAM_POLICYNAME} is not a valid postcode`);
  }

  // const openAustraliaMemberData = getDataFromOpenAustralia('getRepresentatives/', {"postcode": req.query[QUERY_PARAM_POSTCODE]})
  res.status(200).json(saveOurMedicareMemberData);
}
