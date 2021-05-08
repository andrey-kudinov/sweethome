import firebase from "firebase/app";
import "firebase/storage";

export default {
  actions: {
    async fetchUserInfo({ commit, dispatch }, userName) {
      try {
        const uid = await dispatch("getUid");
        const userInfo =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/${userName}`)
              .once("value")
          ).val() || {};
        return Object.keys(userInfo).map((key) => ({
          ...userInfo[key],
          id: key,
        }));
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async updateUserName({ commit, dispatch }, { user, name }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/${user}/name`)
          .update({ name });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async loadUserAvatar({ commit, dispatch }, { user, avatar }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .storage()
          .ref(`${uid}`)
          .child(`${user}`)
          .putString(avatar, "data_url", { contentType: "image/jpg" });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async fetchUserAvatar({ commit, dispatch }, user) {
      try {
        const uid = await dispatch("getUid");
        if (
          (
            await firebase
              .storage()
              .ref(`${uid}`)
              .listAll()
          ).items &&
          (
            await firebase
              .storage()
              .ref(`${uid}`)
              .listAll()
          ).items.length > 1
        ) {
          const res = await firebase
            .storage()
            .ref(`${uid}/${user}`)
            .getDownloadURL();
          return res;
        }
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  },
};
