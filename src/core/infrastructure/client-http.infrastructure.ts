import { Api } from '../http';
import Env from '../environment/index';

export class ClientHttp extends Api {
  constructor() {
    super({
      baseURL: `${Env.API_WARS_URL}`,
    });
  }

  setup() {
    this.instance.defaults.baseURL = Env.API_WARS_URL;
  }

  async planetsById(id: number) {
    try {
      this.setup();
      const response = await this.get<any>(`/planets/${id}`, null, {});
      return {
        data: response.data,
      };
    } catch (error) {
      return { error };
    }
  }

  async speciesById(id: number) {
    try {
      this.setup();
      const response = await this.get<any>(`/species/${id}`, null, {});
      return {
        data: response.data,
      };
    } catch (error) {
      return { error };
    }
  }
}
