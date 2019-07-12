import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAHvGV5AUzQRpXHbQJl61J0tP6MDjiqHI4',
  authDomain: 'crwn-db-9654d.firebaseapp.com',
  databaseURL: 'https://crwn-db-9654d.firebaseio.com',
  projectId: 'crwn-db-9654d',
  storageBucket: '',
  messagingSenderId: '1050480674503',
  appId: '1:1050480674503:web:507ccdac310dd6c3'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
