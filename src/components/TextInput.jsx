import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  border: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    border: "1px solid #a1a1a1",
  },
  error: {
    border: "1px solid #d73a4a",
  },
});
export default function TextInput({ style, error, ...props }) {
  const textInputStyle = [styles.border, error && styles.error, style];
  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
      placeholderTextColor="gray"
    />
  );
}
