import { useEffect } from "react";
import { Button, View } from "react-native";
import TrackPlayer from "react-native-track-player";

export default function Player() {
  useEffect(() => {
    const track = {
      url: "https://sphinx.acast.com/p/acast/s/rmm/e/661ed8bb7d63000016671e26/media.mp3",
    };

    TrackPlayer.setupPlayer().then(() => TrackPlayer.add([track]));
  }, []);

  return (
    <View>
      <Button title="Play Audio" onPress={async () => await TrackPlayer.play()} />
      <Button title="Pause Audio" onPress={async () => await TrackPlayer.pause()} />
    </View>
  );
}
