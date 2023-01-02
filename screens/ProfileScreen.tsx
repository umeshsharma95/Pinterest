import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import MasonryList from "../components/MasonryList";
import pins from "../assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/8.jpeg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Umesh Sharma</Text>
        <Text style={styles.subTitle}>123 Followers | 534 Followings</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subTitle: {
    color: "#181818",
    fontWeight: "400",
    margin: 10,
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
