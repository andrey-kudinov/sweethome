import firebase from 'firebase/app'

export default {
  actions: {
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        localStorage.setItem("user", email);
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  }
}