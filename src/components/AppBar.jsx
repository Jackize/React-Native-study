import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import React from "react";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import AuthStorageContext from "../context/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 5,
  },
});
export default function AppBar() {
  const user = useQuery(AUTHENTICATE);
  const authenticate = React.useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
    await authenticate.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };
  if (user.loading) {
    return <Text>Loading...</Text>
  }
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
        {!user.data.me ? (
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
        ) : (
          <Pressable onPress={handleLogOut}>
            <Text
              fontWeight="bold"
              fontSize="subheading"
              style={{ color: "#fff" }}>
              Sign Out
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}
