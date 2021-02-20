import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { Sound } from "expo-av/build/Audio";

const song = {
  id: "3",
  uri:
    "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "High On You",
  artistsHeadline: "Helen",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlayBackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };
  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate
    );

    setSound(newSound);
  };
  useEffect(() => {
    //play the song
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getprogress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getprogress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}></View>

        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artistsHeadline}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={30}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
