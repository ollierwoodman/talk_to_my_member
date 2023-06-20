const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const https = require('https')

export const PARAM_NAME_FORORAGAINST = 'leaning';
export const PARAM_NAME_POLICYNAME = 'policy';

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

  const stringForOrAgainst = req.query[PARAM_NAME_FORORAGAINST];
  const policyName = req.query[PARAM_NAME_POLICYNAME];

  const prompt = `You are a passionate Australian firmly ${stringForOrAgainst} ${policyName}. 
  Write a few persuasive paragraphs expressing this sentiment. Do not use any facts, anecdotes or statistics.`;

  const completion = await openai.createCompletion(
    {
      "model": "gpt-3.5-turbo",
      "prompt": prompt,
      "max_tokens": 1000,
      "temperature": 0.4,
      "n": 1,
      "stream": false,
      "logprobs": null,
      "stop": null,
    }, 
    // {
    //   timeout: 30000, 
    // },
  ).then((completion_res) => {
    

    res.status(200).json({
      text: completion_res.data.choices[0].text
    });
    return
  })
  .catch((err) => {
    res.status(500).json({
      error: err,
    });
    return
  })
}