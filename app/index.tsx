import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./StartScreen";
import AddNewNote from "./AddNewNote";
import PressedCatagory from "./PressedCatagory";

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{
          title: "HAVE A NOTE",
          headerStyle: { backgroundColor: "lightblue" },
          //headerRight: () => <Button title="Info" />,
        }}
      />

      <Stack.Screen name="PressedCatagory" component={PressedCatagory} />
      <Stack.Screen name="AddNewNote" component={AddNewNote} />
    </Stack.Navigator>
  );
}
