import axios from 'axios';
import decode from 'jwt-decode';

const { REACT_APP_API_URL } = process.env;

export default class Auth {
  async login(email: string, password: string) {
    // Get a token from api server using the fetch api
    const response = await axios.post(`${REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    });

    // Setting the token in localstorage
    this.setToken(response.data.access_token);

    return Promise.resolve(response);
  }

  loggedIn(): boolean {
    // Check if there is a saved token and it's still valid
    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded: any = decode(token);

      // Checking if token is expired
      return decoded.exp < Date.now() / 1000;
    } catch(err) {
      console.error('Expired check failed!');
      return false;
    }
  }

  setToken(idToken: string) {
    localStorage.setItem('id_token', idToken);
  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  getConfirm() {
    const token = this.getToken();

    if (token) {
      try {
        return decode(token);
      } catch(err) {
        return false;
      }
    }

    return false;
  }
}
