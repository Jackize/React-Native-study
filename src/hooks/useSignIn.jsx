import {  useMutation } from "@apollo/client";
import React from "react";
import { SIGN_IN } from "../graphql/queries";

export default function useSignIn() {
  const [authenticate, { data, loading, error }] = useMutation(SIGN_IN);

  const signIn = ({ username, password }) => {
    authenticate({ variables: { credentials: { username, password } } });
  };
  return { data, loading, error, signIn };
}
