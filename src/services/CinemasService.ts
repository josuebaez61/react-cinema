import { QuerySnapshot, DocumentData } from '@firebase/firestore-types';
import { getFirestore } from '../firebase';
import { Cinema } from '../models/Cinema';

const db = getFirestore();

export class CinemasService {
    static getCinemas(): Promise<Cinema[] | DocumentData[]> {
        return db.collection("cinemas").get().then((querySnapshot: QuerySnapshot) => {
            return querySnapshot.docs.map( doc => ({...doc.data(), id: doc.id}));
        });
    }
}