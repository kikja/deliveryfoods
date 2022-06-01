import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBWBCZ6lLnrArRi_Cf7-AIGlqaFduEFgo0",
  authDomain: "deliveryfoods.firebaseapp.com",
  projectId: "deliveryfoods",
  storageBucket: "deliveryfoods.appspot.com",
  messagingSenderId: "324976284254",
  appId: "1:324976284254:web:1d3f79e6f46e7ce57e1acf",
  measurementId: "G-EJNRHEQD76"
};

 
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;