import { createContext, useContext, useState } from 'react'

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

export const AppContext = createContext()

export function AppWrapper({ children }) {
    const [state, setState] = useState(films)
    const [mesC, setMesC] = useState(true)

    return (
        <AppContext.Provider value={{ state, setState, mesC, setMesC }}>
            {children}
        </AppContext.Provider>
    );
}
