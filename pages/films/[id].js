import { useRouter } from 'next/router'
import MainLoyout from '../../components/MainLoyout'
import { Plyr } from 'plyr-react'
import { useEffect, useState } from 'react'
import 'plyr-react/dist/plyr.css'

export default function Film() {
    const router = useRouter()
    const [data, setData] = useState(null)
    const [film, setFilm] = useState(null)

    useEffect(() => {
        setFilm(
            {
                name: 'Гравити Фолз',
                author: '2',
                img: `http://localhost:3000/5.jpg`
            }
        )
        const videoSrc = {
            type: "video",
            sources: [
                {
                    src: "OAUx74-Ni50",
                    provider: "youtube"
                }
            ]
        };
        setData({ videoSrc })
    }, [])

    return (
        <MainLoyout title={`Film | ` + router.query.id}>
            <div className='player-film'>
                <div className='player-film_property'>
                    {film &&
                        <div className='player-film_area'>
                            <div className='player-film_area_img'>
                                <img src={film.img} className='player-film_img' />
                            </div>
                            <div className='card-item_short_text'>
                                <p className='card-item_short_text_title'>{film.name}</p>
                                <p>Качество: TS</p>
                                <p>Год: 2021</p>
                                <p>Перевод: Диблированный</p>
                                <p>Страна: США</p>
                                <p className='card-item_short_text_janr'>Жанр: Боевик</p>
                                <p className='card-item_short_text_opisanie'>
                                    Картина повествует о доблестном воине-ветеране,
                                    активном участнике гражданской войны в США капитане
                                    Джефферсоне Кайле Кидде. Мужчина зарабатывает на жизнь
                                    немудреным способом: разъезжает по всей стране и зачитывает
                                    местным неграмотным жителям самые...
                                    Картина повествует о доблестном воине-ветеране,
                                    активном участнике гражданской войны в США капитане
                                    Джефферсоне Кайле Кидде. Мужчина зарабатывает на жизнь
                                    немудреным способом: разъезжает по всей стране и зачитывает
                                    местным неграмотным жителям самые...
                                    активном участнике гражданской войны в США капитане
                                    Джефферсоне Кайле Кидде. Мужчина зарабатывает на жизнь
                                    немудреным способом: разъезжает по всей стране и зачитывает
                                    местным неграмотным жителям самые...
                                </p>
                            </div>
                        </div>
                    }
                </div>
                {data && <Plyr onDoubleClick={() => { console.log('www') }} source={data.videoSrc} />}
            </div>
            <style jsx>{`
                .player-film_area{
                    display: flex;
                }
                .player-film_area_img{
                    padding-right: 15px;
                }
                .player-film_img{
                    width: 240px;
                    height: 400px;
                    background-color: #999;
                    margin-bottom: 50px;
                }
                .player-film{
                    padding: 60px 50px;
                    background-color: #444;
                    border-bottom: 1px solid #222;
                    box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                }
                p{
                    color: #ccc;
                }
                .card-item_short_text_opisanie{
                    font-size: 14px;
                }
            `}</style>
        </MainLoyout>
    )
}