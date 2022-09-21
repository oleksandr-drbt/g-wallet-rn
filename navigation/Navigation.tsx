import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from 'react-native';

import linking from './linking';
import { RootStackParamList } from "../types/navigation";
import BottomTabNavigator from "./BottomTabNavigator";
import NotFound from "../screens/NotFound";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
