import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { auth } from '../../firebase';

const db = getFirestore();

export const savePhoneNumber = async (userId, phoneNumber) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      phoneNumber,
    }, { merge: true });
  } catch (error) {
    console.error('Error saving phone number:', error);
    throw error;
  }
};

export const getPhoneNumber = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data().phoneNumber;
    }
    return null;
  } catch (error) {
    console.error('Error getting phone number:', error);
    throw error;
  }
};