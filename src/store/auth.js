import firebase from 'firebase/app'

export default {
  actions: {
    async logIn({ commit }, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        localStorage.setItem("user", email);
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  }
}