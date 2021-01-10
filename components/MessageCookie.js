import { Fragment, useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { AppContext } from '../context/state'

export default function MessageCookie() {
    const { mesC, setMesC } = useContext(AppContext)
    //добавить в куки

    return (
        <Fragment>
            {mesC &&
                <div className='message'>
                    <div>Этот сайт использует Cookie</div>
                    <div className='message-box'>
                        <AiOutlineClose size='30' onClick={() => setMesC(false)} className='message_close' />
                    </div>
                    <style jsx>{`
                        .message{
                            position: fixed;
                            right: 0;
                            bottom: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-flow: column nowrap;
                            background-color: #444;
                            color: #ccc;
                            width: 100%; 
                            height: 60px; 
                            border-top: 1px solid black;
                            z-index: 6;
                        }
                        .message-box{
                            position: absolute;
                            right: 30px;
                            background-color: #88b669 ;
                        }
                            `}</style>
                </div>
            }
        </Fragment>
    )
}
