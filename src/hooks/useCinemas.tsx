import { useRef, useState } from "react"
import { useEffect } from "react"
import { DocumentData } from '@firebase/firestore-types';
import { Cinema } from "../models/Cinema"
import { CinemasService } from "../services/CinemasService"

export const useCinemas = () => {
    const [cinemas, setCinemas] = useState<Cinema[] | DocumentData[]>([]);
    const isMounted = useRef(true);
    useEffect(() => {
        CinemasService.getCinemas().then( cinemas => {
            isMounted.current && setCinemas(cinemas)
        });
        return () => {
            isMounted.current = false;
        }
    }, [])

    return cinemas;
}