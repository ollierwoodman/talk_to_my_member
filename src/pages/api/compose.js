import {
  QUERY_PARAM_FORORAGAINST,
  QUERY_PARAM_POLICYNAME,
} from "@/components/PolicyPicker";

const MEMBER_TITLE_PLACEHOLDER = "[MEMBER_TITLE]";
const MEMBER_FIRSTNAME_PLACEHOLDER = "[MEMBER_FIRST_NAME]";
const MEMBER_LASTNAME_PLACEHOLDER = "[MEMBER_LAST_NAME]";
const USER_FULLNAME_PLACEHOLDER = "[YOUR_FULL_NAME]";
const USER_ADDRESS_PLACEHOLDER = "[YOUR_ADDRESS]";

export default async function handler(req, res, { OPENAI_API_KEY, OPENAI_API_URL }) {
  if (req.method !== "GET") {
    res.status(401).json("Not a GET request");
  }

  if (
    !req.query.hasOwnProperty(QUERY_PARAM_FORORAGAINST) ||
    !req.query.hasOwnProperty(QUERY_PARAM_POLICYNAME)
  ) {
    res
      .status(401)
      .json("Some or all of the query parameters were not present");
  }

  if (req.query[QUERY_PARAM_FORORAGAINST] in ["for", "against"]) {
    res
      .status(401)
      .json(`Query parameter ${QUERY_PARAM_FORORAGAINST} value invalid`);
  }

  if (req.query[QUERY_PARAM_POLICYNAME].length > 100) {
    res
      .status(401)
      .json(
        `Query parameter ${QUERY_PARAM_POLICYNAME} value exceeds 100 characters`
      );
  }

  const url = new URL(OPENAI_API_URL + endpoint);
  const stringForOrAgainst = res.query[QUERY_PARAM_FORORAGAINST];
  const policyName = res.query[QUERY_PARAM_POLICYNAME];

  const prompt = `
  You are a passionate Australian writing an email to your member in parliament. 
  You want to tell them you are firmly ${stringForOrAgainst} ${policyName}. 
  Instead of the member's title, first name and last name use '${MEMBER_TITLE_PLACEHOLDER}', '${MEMBER_FIRSTNAME_PLACEHOLDER}' and '${MEMBER_LASTNAME_PLACEHOLDER}' respectively. 
  Sign off the email with '${USER_FULLNAME_PLACEHOLDER}' and '${USER_ADDRESS_PLACEHOLDER}'. 
  Format your reponse as JSON like the following {"subject": "Abc", "body": "Xyz"}.
  `;

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY,
    },
    body: JSON.stringify(requestBody),
  };

  const openai_response = await fetch(url, requestOptions);
  data = await openai_response.json();

  res
    .status(200)
    .json(
      {
        message_content: data,
        member_title_placeholder: MEMBER_TITLE_PLACEHOLDER,
        member_fname_placeholder: MEMBER_FIRSTNAME_PLACEHOLDER,
        member_lname_placeholder: MEMBER_LASTNAME_PLACEHOLDER,
        user_full_name_placeholder: USER_FULLNAME_PLACEHOLDER,
        user_address_placeholder: USER_ADDRESS_PLACEHOLDER,
      }
  );
}

export async function getServerSideProps() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const OPENAI_API_URL = process.env.OPENAI_API_URL;

  return { props: { OPENAI_API_KEY, OPENAI_API_URL } }
}