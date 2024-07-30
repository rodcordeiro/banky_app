import React from 'react';
import { useQuery } from '@realm/react';
import { ScrollView, Text, View } from 'react-native';
import { User } from '../database/schemas/user.schema';
import { set } from 'zod';
import { api } from '../lib/api';
import { Accountcard } from '../components/tools/AccountCard';
import { toast } from '@backpackapp-io/react-native-toast';

export default function Home() {
  const [user, setUser] = React.useState<User>();
  const [accounts, setAccounts] = React.useState<Banky.Account[]>();
  const users = useQuery(User);

  React.useEffect(() => {
    if (!users) return;

    setUser(users[0]);
    api
      .get<Banky.Account[]>('/api/v1/accounts')
      .then(response => {
        console.log(response.data);
        return response;
      })
      .then(({ data }) => setAccounts(data))
      .catch(e => {
        toast.error((e as Error).message);
      });

    return () => {
      setUser(undefined);
    };
  }, []);

  return (
    <View className="flex-1 flex px-10 ">
      <View className="mt-14">
        <Text className="text-white text-xl">Bom dia,</Text>
        <Text className="text-white text-2xl">{user?.name}</Text>
      </View>
      {accounts && (
        <>
          <View>
            <Accountcard
              account={{
                name: 'Total',
                ammount: accounts.reduce(
                  (curr: number, nxt: Banky.Account) => curr + nxt.ammount,
                  0,
                ),
              }}
            />
          </View>
          <ScrollView horizontal>
            {accounts.map(account => (
              <Accountcard account={account} />
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}
