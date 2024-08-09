import React from 'react';
import { useQuery } from '@realm/react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { User } from '../database/schemas/user.schema';
import { api } from '../lib/api';
import { Accountcard } from '../components/tools/AccountCard';
import { toast } from '@backpackapp-io/react-native-toast';
import { currency } from '../utils/currency';

export default function Home() {
  const [user, setUser] = React.useState<User>();
  const [accounts, setAccounts] = React.useState<Banky.Account[]>();
  const [transactions, setTransactions] = React.useState<Banky.Transaction[]>();
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
    api
      .get<Banky.Paginated<Banky.Transaction>>('/api/v1/transactions')
      .then(response => {
        setTransactions(response.data.items);
      })
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
        <View className="my-2 flex ">
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
          <ScrollView
            horizontal
            contentContainerStyle={{
              height: 100,
              margin: 0,
              gap: 10,
            }}
          >
            {accounts.map(account => (
              <Accountcard account={account} />
            ))}
          </ScrollView>
          <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
            <Pressable className="bg-gray-800 py-1 px-2 h-20 w-fit rounded">
              <Text className="text-white font-bold text-2xl w-1/2">
                Novo gasto
              </Text>
            </Pressable>
            <Pressable className="bg-gray-800 py-1 px-2 h-20 w-fit rounded">
              <Text className="text-white font-bold text-2xl w-2/3">
                Novo ganho
              </Text>
            </Pressable>
            <Pressable className="bg-gray-800 py-2 px-4 h-20 w-fit rounded">
              <Text className="text-white font-bold text-2xl w-1/2">
                Transf. Contas
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      )}
      {transactions && (
        <View>
          {transactions.map(trx => (
            <View className="flex row-auto w-fit">
              <Text className="text-white text-sm flex-1">
                {trx.description}
              </Text>
              <Text className="text-white text-sm">
                {new Date(trx.date).getDay()}/{new Date(trx.date).getMonth()}
              </Text>
              <Text className="text-white text-sm">{trx.account.name}</Text>
              <Text className="text-white text-sm">
                {currency(trx.value || 0)}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
