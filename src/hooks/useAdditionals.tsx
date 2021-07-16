import { useEffect, useState } from "react"
import { getFirestore } from "../firebase";
import { Additional } from "../models/Additional";

export const useAdditionals = () => {
    const [additionals, setAdditionals] = useState<Additional[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const db = getFirestore();

    useEffect(() => {
        setLoading(true)
        db.collection('additionals').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(d => ({...d.data(), id: d.id}) as Additional);
            setAdditionals(data);
        }).finally(() => setLoading(false));
    }, [db]);

    return {
        additionals,
        loading
    }
}