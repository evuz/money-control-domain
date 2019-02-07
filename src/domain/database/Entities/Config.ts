export interface ConfigURL {
  url: string;
}

export interface ConfigCredential {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
}

export class Config {
  url?: string;
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;

  constructor({ config }: { config: ConfigCredential | ConfigURL }) {
    Object.keys(config).forEach(key => {
      this[key] = config[key];
    });
  }
}
