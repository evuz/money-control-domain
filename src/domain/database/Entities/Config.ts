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
  private get url() {
    return this._url;
  }
  private get username() {
    if (!this._username) {
      throw new Error(`Invalid database config: property username is empty`);
    }
    return this._username;
  }
  private get password() {
    if (!this._password) {
      throw new Error(`Invalid database config: property password is empty`);
    }
    return this._password;
  }
  private get database() {
    if (!this._database) {
      throw new Error(`Invalid database config: property database is empty`);
    }
    return this._database;
  }
  private get host() {
    if (!this._host) {
      throw new Error(`Invalid database config: property host is empty`);
    }
    return this._host;
  }
  private get port() {
    if (!this._port) {
      throw new Error(`Invalid database config: property port is empty`);
    }
    return this._port;
  }

  private _url: string;
  private _username: string;
  private _password: string;
  private _database: string;
  private _host: string;
  private _port: number;

  constructor({ config }: { config: ConfigCredential | ConfigURL }) {
    Object.keys(config).forEach(key => {
      this[`_${key}`] = config[key];
    });
  }

  get(): ConfigURL | ConfigCredential {
    if (this.url) {
      return { url: this.url };
    }
    return {
      username: this.username,
      password: this.password,
      database: this.database,
      host: this.host,
      port: this.port,
    };
  }
}
