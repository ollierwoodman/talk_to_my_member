import { isAustralianPostcode, PARAM_NAME_POSTCODE } from "../member/find";
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
      res.status(400).json('Not a GET request');
      return
  }

  if (!req.query[PARAM_NAME_POSTCODE]) {
      res.status(400).json('Some or all of the query parameters were not present');
      return
  }

  if (!isAustralianPostcode(req.query[PARAM_NAME_POSTCODE])) {
      res.status(400).json(`Query parameter ${QUERY_PARAM_POLICYNAME} is not a valid postcode`);
      return
  }

  const postcode = req.query[PARAM_NAME_POSTCODE];

  const SAVE_OUR_MEDICARE_API_URL = process.env.SAVE_OUR_MEDICARE_API_URL;
  const save_our_medicare_url = new URL(`${SAVE_OUR_MEDICARE_API_URL}postcode/${postcode}`);

  axios.get(save_our_medicare_url)
    .then((save_our_medicare_res) => {
      res.status(200)
        .json( save_our_medicare_res.data );
      return
    })
    .catch((err) => {
      res.status(500)
        .json({match: false, error: err});
      return
    })
}
