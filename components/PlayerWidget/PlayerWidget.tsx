import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const song = {
  id: "3",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "High On You",
  artistsHeadline: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artistsHeadline}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <FontAwesome name="play" size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
