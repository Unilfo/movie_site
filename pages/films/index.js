import MainLoyout from '../../components/MainLoyout'
import {useEffect, useState, useContext} from 'react'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import {AppContext} from '../../context/state'

export default function Films() {
  const {state, setState} = useContext(AppContext)
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
          <Card film={film} key={film.name}/>
        )}
      </div>
      <Pagination/>
      <style jsx>{`
        .films_list {
          display: flex;
          flex-flow: column wrap;
          background-color: #444;
          border-bottom: 1px solid #222;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </MainLoyout>
  )
}


