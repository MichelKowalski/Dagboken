import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { niceStyle } from "./StartScreen";
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
          backgroundColor: "pink",
        }}
      >
        <Text style={niceStyle.nicetext}>TITLE:</Text>
        <TextInput
          style={niceStyle.nicetext}
          onChangeText={setMyTitelInput}
          value={myTitelInput}
          maxLength={20}
        />
      </View>
      <TextInput
        style={{ justifyContent: "flex-start", padding: 6, fontSize: 14 }}
        onChangeText={setMyNotes}
        value={myNotes}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  normalStyle: {
    backgroundColor: "lightgrey",
    height: 500,
    alignItems: "flex-start",
    fontSize: 16,
  },
});
