import Vue from 'vue';
import { TokenPayload } from '@/types/tokenPayload';
import IUser from '@/types/IUser';
import Http from '@/plugins/http';
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

export default class Auth {
  private http = new Http();

  public getUserDataFromToken(): TokenPayload {
    const tokenData = localStorage.getItem('token');
    const userData = this.parseJwt(tokenData);

    return userData;
  }

  public getUserFromToken(): IUser | null {
    const userData = this.getUserDataFromToken();
    if (userData) {
      return { email: userData.email } as IUser;
    }

    return null;
  }

  public getUserToken(): string | null {
    const token = localStorage.getItem('token');

    return token;
  }

  public login(token: string, refreshToken: string): void {
    const expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 48);
    Vue.$cookies.set('token', token, '48h');
    Vue.$cookies.set('refreshToken', refreshToken);
    // TokenStorage.storeToken(token);
    // TokenStorage.storeRefreshToken(refreshToken);
  }

  // public requireAuth = async (to: any, from: any, next: any) => {
  //   const token = $cookies.get("token")

  //   if (!token || token == null) {
  //     next({ path: "/login" });
  //   } else {
  //     next();
  //   }
  // }

  public parseJwt = (token: string | null) => {
    if (token == null) return null;

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const json = decodeURIComponent(escape(window.atob(base64)));

    return JSON.parse(json);
  };
}
