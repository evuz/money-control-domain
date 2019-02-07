export abstract class DatabaseRepository {
  abstract start: (config) => Promise<any>;
}
