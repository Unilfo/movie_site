import { useEffect, useState } from "react"
import MainLoyout from "../components/MainLoyout"
import Pagination from "../components/Pagination"
import Card from '../components/Card'

export default function Serials({ serials }) {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(serials)
    }, [])

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

export async function getServerSideProps() {
    const serials = [
        {
            name: 'Гравити Фолз',
            author: '2',
            img: `https://picsum.photos/200/300?random=10`
        },
        {
            name: 'Теория большого взрыва',
            author: '2',
            img: `https://picsum.photos/200/300?random=11`
        },
        {
            name: 'Клан Сопрано',
            author: '2',
            img: `https://picsum.photos/200/300?random=12`
        },
        {
            name: 'Игра престолов',
            author: '2',
            img: `https://picsum.photos/200/300?random=13`
        },
        {
            name: 'Игра престолов5',
            author: '2',
            img: `https://picsum.photos/200/300?random=1`
        },
        {
            name: 'Игра престолов6',
            author: '2',
            img: `https://picsum.photos/200/300?random=14`
        },
        {
            name: '7',
            author: '2',
            img: `https://picsum.photos/200/300?random=15`
        },
        {
            name: '61Игра престолов',
            author: '2',
            img: `https://picsum.photos/200/300`
        },
        {
            name: '8Игра престолов',
            author: '2',
            img: `https://picsum.photos/200/300`
        },
        {
            name: '9',
            author: '2',
            img: `https://picsum.photos/200/300`
        },
        {
            name: '10Игра престолов',
            author: '2',
            img: `https://picsum.photos/200/300`
        },
    ]

    return {
        props: { serials },
    }
}