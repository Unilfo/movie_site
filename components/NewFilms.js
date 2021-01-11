import Router from 'next/router'

export default function NewFilms() {
    const films = [
        {
            name: '1',
            author: '2',
            img: `http://192.168.3.134:3000/1.jpg`
        },
        {
            name: '2',
            author: '2',
            img: `http://192.168.3.134:3000/2.jpg`
        },
        {
            name: '3',
            author: '2',
            img: `http://192.168.3.134:3000/3.jpg`
        },
        {
            name: '4',
            author: '2',
            img: `http://192.168.3.134:3000/4.jpg`
        },
        {
            name: '5',
            author: '2',
            img: `http://192.168.3.134:3000/5.jpg`
        },
        {
            name: '6',
            author: '2',
            img: `http://192.168.3.134:3000/6.jpg`
        },
        {
            name: '7',
            author: '2',
            img: `http://192.168.3.134:3000/7.jpg`
        },
    ]

    return (
        <div className='newfilms'>
            {films.map((film) => (
                <a key={film.name} onClick={() => Router.push(`/films/${film.name}`)} className='newfilms_img_link'>
                    <img src={film.img} className='newfilms-card_img' />
                </a>
            ))}
            <style jsx>{`
            .newfilms{
                display: flex;
                justify-content: space-between;
                padding-top: 10px;
                background-color: #333;
                border-bottom: 1px solid #222;
                padding-bottom: 10px;
                box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                padding-left: 10px;
                padding-right: 10px;
            }
            a { 
                display: block; 
                position: relative; 
            }
            a:after {
                content: '';
                position: absolute;
                top: 0; 
                left: 0; 
                right: 0;
                bottom: 0; 
                background: rgba(0,0,0,.5);
                opacity: 0; 
                transition: color .3s,background-color .4s,opacity .4s;
            }
            a:before { 
                content: ''; 
                position: absolute; 
                top: 0; 
                left: 0; 
                right: 0; 
                bottom: 0; 
                opacity: 0; 
            }
            a:hover:before,
            a:hover:after { 
                opacity: 1;
            }
            .newfilms_img_link{

            }
            .newfilms-card_img{
                height: 190px;
                width: 130px;
            }
        `}</style>
        </div>
    )
}