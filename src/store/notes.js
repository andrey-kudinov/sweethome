import firebase from "firebase/app";

export default {
  actions: {
    async createNote(
      { commit, dispatch },
      { name, text, date, month, year, enable = true }
    ) {
      try {
        const uid = await dispatch("getUid");
        const note = await firebase
          .database()
          .ref(`/users/${uid}/notes/${year}/${month}`)
          .push({ name, text, date, enable });
        return { name, text, date, enable, id: note.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchNotes({ commit, dispatch }, { month, year }) {
      try {
        const uid = await dispatch("getUid");
        const notes =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/notes/${year}/${month}`)
              .once("value")
          ).val() || {};
        return Object.keys(notes).map((key) => ({ ...notes[key], id: key }));
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async updateNote({ commit, dispatch }, { text, id, month, year }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/notes/${year}/${month}`)
          .child(id)
          .update({ text });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async disableNote(
      { commit, dispatch },
      { enable = false, id, month, year }
    ) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/notes/${year}/${month}`)
          .child(id)
          .update({ enable });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  },
};
