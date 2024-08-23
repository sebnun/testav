const { default: TrackPlayer, Event } = require("react-native-track-player");

// service.js
module.exports = async function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section

    TrackPlayer.addEventListener(Event.PlaybackState, () => undefined);
}