import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from 'react-native';

import BottomTabNavigator from "./BottomTabNavigator";
import AddCapitalSourceScreen from "@/screens/AddCapitalSourceScreen";
import EditCapitalSourceScreen from "@/screens/EditCapitalSourceScreen";
import NotFoundScreen from "@/screens/NotFoundScreen";
import BackButton from "@/components/comon/BackButton";
import i18n from "@/localization/i18n";
import { RootStackParamList } from "@/types/navigation";
import Colors from "@/constants/Colors";
import linking from "./linking";
import styles from './styles';

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
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            headerStyle: styles.modalHeader,
            headerTitleStyle: styles.modalHeaderTitle,
            headerTintColor: Colors.shared.white,
            headerLeft: () => <BackButton title={i18n.t('cancel')} />,
          }}
        >
          <RootStack.Screen name="AddCapitalSourceModal" component={AddCapitalSourceScreen} />
          <RootStack.Screen name="EditCapitalSourceModal" component={EditCapitalSourceScreen} />
        </RootStack.Group>
        <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
