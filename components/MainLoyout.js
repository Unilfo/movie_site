import Head from "next/head"
import Navigation from "./Navigation"
import TopPanel from "./TopPanel"
import Footer from './Footer'
import NewFilms from "./NewFilms"
import MessageCookie from './MessageCookie'

export default function MainLoyout({ children, title = 'Онлайн-кинотеатр' }) {
    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopPanel />
            <Navigation />
            <NewFilms />
            <h1 className='shorts-header'>Фильмы онлайн 2020, 2021 смотреть в хорошем качестве HD 720 и 1080p</h1>
            <main>
                {children}
            </main>
            <Footer />
            <MessageCookie />
            <style jsx>{`
                    .container{
                        width: 1000px;
                        margin: 0 auto;
                    }
                    .wrapper{
                        background: #efefef url(holiday-christmas-bg.png);
                    }
                    .shorts-header{
                        display: flex;
                        justify-content: center;
                        background-color: #333;
                        box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                        font-weight: 700;
                        color: #ce1025;
                        font-size: 18px;
                        margin-bottom: 0;
                        padding-bottom: 7px;
                        padding-top: 7px;
                    }
                `}</style>
            <style global jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    background: #efefef url(holiday-christmas-bg.png);
                }
                `}
            </style>
        </div>
    )
}