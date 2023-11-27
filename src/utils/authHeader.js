import { readToken } from './localStorage';
export default function AuthHeader() {
    const userToken = readToken();

    if (userToken) {
      return {
        Authorization: "Bearer " + userToken.accessToken,
        "Content-type": "application/json"
      };
    } else {
      return { "Content-type": "application/json" };
    }
}