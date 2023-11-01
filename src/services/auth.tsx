import { axiosApi } from "../http-common";

export class AuthService {
  static login = function (phoneNumber: any, password: any, onsuccess: any, onfailure: any) {
    axiosApi
      .post("/auth/signin", { phoneNumber, password })
      .then(function (token: { data: any }) {
        if (token.data) {
          onsuccess && onsuccess(token);
        } else {
          onfailure && onfailure();
        }
      })
      .catch((reason: any) => {
        onfailure && onfailure(reason);
      });
  };

  static register = (params: any) => {
    axiosApi.post("/auth/register", params);
  };

  static forget = function (phoneNumber: any, newPassword: any, onsuccess: any, onfailure: any) {
    axiosApi
      .post("/auth/forgetpassword", { phoneNumber, newPassword })
      .then(function (token: { data: any }) {
        if (token.data) {
          onsuccess && onsuccess(token);
        } else {
          onfailure && onfailure();
        }
      })
      .catch((reason: any) => {
        onfailure && onfailure(reason);
      });
  };
}
