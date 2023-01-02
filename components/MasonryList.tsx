import {
  View,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Pin from "./Pin";

interface IMasonryList {
  pins: {
    id: string;
    title: string;
    image: string;
  }[];
}

const MasonryList = ({ pins }: IMasonryList) => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 200);
  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
