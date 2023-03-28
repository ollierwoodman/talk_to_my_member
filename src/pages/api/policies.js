import { getDataFromTheyVoteForYou } from "../../resources/theyvoteforyou";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(401).json("Not a GET request");
  }

  const response = getDataFromTheyVoteForYou("", policies.json);

  res.status(200).json(response.json());
}
