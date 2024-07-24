import Realm from 'realm';
export class User extends Realm.Object {
  username!: string;
  name?: string;
  refresh_token!: string;
  expires!: string;

  static primaryKey = 'username';
  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: 'username',
    properties: {
      username: 'string',
      refresh_token: 'string',
      name: 'string?',
      expires: {
        type: 'date',
        default: new Date(),
      },
    },
  };

  constructor(
    realm: Realm.Realm,
    username: string,
    refresh_token: string,
    expires: string,
    name?: string,
  ) {
    console.log('in constructor');
    super(realm, { username, refresh_token, expires, name });
  }

  isExpired() {
    const now = Date.now();
    const expires = new Date(this.expires);

    return now > Date.parse(expires.toISOString());
  }
}
