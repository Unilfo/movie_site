import Link from 'next/link'
import MainLoyout from '../components/MainLoyout'

export default function ErrorPage() {
    return (
        <MainLoyout>
            <div className='error_page'>
                <h1 className='error_page_404'>404</h1>
                <h1>Страница не найдена</h1>
                <Link href={'/films'}>
                    <a>
                        <h1>На главную</h1>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                    .error_page{
                        display: flex;
                        justify-content: center;
                        flex-flow: column nowrap;
                        align-items: center;
                        color: #ccc;
                        background-color: #333;
                        box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                        padding-bottom: 50px;
                    }
                    .error_page_404{
                        font-size: 350px;
                    }
                    a{
                        color: #fbb450;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #88b669 ;
                    }
                `}</style>
        </MainLoyout>
    )
}