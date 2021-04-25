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
    async logout() {
      await firebase.auth().signOut()
    },
    async register({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/user_1`).set({
          avatar: '',
          name: '',
        })
        await firebase.database().ref(`/users/${uid}/user_2`).set({
          avatar: '',
          name: '',
        })
        localStorage.setItem("user", email);
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  }
}