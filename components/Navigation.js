import Link from 'next/link'

export default function Navigation() {
  const links = [
    {title: 'Главная', ref: '/films', filter:'all'},
    {title: 'Фильмы', ref: '/films', filter:'film'},
    {title: 'Сериалы', ref: '/serials', filter:'serial'},
    {title: 'Мультфильмы', ref: '/mult', filter:'mult'},
    {title: 'Аниме', ref: '/multa', filter:'mult'},
    {title: 'Новинки 2021', ref: '/mults', filter:'mult'},
  ]

  return (
    <nav>
      <div className="grid">
        {links.map(({title, ref, filter}) =>
          <Link href={ref} key={title}><a>{title}</a></Link>,
        )}
      </div>
      <style jsx>{`
                .grid{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    background: darkcyan;
                    padding-left: 30px;
                    padding-right: 30px;
                    background-color: #444;
                    box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                    border-bottom: 1px solid #222;
                }
                a:hover {
                    color: #fbb450;
                    transition: color .3s,background-color .3s,opacity .3s;
                }
                a{
                    font-weight: 700;
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
    </nav>
  )
}

