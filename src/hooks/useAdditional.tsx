import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { Additional } from "../models/Additional";

export const useAdditional = () => {
    const [additional, setAdditional] = useState<Additional>();
    const [loading, setLoading] = useState<boolean>(false);
    let { id } = useParams<{ id: string }>();
    const db = getFirestore();

    useEffect(() => {
        setLoading(true)
        db.collection('additionals').doc(id).get().then((doc) => {
            const data = {...doc.data(), id: doc.id } as Additional;
            setAdditional(data);
        }).finally(() => setLoading(false));
    }, []);

    return {
        additional,
        loading
    }
}