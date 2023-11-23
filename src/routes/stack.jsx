import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import { Inbox } from "../pages/inbox";


const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator>
      <Screen name="Início" component={Home} options={{ headerShown: false }} />
      <Screen name="Caixa de entrada" component={Inbox} />
    </Navigator>
  );
};

export default Stack;
