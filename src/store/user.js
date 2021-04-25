import firebase from "firebase/app";

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
          .ref(`/users/${uid}/${user}`)
          .update({ name });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async updateUserAvatar({ commit, dispatch }, { user, avatar }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`${uid}/${user}`)
          .update(avatar);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  },
};
