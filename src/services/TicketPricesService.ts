import { getFirestore } from "../firebase";

const db = getFirestore();

export class TicketPricesService {

    static collection = "ticket-prices";

    static getPriceById(id: 'general') {
        return db.collection(this.collection).doc(id).get().then((snapshot) => {
            return snapshot.data();
        });
    }
}