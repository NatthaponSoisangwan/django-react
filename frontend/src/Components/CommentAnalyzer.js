import axios from "axios";

const THREASHOLD = 0.6;

export default function analyseComment(comment) {
  // CONSTRUCT: body for Perspective-API-Simple-Server
  let body = {
    comment: comment,
    commentMarkedAsToxic: true
  }

  return requestCommentScore(body).then(score => {
    return [score, isToxic(score)];
  });
}


// POST comment to be analyzed and wait for return score. Return: int score.
function requestCommentScore(body) {
  try {
    return axios.post('http://127.0.0.1:8080/plugin/check', body)
      .then(resp => {
        return resp.data.attributeScores.TOXICITY.summaryScore.value;
      })
  } catch (error) {
    console.log("Error", error);
    return 0; 
  }
}

function isToxic(score) {
  return (score >= THREASHOLD) ? true : false;
}