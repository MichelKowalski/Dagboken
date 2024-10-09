import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import StartScreen, { niceStyle } from "./StartScreen";
import { useState } from "react";

export default function AddNewNote({ route, navigation }: any) {
  const { fruit } = route.params;
  const [myTitelInput, setMyTitelInput] = useState("");
  const [myNotes, setMyNotes] = useState("");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "lightgrey",
        }}
      >
        <Text style={styles.textInputTitleStyle}>TITLE:</Text>
        <TextInput
          style={styles.textInputTitleStyle}
          onChangeText={setMyTitelInput}
          value={myTitelInput}
          maxLength={20}
        />
      </View>
      <TextInput
        style={{ justifyContent: "flex-start", padding: 6, fontSize: 16 }}
        onChangeText={setMyNotes}
        value={myNotes}
      />
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: 500,
          padding: 20,
        }}
      >
        <Button
          title="DONE"
          onPress={() => {
            navigation.navigate("StartScreen", { myNotes });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  normalStyle: {
    backgroundColor: "pink",
    fontSize: 20,
    margin: 20,
  },
  textInputTitleStyle: {
    fontSize: 24,
    fontStyle: "italic",
    margin: 2,
    padding: 2,
  },
});
