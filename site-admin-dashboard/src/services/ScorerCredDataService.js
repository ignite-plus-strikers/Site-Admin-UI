import axios from "axios";

const SCORERCRED_API_URL = "http://localhost:8080/cricket-tournament";

class ScorerCredDataService {
  retrieveAllScorer() {
    return axios.get(`${SCORERCRED_API_URL}/scorerCreds`);
  }

  createScorer(scorer) {
    return axios.post(`${SCORERCRED_API_URL}/scorerCred`, scorer);
  }
}

export default new ScorerCredDataService();
