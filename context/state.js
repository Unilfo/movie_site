import {createContext, useContext, useEffect, useState} from 'react'
import Router from 'next/router'

const filmsServer = [
  {
    name: 'Гравити Фолз',
    author: '2',
    img: `http://localhost:3000/8.jpg`,
    category: 'films'
  },
  {
    name: 'Теория большого взрыва',
    author: '2',
    img: `https://picsum.photos/200/300?random=11`,
    category: 'films'
  },
  {
    name: 'Клан Сопрано',
    author: '2',
    img: `https://picsum.photos/200/300?random=12`,
    category: 'films'
  },
  {
    name: 'Игра престолов',
    author: '2',
    img: `https://picsum.photos/200/300?random=13`,
    category: 'films'

  },
  {
    name: 'Игра престолов5',
    author: '2',
    img: `https://picsum.photos/200/300?random=1`,
    category: 'films'

  },
  {
    name: 'Игра престолов6',
    author: '2',
    img: `https://picsum.photos/200/300?random=14`,
    category: 'films'

  },
  {
    name: '7',
    author: '2',
    img: `https://picsum.photos/200/300?random=15`,
    category: 'films'

  },
  {
    name: '61Игра престолов',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'films'

  },
  {
    name: '8Игра престолов',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'films'

  },
  {
    name: '9',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'

  },
  {
    name: '10Игра престолов',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'

  },
]

export const AppContext = createContext()

export function AppWrapper({children}) {
  const [state, setState] = useState({})
  const [mesC, setMesC] = useState(true)
  const [text, setText] = useState('')
  const [initialFilms, setInitialFilms] = useState(null)

  useEffect(() => {
    console.log('первый запуск')
    setInitialFilms(filmsServer)
  }, [])

  useEffect(() => {
    console.log('начальное значение')

    setState({
      films: initialFilms,
    })
  }, [initialFilms])

  useEffect(()=>{
    console.log('фильтр')
    let filter = Router?.router?.route.slice(1)
    if(filter){
      let films = filmsServer.filter((film) => film.category === filter)
      setState({
        films: films,
      })
    }else{
      setState({
        films: initialFilms,
      })
    }
  }, [Router?.router?.route])

  useEffect(() => {
    console.log('поиск')
    if(text === 'INITIALS_FILMS'){
      setState({
        films: initialFilms,
      })
      return
    }else{
      let films = filmsServer.filter((film) => {
        return film.name.toLowerCase().indexOf(text.toLowerCase().trim()) > -1
      })
      setState({
        films: films,
      })
    }

  }, [text])

  console.log('films', state.films)

  return (
    <AppContext.Provider value={{state, setState, mesC, setMesC, text, setText}}>
      {children}
    </AppContext.Provider>
  )
}
