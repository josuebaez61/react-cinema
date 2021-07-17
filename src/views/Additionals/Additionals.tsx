import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { RadioButton, RadioButtonChangeParams } from 'primereact/radiobutton';
import { ProgressSpinner } from 'primereact/progressspinner';
import AditionalItem from '../../components/AditionalItem/AdditionalItem';
import { useAdditionals } from '../../hooks/useAdditionals';
import { Additional } from '../../models/Additional';

const Additionals = () => {

    const [currentFilter, setCurrentFilter] = useState('all');
    const [copyAdditionals, setCopyAdditionals] = useState<Additional[]>([]);

    const { additionals, loading } = useAdditionals();

    const filters = [
        {
            value: 'drinks',
            name: 'Bebidas'
        },
        {
            value: 'snacks',
            name: 'Snacks'
        },
        {
            value: 'combo',
            name: 'Combos'
        },
        {
            value: 'all',
            name: 'Todo'
        }
    ];

    useEffect(() => {
        setCopyAdditionals(additionals);
    }, [additionals])

    useEffect(() => {
        switch (currentFilter) {
            case 'snacks':
                setCopyAdditionals(additionals.filter(item => item.tags.includes('snacks')));
                break;
            case 'drinks':
                setCopyAdditionals(additionals.filter(item => item.tags.includes('drinks')));
                break;
            case 'combo':
                setCopyAdditionals(additionals.filter(item => item.tags.includes('combo')));
                break;
            default:
                setCopyAdditionals(additionals);
                break;
        }
    }, [currentFilter, additionals])

    return (
        <div className="container p-mt-2 p-mb-2">
            {
                loading
                    ?
                    <div className="w-100 p-d-flex p-jc-center p-mt-3 p-mb-3">
                        <ProgressSpinner />
                    </div>
                    :
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                            <Card className="p-card-black animate__animated animate__fadeIn" title="Filtros">
                                <div className="p-grid p-mt-2">
                                    {
                                        filters.map(filter =>
                                        (
                                            <div key={filter.value} className="p-col-4 p-md-12">
                                                <RadioButton
                                                    value={filter.value}
                                                    name="currentFilter"
                                                    onChange={(e: RadioButtonChangeParams) => setCurrentFilter(e.value)}
                                                    checked={currentFilter === filter.value}
                                                />
                                                <label htmlFor="city1"> {filter.name}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Card>
                        </div>
                        <div className="p-col-12 p-md-10  animate__animated animate__fadeIn">
                            <div>
                                <h2 style={{ color: 'white' }} className="p-mb-2">Adicionales</h2>
                                <div className="p-grid">
                                    {
                                        copyAdditionals.map((aditional: any) => <AditionalItem key={aditional.id} item={aditional} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}

export default Additionals
