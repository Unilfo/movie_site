import MainLoyout from "../../components/MainLoyout"
import { useEffect, useState, useContext } from "react"
import Card from "../../components/Card"
import Pagination from "../../components/Pagination"
import { AppContext } from '../../context/state'

export default function Films() {
    const { state, setState } = useContext(AppContext)
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(state.films)
    }, [state])


    if (!data) {
        return (
            <MainLoyout><p>Loading ... </p></MainLoyout>
        )
    }

    return (
        <MainLoyout title='Films'>
            <div className='films_list'>
                {data.map((film) =>
                    <Card film={film} key={film.name} />
                )}
            </div>
            <Pagination />
            <style jsx>{`
                .films_list{
                    display: flex;
                    flex-flow: column wrap;
                    background-color: #444;
                    border-bottom: 1px solid #222;
                    box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                }
            `}</style>
        </MainLoyout>
    )
}

export async function getServerSideProps() {
    const films = [
        {
            name: 'Гравити Фолз',
            author: '2',
            img: `http://localhost:3000/8.jpg`
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
        props: { films },
    }
}
