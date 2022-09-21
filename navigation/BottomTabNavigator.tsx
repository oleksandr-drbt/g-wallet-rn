import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef } from "react";

import useColorScheme from "../hooks/useColorScheme";
import { BottomTabsItem, RootTabParamList } from "../types/navigation";
import Colors from "../constants/Colors";
import TabBarIcon from "./TabBarIcon";
import Capital from "../screens/Capital";
import Spending from "../screens/Spending";
import Saving from "../screens/Saving";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const tabs = useRef<BottomTabsItem[]>([
    {
      name: 'Capital',
      component: Capital,
      icon: 'attach-money',
    },
    {
      name: 'Spending',
      component: Spending,
      icon: 'receipt',
    },
    {
      name: 'Saving',
      component: Saving,
      icon: 'save',
    },
  ]);
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={tabs.current[0].name}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      {tabs.current.map(({ name, component, icon }) =>
        <BottomTab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: name,
            tabBarIcon: ({ color }) => <TabBarIcon name={icon} color={color} />,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
}
