import admin from 'firebase-admin';

//import { credential } from 'firebase-admin';
//import { initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

import serviceAccount from "./firequeue.sa.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const main = async ()=>{
    const docRef = db.collection('users').doc('alovelace');
    await docRef.set({
        firstName: 'Ada',
        lastName: 'Lovelace',
        born: 1815
      });
    
}
main();