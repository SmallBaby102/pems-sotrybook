import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { CONFIG } from "../config/config";
export const firebaseApp = initializeApp(CONFIG.FIREBASE);
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

/**
 * @dev Add id attr to doc obj
 * @return firestore document object
 */
export const addDocData = (doc: any) => {
  return {
    ...doc.data(),
    id: doc.id,
  };
};
