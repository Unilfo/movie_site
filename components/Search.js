import { useState } from "react";

export default function Search() {
    const [searchText, setSearchText] = useState(() => { return '' })

    const search = () => {
        console.log('update query: ', searchText);
    }

    return (
        <div>
            <input
                className='top_panel-search'
                placeholder='Поиск фильмов и сериалов'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onBlur={() => setSearchText('')}
            />
            <button onClick={search} className='top_panel-search-button' type="submit" title="Найти">Найти</button>
            <style jsx>{`
            .top_panel-search{
                padding-left: 5px;
                padding-right: 5px;
                width: 230px;
                height: 30px;
                outline: none;
                background-color: #f0f0f0;
                color: #999;
                font-style: italic;
                border: 0;
            }
            .top_panel-search-button{
                margin-right: 20px;
                border: 0;
                text-align: center;
                width: 80px;
                height: 30px;
                background-color: #88b669 !important;
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                cursor: pointer;
                outline: none;
            }
            .top_panel-search-button:hover{
                background-color: #88b600 !important;
            }
        `}</style>
        </div>
    )
}