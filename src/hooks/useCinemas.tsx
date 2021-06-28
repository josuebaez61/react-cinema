import { useState } from "react"
import { useEffect } from "react"
import { DocumentData } from '@firebase/firestore-types';
import { Cinema } from "../models/Cinema"
import { CinemasService } from "../services/CinemasService"

export const useCinemas = () => {
    const [cinemas, setCinemas] = useState<Cinema[] | DocumentData[]>([]);

    useEffect(() => {
        CinemasService.getCinemas().then( cinemas => setCinemas(cinemas));
    }, [])

    return cinemas;
}