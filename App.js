import { StatusBar } from "expo-status-bar";
import ViewEffect from "./src/screens/ViewEffect";
import ViewImages from "./src/screens/ViewImages";
import ViewPicker from "./src/screens/ViewPicker";
import ViewState from "./src/screens/ViewState";
import ViewNav1 from "./src/screens/ViewNav1";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewTasks from "./src/screens/ViewTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }} >
          <Stack.Screen name="ViewNav1" component={ViewNav1} />
          <Stack.Screen name="ViewState" component={ViewState} />
          <Stack.Screen name="ViewEffect" component={ViewEffect} />
          <Stack.Screen name="ViewImages" component={ViewImages} />
          <Stack.Screen name="ViewPicker" component={ViewPicker} />
          <Stack.Screen name="ViewTasks" component={ViewTasks} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        style="auto" />
    </>
  );
}