import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

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
    .min(5, "Length of username must be greater than or equal to 5 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be greater than or equal to 5 characters")
    .required("Password is required"),
});
export default function SignIn() {
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
