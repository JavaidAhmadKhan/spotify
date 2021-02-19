import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import SongListItem from "../components/SongListItem/SongListItem";
import albumDetails from "../data/AlbumDetails";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({});
