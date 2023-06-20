import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
      res.status(400).json('Not a GET request');
      return
  }

  const they_vote_for_you_url = new URL(`${process.env.THEY_VOTE_FOR_YOU_API_URL}policies.json`);

  they_vote_for_you_url.searchParams.set('key', process.env.THEY_VOTE_FOR_YOU_API_KEY);
  
  axios.get(they_vote_for_you_url)
    .then((policies_reponse) => {
      res.status(200).json(policies_reponse.data);
      return
    })
    .catch((err) => {
      res.status(500).json({error: err});
      return
    });
}
