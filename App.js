import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloCient";

const apolloClient = createApolloClient();
export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
