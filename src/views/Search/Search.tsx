import React, { useState } from 'react'
import { useSearch } from '../../hooks/useSearch';
import './Search.scss'
import MovieBillboard from '../../components/MovieBillboard/MovieBillboard'
import { Paginator, PaginatorPageState } from 'primereact/paginator';

const Search = () => {
    const { results, query, totalPages, setPage, totalResults } = useSearch();
    const [first, setFirst] = useState(0);

    return (
        <div className="container p-mb-3">
            <h2 className="search__title">
                {
                    results.length > 0 
                    ? `Resultados para '${ query }'...`
                    : `No hay resultados para '${ query }'`
                }
            </h2>
            <div className="p-grid animate__animated animate__fadeIn">
            {
                results.map( (movie)=> (
                    <div key={movie.id} className="p-col-4 p-md-2">
                        <MovieBillboard movie={movie} />
                    </div>
                ))
            }
            </div>
            {
                results.length > 0 &&
                <Paginator
                    first={ first } 
                    rows={ 20 } 
                    totalRecords={ totalResults } 
                    pageLinkSize={ totalPages } 
                    onPageChange={ (e:PaginatorPageState) => { setPage(e.page + 1); setFirst(e.first) } }
                />
            }
        </div>
    )
}

export default Search
