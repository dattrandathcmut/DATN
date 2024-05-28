const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import General from "./screens/General";
import Account from "./screens/Account";
import AddnewWaterPum from "./screens/AddnewWaterPum";
import WaterPump from "./screens/WaterPump";
import Camera from "./screens/Camera";
import Farm from "./screens/Farm";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import SignIn from "./screens/SignIn";
import SMF from "./screens/SMF";
import ForgotPassword1 from "./screens/ForgotPassword1";
import Notification from "./screens/Notification";
import spect from "./screens/spect";
import { LogBox } from 'react-native';
import history from "./screens/historyHud";



import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

LogBox.ignoreAllLogs(true);

const config = {
	baseURL: 'http://192.168.1.14:5001'
};

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SMF"
              component={SMF}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddnewWaterPum"
              component={AddnewWaterPum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WaterPump"
              component={WaterPump}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Farm"
              component={Farm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="General"
              component={General}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="spect"
              component={spect}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="history"
              component={history}
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
