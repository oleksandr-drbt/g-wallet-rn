import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from 'react-native';

import BottomTabNavigator from "./BottomTabNavigator";
import AddCapitalSourceScreen from "../screens/AddCapitalSourceScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import linking from './linking';
import { RootStackParamList } from "../types/navigation";

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface NavigationProps {
  colorScheme: ColorSchemeName,
}

export default function Navigation(props: Required<NavigationProps>) {
  const { colorScheme } = props;

  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="AddCapitalSourceModal" component={AddCapitalSourceScreen} />
        </RootStack.Group>
        <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
