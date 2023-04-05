import axios from 'axios';
const https = require('https')

export const PARAM_NAME_FORORAGAINST = 'leaning';
export const PARAM_NAME_POLICYNAME = 'policy';

export const EMAIL_BODY_INITIAL = `I. Introduction
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

const MEMBER_TITLE_PLACEHOLDER = "[MEMBER_TITLE]";
const MEMBER_FIRSTNAME_PLACEHOLDER = "[MEMBER_FIRST_NAME]";
const MEMBER_LASTNAME_PLACEHOLDER = "[MEMBER_LAST_NAME]";
const USER_FULLNAME_PLACEHOLDER = "[YOUR_FULL_NAME]";
const USER_ADDRESS_PLACEHOLDER = "[YOUR_ADDRESS]";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(401).json("Not a GET request");
  }

  if (
    !req.query.hasOwnProperty(PARAM_NAME_FORORAGAINST) ||
    !req.query.hasOwnProperty(PARAM_NAME_POLICYNAME)
  ) {
    res
      .status(401)
      .json("Some or all of the query parameters were not present");
  }

  if (req.query[PARAM_NAME_FORORAGAINST] in ["for", "against"]) {
    res
      .status(401)
      .json(`Query parameter ${PARAM_NAME_FORORAGAINST} value invalid`);
  }

  if (req.query[PARAM_NAME_POLICYNAME].length > 100) {
    res
      .status(401)
      .json(
        `Query parameter ${PARAM_NAME_POLICYNAME} value exceeds 100 characters`
      );
  }

  const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
  const OPEN_AI_API_URL = process.env.OPEN_AI_API_URL;

  const url = new URL(`${OPEN_AI_API_URL}completions`);
  const stringForOrAgainst = req.query[PARAM_NAME_FORORAGAINST];
  const policyName = req.query[PARAM_NAME_POLICYNAME];

  const prompt = `
  You are a passionate Australian writing an email to your member in parliament. 
  You want to tell them you are firmly ${stringForOrAgainst} ${policyName}. 
  Instead of the member's title, first name and last name use '${MEMBER_TITLE_PLACEHOLDER}', '${MEMBER_FIRSTNAME_PLACEHOLDER}' and '${MEMBER_LASTNAME_PLACEHOLDER}' respectively. 
  Sign off the email with '${USER_FULLNAME_PLACEHOLDER}' and '${USER_ADDRESS_PLACEHOLDER}'. 
  Format your reponse as JSON like the following {"subject": "Abc", "body": "Xyz"}.
  `;

  const requestBody = {
    model: "gpt-3.5-turbo",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 1024,
  };

  let data = {}
  axios.post(url, requestBody, { 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPEN_AI_API_KEY}`,
    }, 
    timeout: 30000, 
    httpsAgent: new https.Agent({keepAlive: true}),
  })
  .then((completion_res) => {
    data = completion_res.data;
  })
  .catch((err) => {
    console.error(err.message)
  })

  res.status(200).json({
    completion: data,
    member_title_placeholder: MEMBER_TITLE_PLACEHOLDER,
    member_fname_placeholder: MEMBER_FIRSTNAME_PLACEHOLDER,
    member_lname_placeholder: MEMBER_LASTNAME_PLACEHOLDER,
    user_full_name_placeholder: USER_FULLNAME_PLACEHOLDER,
    user_address_placeholder: USER_ADDRESS_PLACEHOLDER,
  });
}