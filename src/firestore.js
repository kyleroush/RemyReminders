import firebase from 'firebase';
// import firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyC3hCPaNJZqDKr6nJsfILBn_9vghg7kVgA",
  authDomain: "remy-reminders.firebaseapp.com",
  databaseURL: "https://remy-reminders.firebaseio.com",
  projectId: "remy-reminders",
  storageBucket: "remy-reminders.appspot.com",
  messagingSenderId: "1021021844076",
  appId: "1:1021021844076:web:b5b86ba2d8c372367d5e49",
  measurementId: "G-2LZDWFKHVF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const authProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth();

export const signIn = (setValue) => {
  auth
    .signInWithPopup(authProvider)
    .then((result) => {
      // console.log(result.user);
      setValue({
        user: result.user,
        credential: result.credential
      });

      const ref = firestore.collection('user').doc(result.user.uid);
      ref.get().then((doc) => {
  
        if (!doc.exists) {
          ref.set({
            name: result.user.displayName
          })
        } else {
          console.log('Remy data:', doc.data());
        }
      });
      // ...
    }).catch((error) => {
      // Handle Errors here.
    });
}
export const signOut = (setValue) => {
  auth.signOut()
    .then(() => {

      setValue({
        user: null,
        credential: null
      })
      // ...
    }).catch((error) => {
    });
}

export const db = firebase.database();
export const firestore = firebase.firestore();
export const key = "Liars_Dice";
export default firestore;
