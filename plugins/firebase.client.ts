import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "stub-api-key",
    authDomain: "stub-auth-domain",
    projectId: "stub-project-id",
    storageBucket: "stub-storage-bucket",
    messagingSenderId: "stub-sender-id",
    appId: "stub-app-id"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      db
    }
  }
})
