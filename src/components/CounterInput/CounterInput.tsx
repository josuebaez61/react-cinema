import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'

interface CounterInputProps {
    minValue?: number;
    maxValue?: number;
    onChange?: (e:any) => void;
    name?: string;
}

const CounterInput = ({ minValue = 0, maxValue, onChange, name= "" }: CounterInputProps) => {
    const [value, setValue] = useState(minValue);
    const increment = () => {
        maxValue
        ?
        value < maxValue && setValue(v => v + 1)
        :
        setValue(v => v + 1)
    }

    const decrement = () => {
        console.log(minValue, value);
        minValue < value && setValue(v => v - 1);
    }

    useEffect(() => {
        onChange && onChange(value);
    }, [value])

    return (
        <div className="p-inputgroup">
            <Button
                onClick={decrement}
                type="button"
                className="p-d-flex p-jc-center"
            >
                <FontAwesomeIcon className="p-text-center" icon={faMinus} />
            </Button>
            <InputText
                className="p-text-center"
                type="number"
                value={value}
                min={1}
                readOnly
            />
            <Button
                type="button"
                onClick={increment}
                className="p-d-flex p-jc-center"
            >
                <FontAwesomeIcon className="p-text-center" icon={faPlus} />
            </Button>
        </div>
    )
}

export default CounterInput
