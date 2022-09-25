import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  Capital: undefined;
  Expenses: undefined;
  Saving: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AddCapitalSourceModal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type BottomTabsItem = {
  name: keyof RootTabParamList;
  title: string;
  icon: React.ComponentProps<typeof AntDesign>['name'];
  component: React.FC;
  headerRightComponent?: React.FC,
}
