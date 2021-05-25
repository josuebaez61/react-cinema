import { ChangeEvent, useState } from "react";


export const useForm = (initialState: any = {}) => {
    const [formValue, setFormValue] = useState(initialState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement > ) => {
        const { name, value } = target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return [
        formValue,
        handleChange
    ];
}