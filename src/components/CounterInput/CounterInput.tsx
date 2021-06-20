import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import './CounterInput.scss'

export interface CounterInputChangeEvent {
    target: HTMLInputElement | object;
    minValue: number ;
    maxValue: number | undefined;
}

interface CounterInputProps {
    minValue?: number;
    maxValue?: number;
    initialValue?: number;
    onChange?: (e: CounterInputChangeEvent) => void;
    name?: string;
    transparent?: boolean
}

const CounterInput = ({ minValue = 0, maxValue, onChange, name = "", transparent = false, initialValue }: CounterInputProps) => {
    const [value, setValue] = useState(initialValue ? initialValue : minValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const increment = () => {
        maxValue
            ?
            value < maxValue && setValue(v => v + 1)
            :
            setValue(v => v + 1)
    }

    const decrement = () => {
        minValue < value && setValue(v => v - 1);
    }

    useEffect(() => {
        onChange && onChange({
            target: inputRef.current ? inputRef.current : {},
            minValue,
            maxValue
        });
    }, [value])


    return (
        <div className="p-inputgroup counter-input">
            <Button
                onClick={decrement}
                type="button"
                className={`p-d-flex p-jc-center ${transparent ? 'p-button-outlined counter-input__button--transparent' : ''
                    }`}
            >
                <FontAwesomeIcon className="p-text-center" icon={faMinus} />
            </Button>
            <InputText
                ref={inputRef as any}
                className={`p-text-center ${transparent ? 'counter-input__inputtext--transparent' : ''}`}
                type="number"
                value={value}
                min={1}
                readOnly
                name={name}
            />
            <Button
                type="button"
                onClick={increment}
                className={`p-d-flex p-jc-center ${transparent ? 'p-button-outlined counter-input__button--transparent' : ''}`
                }
            >
                <FontAwesomeIcon className="p-text-center" icon={faPlus} />
            </Button>
        </div>
    )
}

export default CounterInput
