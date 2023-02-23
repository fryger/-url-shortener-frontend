import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login/", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email: string, password: string) {
    return axios.post(API_URL + "register/", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
}

export default new AuthService();
