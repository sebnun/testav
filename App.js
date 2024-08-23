import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Recorder from "./components/Recorder";
import TrackPlayer from "react-native-track-player";
import { useEffect } from "react";
import Player from "./components/Player";

TrackPlayer.registerPlaybackService(() => require("./service"));

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>To Reproduce:</Text>
        <Text>1) Play and Pause the audio.</Text>
        <Text>2) Start and Stop recording. It records correctly.</Text>
        <Text>3) Play and Pause the audio.</Text>
        <Text>4) Start recording. It doesn't record, an error is shown on the console.</Text>
        <Text></Text>
        <Player />
        <Recorder />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
