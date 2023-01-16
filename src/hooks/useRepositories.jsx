import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { GET_REPOSITORIES } from "../graphql/queries";

export default function useRepositories() {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return { data, loading, error };
}
