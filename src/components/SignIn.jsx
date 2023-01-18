import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import React from "react";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";

const initialValues = {
  username: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  signIn: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#0366d6",
    color: "#fff",
    borderRadius: 5,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Length of username must be greater than or equal to 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password must be greater than or equal to 3 characters")
    .required("Password is required"),
});

export default function SignIn() {
  const { data, loading, error, signIn } = useSignIn();
  const navigate = useNavigate()
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    try {
      signIn(values);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect( () => {
    (async () => {
      if (data) {
        const { accessToken, user } = data.authenticate;
        await authStorage.setAccessToken(accessToken)
        apolloClient.resetStore()
        navigate('/')
      }
    })()
  }, [data]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Pressable onPress={handleSubmit}>
            <Text style={styles.signIn}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}
