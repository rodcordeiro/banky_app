import Realm from 'realm';
export class User extends Realm.Object {
  username!: string;
  refresh_token!: string;
  expires!: string;

  static primaryKey = 'username';
  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: 'username',
    properties: {
      username: 'string',
      refresh_token: 'string',
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
  ) {
    console.log('in constructor');
    super(realm, { username, refresh_token, expires });
  }
}
