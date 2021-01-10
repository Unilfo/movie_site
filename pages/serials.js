import {useContext, useEffect, useState} from 'react'
import MainLoyout from "../components/MainLoyout"
import Pagination from "../components/Pagination"
import Card from '../components/Card'
import {AppContext} from '../context/state'

export default function Serials() {
    const [data, setData] = useState(null)
    const { state, setState } = useContext(AppContext)

    useEffect(() => {
        setData(state.films)
    }, [state])

    if (!data) {
        return (
            <MainLoyout><p>Loading ... </p></MainLoyout>
        )
    }

    return (
        <MainLoyout>
            <div className='films_list'>
                {data.map((film) =>
                    <Card film={film} key={film.name} />
                )}
            </div>
            <Pagination />
        </MainLoyout>
    )
}

// export async function getServerSideProps() {
//
// }
