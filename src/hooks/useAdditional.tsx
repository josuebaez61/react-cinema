import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { Additional } from "../models/Additional";

export const useAdditional = () => {
    const [additional, setAdditional] = useState<Additional>();
    const [loading, setLoading] = useState<boolean>(false);
    let { id } = useParams<{ id: string }>();
    const db = getFirestore();
    const history = useHistory();
    useEffect(() => {
        setLoading(true)
        db.collection('additionals').doc(id).get().then((doc) => {
            if ( doc.exists ) {
                const data = {...doc.data(), id: doc.id } as Additional;
                setAdditional(data);
            } else {
                history.push('/not-found')
            }
        }).finally(() => setLoading(false));
    }, [db, id, history]);

    return {
        additional,
        loading
    }
}