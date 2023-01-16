import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 5,
  },
});
export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={{ marginRight: 5 }}>
          <Link to="/">
            <Text
              fontWeight="bold"
              fontSize="subheading"
              style={{ color: "#fff" }}>
              Repositories
            </Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signIn">
            <Text
              fontWeight="bold"
              fontSize="subheading"
              style={{ color: "#fff" }}>
              Sign In
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
}
