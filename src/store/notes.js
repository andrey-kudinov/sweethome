import firebase from 'firebase/app'

export default {
  actions: {
    async createNote({ commit, dispatch }, { name, text, date }) {
      try {
        const uid = await dispatch("getUid");
        const note = await firebase
          .database()
          .ref(`/users/${uid}/notes`)
          .push({ name, text, date });
        return { name, text, date, id: note.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchNotes({ commit, dispatch }) {
      try {
        const uid = await dispatch("getUid");
        const notes =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/notes`)
              .once("value")
          ).val() || {};

        // const cats = [];
        // Object.keys(categories).forEach((key) => {
        //   cats.push({
        //     title: categories[key].title,
        //     limit: categories[key].limit,
        //     id: key,
        //   });
        // });
        // return cats

        return Object.keys(notes).map(key => ({...notes[key], id: key}))
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  }
}