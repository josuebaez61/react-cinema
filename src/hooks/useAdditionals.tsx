import { useEffect, useRef, useState } from "react"
import { getFirestore } from "../firebase";
import { Additional } from "../models/Additional";

export const useAdditionals = () => {
    const [additionals, setAdditionals] = useState<Additional[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const db = getFirestore();
    const isMounted = useRef(true);

    useEffect(() => {
        setLoading(true)
        db.collection('additionals').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(d => ({...d.data(), id: d.id}) as Additional);
            isMounted.current && setAdditionals(data);
        }).finally(() => setLoading(false));
        return () => {
            isMounted.current = false;
        }
    }, [db]);

    return {
        additionals,
        loading
    }
}