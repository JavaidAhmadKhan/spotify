import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { Album } from "../../types";

export type AlbumHeaderprops = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderprops) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: album.imageUri }} style={styles.image} />

      <Text style={styles.name}>{album.name}</Text>

      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
