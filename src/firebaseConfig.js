import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCznNk43Z8dcybw6FkTBY6YKgAP-nc0mvU',
  authDomain: 'whatsapp-66c71.firebaseapp.com',
  databaseURL: 'https://whatsapp-66c71.firebaseio.com',
  projectId: 'whatsapp-66c71',
  storageBucket: 'whatsapp-66c71.appspot.com',
  messagingSenderId: '414958966977',
  appId: '1:414958966977:ios:ed5a8bf569282a37e79c40',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
