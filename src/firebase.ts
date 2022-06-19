import { initializeApp } from "firebase/app";
import "firebase/app";
import { getFirestore } from "firebase/firestore"; // DBを使うのに必要なモジュール
import "firebase/auth"; // 認証機能を使うのに必要なモジュール
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// FirestoreにアクセスするにはinitializeAppを呼び出した後、
// コードでgetFirestoreを呼び出すだけ
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// デフォルトの設定以外で使いたいときはinitializeFirestoreメソッドを使う
// export default db;


