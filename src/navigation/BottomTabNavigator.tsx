import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef } from "react";

import TabBarIcon from "./TabBarIcon";
import CapitalScreen from "@/screens/CapitalScreen";
import ExpensesScreen from "@/screens/ExpensesScreen";
import SavingScreen from "@/screens/SavingScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import { AddCapitalSourceButton } from "@/screens/AddCapitalSourceScreen";
import i18n from "@/localization/i18n";
import useColorScheme from "@/hooks/useColorScheme";
import { BottomTabsItem, RootTabParamList } from "@/types/navigation";
import Colors from "@/constants/Colors";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const tabs = useRef<BottomTabsItem[]>([
    {
      name: 'Capital',
      title: i18n.t('capital.title'),
      component: CapitalScreen,
      icon: 'appstore-o',
      headerRightComponent: AddCapitalSourceButton,
    },
    {
      name: 'Expenses',
      title: i18n.t('expenses.title'),
      component: ExpensesScreen,
      icon: 'barschart',
    },
    {
      name: 'Saving',
      title: i18n.t('saving.title'),
      component: SavingScreen,
      icon: 'staro',
    },
    {
      name: 'Profile',
      title: i18n.t('profile.title'),
      component: ProfileScreen,
      icon: 'user',
    },
  ]);

  return (
    <BottomTab.Navigator
      initialRouteName={tabs.current[0].name}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitle: 'G-Wallet',
        headerTitleAlign: 'left',
      }}
    >
      {tabs.current.map(({ name, title, component, icon, headerRightComponent }) =>
        <BottomTab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: title,
            tabBarIcon: ({ color }) => <TabBarIcon name={icon} color={color} />,
            tabBarShowLabel: false,
            headerRight: headerRightComponent,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
}
