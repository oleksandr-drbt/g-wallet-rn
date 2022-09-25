import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from "@/types/navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Capital: {
            screens: {
              CapitalScreen: 'capital',
            },
          },
          Expenses: {
            screens: {
              ExpensesScreen: 'expenses',
            },
          },
          Saving: {
            screens: {
              SavingScreen: 'saving',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
