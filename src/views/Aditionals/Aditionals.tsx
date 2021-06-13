import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { RadioButton, RadioButtonChangeParams } from 'primereact/radiobutton';
import AditionalsListContainer from '../../components/AditionalsListContainer/AditionalsListContainer';
import AditionalsList from '../../components/AditionalsList/AditionalsList';
import { ProgressSpinner } from 'primereact/progressspinner';

const Aditionals = () => {

    const [currentFilter, setCurrentFilter] = useState('all');
    const [aditionals, setAditionals] = useState<any>([]);

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
            value: 'combos',
            name: 'Combos'
        },
        {
            value: 'all',
            name: 'Todo'
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setAditionals([
                {
                    id: 1,
                    name: 'Pochoclos',
                    image: 'https://api.ggmgastro.com/img/600/900/resize/media/catalog/product/p/o/popcorn4_4bee.jpg'
                },
                {
                    id: 2,
                    name: 'Saladix',
                    image: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/161321-1000-1000/Galletitas-Saladix-Snacks-Pizza-100-Gr-1-5974.jpg?v=637287210904400000'
                },
                {
                    id: 3,
                    name: 'Pepsi',
                    image: 'https://static.carrefour.es/hd_510x_/img_pim_food/360453_00_1.jpg'
                },
                {
                    id: 4,
                    name: 'Pepsi',
                    image: 'https://static.carrefour.es/hd_510x_/img_pim_food/360453_00_1.jpg'
                },
                {
                    id: 5,
                    name: 'Pepsi',
                    image: 'https://static.carrefour.es/hd_510x_/img_pim_food/360453_00_1.jpg'
                },
            ])
        }, 2000)

    }, [])

    useEffect(() => {
        console.log(currentFilter);
    }, [currentFilter])

    return (
        <div className="container p-mt-2 p-mb-2">
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
                                            disabled={aditionals.length <= 0}
                                        />
                                        <label htmlFor="city1"> {filter.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                </div>
                <div className="p-col-12 p-md-10">
                    {
                        aditionals.length <= 0 &&
                        <div className="w-100 p-d-flex p-jc-center p-mt-3 p-mb-3">
                            <ProgressSpinner />
                        </div>
                    }
                    {
                        aditionals.length > 0 &&
                        <AditionalsListContainer>
                            <AditionalsList items={aditionals} />
                        </AditionalsListContainer>
                    }
                </div>
            </div>
        </div>
    )
}

export default Aditionals
