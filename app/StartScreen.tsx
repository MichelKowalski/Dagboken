import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import AddNewNote from "./AddNewNote";
import { useState } from "react";

export default function StartScreen({ navigation }: any) {
  const [myNotes, setMyNotes] = useState("");

  function addCategory() {
    if (myNotes) {
      setMyNotes("");
    }
  }
  return (
    <SafeAreaView style={{}}>
      <View style={niceStyle.safeAreaViewStyle}>
        <Text style={niceStyle.nicetext}>CATEGORIES</Text>

        <View style={niceStyle.titleStyle}>
          <Text>
            <Button
              title="+"
              onPress={() => {
                navigation.navigate("AddNewNote", { fruit: "HEEEEEEEj" });
              }}
            />
          </Text>
        </View>
      </View>
      <View style={{ borderBottomWidth: 2, borderColor: "gold" }}></View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="HOME" onPress={() => {}} />
        </Text>
      </View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="WORK" onPress={() => {}} />
        </Text>
      </View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="FITNESS" onPress={() => {}} />
        </Text>
      </View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="HEALTH" onPress={() => {}} />
        </Text>
      </View>

      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="EDUCATION" onPress={() => {}} />
        </Text>
      </View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="SOCIAL" onPress={() => {}} />
        </Text>
      </View>

      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button title="TRAVEL" onPress={() => {}} />
        </Text>
      </View>
      <View style={niceStyle.stylingCategorysView}>
        <Text style={niceStyle.nicetext}>
          <Button
            title={myNotes}
            onPress={() => {
              addCategory();
            }}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
}

export const niceStyle = StyleSheet.create({
  nicetext: {
    fontSize: 18,
    padding: 6,
    margin: 2,
  },
  safeAreaViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    alignItems: "flex-end",
    padding: 6,
    margin: 2,
    flex: 1,
    justifyContent: "center",
  },
  stylingCategorysView: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    alignItems: "flex-start",
  },
});
