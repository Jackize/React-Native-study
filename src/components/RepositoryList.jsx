import { FlatList, Image, StyleSheet, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  top: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  content: {
    display: "flex",
    padding: 5,
  },
  language: {
    backgroundColor: "blue",
    padding: 5,
    width: "fit-content",
    borderRadius: 5,
    color: "#fff",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  count: {
    display: "flex",
  },
});

const kFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

export default function RepositoryList() {
  const { data, loading } = useRepositories();

  if (loading) return <Text color="white">Loading...</Text>;
  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={(item) => (
        <View key={item.id} style={styles.container}>
          <View style={styles.top}>
            <Image
              style={styles.avatar}
              source={{
                uri: item.item.ownerAvatarUrl,
              }}
            />
            <View style={styles.content}>
              <Text fontSize="subheading" fontWeight="bold">
                {item.item.fullName}
              </Text>
              <Text color="textSecondary">{item.item.description}</Text>
              <Text style={styles.language}>{item.item.language}</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.count}>
              <Text fontWeight="bold">
                {kFormatter(item.item.stargazersCount)}
              </Text>
              <Text>Starts</Text>
            </View>
            <View style={styles.count}>
              <Text fontWeight="bold">{kFormatter(item.item.forksCount)}</Text>
              <Text>Forks</Text>
            </View>
            <View style={styles.count}>
              <Text fontWeight="bold">{kFormatter(item.item.reviewCount)}</Text>
              <Text>Reviews</Text>
            </View>
            <View style={styles.count}>
              <Text fontWeight="bold">
                {kFormatter(item.item.ratingAverage)}
              </Text>
              <Text>Ratings</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}
