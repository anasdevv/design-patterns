import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  async request<T>(
    endpoint: string,
    method: string = 'GET',
    data?: any
  ): Promise<T> {
    const response = await this.axiosInstance.request<T>({
      url: endpoint,
      method,
      data,
    });
    return response.data;
  }
}

class HttpClientBuilder {
  private config: AxiosRequestConfig = {};

  setBaseURL(baseURL: string): this {
    this.config.baseURL = baseURL;
    return this;
  }

  setTimeout(timeout: number): this {
    this.config.timeout = timeout;
    return this;
  }

  addHeader(key: string, value: string): this {
    if (!this.config.headers) {
      this.config.headers = {};
    }
    this.config.headers[key] = value;
    return this;
  }

  build(): HttpClient {
    if (!this.config.baseURL) {
      throw new Error('Base URL is required');
    }
    return new HttpClient(this.config);
  }
}

export { HttpClient, HttpClientBuilder };

// basic usage
(async () => {
  const apiClient = new HttpClientBuilder()
    .setBaseURL('https://jsonplaceholder.typicode.com')
    .setTimeout(5000)
    .addHeader('Authorization', 'Bearer token123')
    .build();

  try {
    const users = await apiClient.request('/users');
    console.log('Users:', users);

    const newPost = await apiClient.request('/posts', 'POST', {
      title: 'Hello World',
      body: 'This is a test post.',
      userId: 1,
    });
    console.log('Created Post:', newPost);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
