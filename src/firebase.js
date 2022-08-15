// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBPbsTbRKNdZNNsQhP8sw_sps4QdjMT3II',
  authDomain: 'skillbro-8ae1b.firebaseapp.com',
  projectId: 'skillbro-8ae1b',
  storageBucket: 'skillbro-8ae1b.appspot.com',
  messagingSenderId: '999348872119',
  appId: '1:999348872119:web:9fb2a43e1fa9aa123bfe32',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
