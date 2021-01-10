import { useEffect, useState } from "react"
import Router from 'next/router'
import { FaPlay } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'


export default function Card({ film }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(film)
    }, [])

    return (
        <div className='card'>
            <div className='card_box'>
                {data &&
                    <div className='card-item'>
                        <div key={data.name} onClick={() => Router.push(`/films/${data.name}`)}>
                            <a className='card-item_a'>
                                <FaPlayCircle className='FaPlayCircle' />
                                <div className='mask'>
                                </div>
                                <img src={data.img} className='card-item-img' />
                            </a>
                        </div>
                        <div>
                            <div className='card-item_short_text'>
                                <p className='card-item_short_text_title'>{data.name}</p>
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
                            <div className='card-item_box' onClick={() => Router.push(`/films/${data.name}`)}>
                                <FaPlay />
                                <button className='card-item_button' type="submit">Смотреть онлайн</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <style jsx>{`
                .card-item_a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .card-item_short_text_title{
                    padding-bottom: 10px;
                    color: #fbb450;
                }
                .card-item_short_text_janr{
                    padding-bottom: 10px;
                }
                .card-item_short_text_opisanie{
                    padding-right: 10px;
                    max-width: 650px;
                    height: 70px;
                    max-height: 70px;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-item_box{
                    background-color: #88b669 !important;
                    padding-left:10px;
                    width: 200px;
                    height: 35px;
                    position: absolute;
                    bottom: 15px;
                }
                .card{
                    background-color: #444;
                    padding-left: 15px;
                    padding-right: 15px;
                    padding-top: 13px;
                    border: none;
                    border-radius: 0;
                }
                .card_box{
                    padding-left: 30px;  
                    padding-bottom: 15px; 
                    background-color: #333;
                    box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
                    padding-top: 5px;
                }
                .card-item{
                    display: flex;
                    margin-top: 15px;
                }
                .card-item-img{
                    width: 200px;
                    margin-right: 15px;
                }
                .card-item_button{
                    margin-left: 5px;
                    margin-right: 20px;
                    border: 0;
                    text-align: center;
                    height: 30px;
                    color: #fff;
                    background-color: #88b669 !important;
                    cursor: pointer;
                    outline: none;
                }
                .card-item_short_text{
                    display: flex;
                    flex-flow: column nowrap;
                }
                p{
                    color: #ccc;
                    margin: 1px;
                }
            `}</style>
        </div>
    )
}