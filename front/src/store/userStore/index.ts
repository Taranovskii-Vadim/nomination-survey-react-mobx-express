import { makeObservable, observable, runInAction } from "mobx";

import { api } from "../../routes/api";
import { UserApiResponse } from "./types";
import getUserToken from "../../routes/api/getUserToken";

class User {
  data: UserApiResponse = undefined;

  isLoading = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
    });
  }

  getToken = async (login: string): Promise<void> => {
    try {
      if (!login) throw new Error("Необходимо указать логин");
      this.isLoading = true;
      const apiResult: UserApiResponse = await api(getUserToken, undefined, {
        login,
      });

      runInAction(() => {
        this.data = apiResult;
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  };
}

export default new User();