import PostItImage from "@/assets/images/post-it.png";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes app</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime, anywhere.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#333",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
