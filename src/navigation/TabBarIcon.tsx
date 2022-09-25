import * as React from "react";
import { AntDesign } from "@expo/vector-icons";

interface TabBarIconProps {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}

export default function TabBarIcon(props: TabBarIconProps) {
  return <AntDesign size={27} {...props} />;
}
