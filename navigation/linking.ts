import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/navigation';

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
          Spending: {
            screens: {
              SpendingScreen: 'spending',
            },
          },
          Saving: {
            screens: {
              SavingScreen: 'saving',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
