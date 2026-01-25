import {db} from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getMaps() {
    const querySnapshot = await getDocs(collection(db, "Tasty Bugs"));
    const mapsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return mapsList;
}