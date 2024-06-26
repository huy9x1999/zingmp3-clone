import appReducer from "./appreducer";
import playListReducer from "./playListReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import musicReducer from "./musicReducer";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const musicConfig = {
  ...commonConfig,
  key: "music",
  whilelist: ["curSongId", "curSongData", "curAlbumId"]
};

const rootReducer = combineReducers({
  app: appReducer,
  playList: playListReducer,
  music: persistReducer(musicConfig, musicReducer)
});

export default rootReducer;
