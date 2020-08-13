import axios from "axios";

const ADMINCRED_API_URL = "http://localhost:8080/cricket-tournament";

class AdminCredDataService {
  retrieveAllAdmin() {
    return axios.get(`${ADMINCRED_API_URL}/adminCreds`);
  }

  createAdmin(admin) {
    return axios.post(`${ADMINCRED_API_URL}/adminCred`, admin);
  }
}

export default new AdminCredDataService();
