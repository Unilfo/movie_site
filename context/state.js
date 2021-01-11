import {createContext, useContext, useEffect, useState} from 'react'
import Router from 'next/router'

const filmsServer = [
  {
    name: 'Гравити Фолз',
    author: '2',
    img: `http://192.168.3.134:3000/8.jpg`,
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
  {
    name: '11',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '12',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '13',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '14',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '15',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '16',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '17',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '18',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '19',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '20',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '21',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '22',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '23',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '24',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '25',
    author: '2',
    img: `https://picsum.photos/200/300`,
    category: 'serials'
  },
  {
    name: '26',
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
  const [currentPagination, setCurrentPagination] = useState(1)
  const [filter, setFilter] = useState('films')
  const [needUpdate, setNeedUpdate] = useState(false)
  const [needUpdateSearch, setNeedUpdateSearch] = useState(false)

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

  useEffect(() => {
    console.log('currentPagination', currentPagination)
    let tenFilms = []
    for (let i = `${currentPagination}0` - 10; i <= `${currentPagination}0`; i++) {
      if(filmsServer[i] !== undefined){
        tenFilms.push(filmsServer[i])
      }
    }
    setState({
      films: tenFilms,
    })
  }, [currentPagination])

  useEffect(() => {
    console.log('фильтр')
    if (filter) {
      let filmsFiltred = filmsServer.filter((film) => film.category === filter)
      setState({
        films: filmsFiltred,
      })
    } else {
      setState({
        films: initialFilms,
      })
    }
  },[filter, needUpdate])

  useEffect(() => {
    console.log('поиск')
    if (text === 'INITIALS_FILMS') {
      setState({
        films: initialFilms,
      })
      return
    } else {
      let films = filmsServer.filter((film) => {
        return film.name.toLowerCase().indexOf(text.toLowerCase().trim()) > -1
      })
      setState({
        films: films,
      })
    }
  }, [text, needUpdateSearch])

  useEffect(()=>()=>{
    setNeedUpdate(false)
    setNeedUpdateSearch(false)
  })

  console.log('films', state.films)

  return (
    <AppContext.Provider
      value={{state, setState, mesC, setMesC, text, setText, currentPagination, setCurrentPagination, filter, setFilter, setNeedUpdate, setNeedUpdateSearch}}>
      {children}
    </AppContext.Provider>
  )
}
