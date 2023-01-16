import { useField } from "formik";
import { StyleSheet } from "react-native";

import Text from "./Text";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  errorText: {
    color: "#d73a4a",
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default function FormikTextInput({ name, ...props }) {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
}
