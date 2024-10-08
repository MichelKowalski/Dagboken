import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";

export default function StartScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ backgroundColor: "lightgrey" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={niceStyle.nicetext}>CATEGORIES</Text>

        <View
          style={{
            alignItems: "flex-end",
            padding: 6,
            margin: 2,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text>
            <Button
              title="+"
              onPress={() => {
                navigation.navigate("AddNewNote", { fruit: "banan" });
              }}
            />
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "gold", height: 1.5, padding: 2 }}></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
        }}
      >
        <Text>
          <Button title="HOME" onPress={() => {}} />
        </Text>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={niceStyle.nicetext}>
            <Button title="WORK" onPress={() => {}} />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
        }}
      >
        <Text style={niceStyle.nicetext}>
          <Button title="FITNESS" onPress={() => {}} />
        </Text>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={niceStyle.nicetext}>
            <Button title="HEALTH" onPress={() => {}} />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
        }}
      >
        <Text style={niceStyle.nicetext}>
          <Button title="EDUCATION" onPress={() => {}} />
        </Text>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={niceStyle.nicetext}>
            <Button title="SOCIAL" onPress={() => {}} />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
        }}
      >
        <Text style={niceStyle.nicetext}>
          <Button title="TRAVEL" onPress={() => {}} />
        </Text>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={niceStyle.nicetext}>
            <Button title="SHOPPING" onPress={() => {}} />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
        }}
      >
        <Text style={niceStyle.nicetext}>
          <Button title="FINANCE" onPress={() => {}} />
        </Text>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={niceStyle.nicetext}>
            <Button title="LIFESTYLE" onPress={() => {}} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const niceStyle = StyleSheet.create({
  nicetext: {
    fontSize: 18,
    color: "black",
    padding: 6,
  },
});
