import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface APIResponse {
  code : number | undefined;
  status : string | undefined;
  data : object | object[]
}

/**
 * Access data Server Api MuaraMbaduk 
 */
export class MUARAMBADUK_API {
    private static baseUrl = process.env.NEXT_PUBLIC_API_URL + 'v1/';
    private static apiKey = '';
    /**
     * Action GET
     * @param endpoint
     * @returns 
     */
    static async get(endpoint: string): Promise<AxiosResponse> {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}${endpoint}`);
      return response;
    }

    static async post(endpoint: string, data : object) {
    }

    static async put(endpoint: string, data : object) {
    }

    static async patch(endpoint: string, data : object) {
    }

    static async delete(endpoint: string) {
    }

}