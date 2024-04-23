import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSvHLNL5kqWJpnskwt4OvhU2_1GGSRFsk",
  authDomain: "backend-olx.firebaseapp.com",
  projectId: "backend-olx",
  storageBucket: "backend-olx.appspot.com",
  messagingSenderId: "724119242608",
  appId: "1:724119242608:web:592e8497b97c1f50fc71b5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export async function userCardItem(itemInfo) {
  try {
    const { image } = itemInfo;
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "userItem"), {
      image: imgUrl,
    });
    return imgUrl;
  } catch (e) {
    alert(e.message);
  }
}

export async function updateCard(cardImg) {
  try {
    const { image } = cardImg;

    const storageRef = ref(storage, `udateImages/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    return imgUrl;
  } catch (e) {
    alert(e.message);
  }
}
