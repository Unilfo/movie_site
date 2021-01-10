import { Fragment, useState } from 'react'
import { Pagination } from 'react-bootstrap'


export default function PaginationPanel() {
    const [active, setActive] = useState(1)
    const [startIndex, setStartindex] = useState(1)
    const [lastindex, setLastindex] = useState(20)
    let items = []
    for (let i = 1; i <= 25; i++) {
        items.push(i)
    }

    const paginationAction = (el) => {
        console.log(el);
        if (el === 'prev') {
            if (active === 1) {
                setActive(1)
            } else if (active <= 20) {
                setActive(active - 1)
            } else {
                setStartindex(startIndex - 1)
                setLastindex(lastindex - 1)
                setActive(active - 1)
            }
        } else if (el === 'next') {
            if (items.length === active) {
                setActive(active)
            } else if (active < 20) {
                setActive(active + 1)
            } else {
                setStartindex(startIndex + 1)
                setLastindex(lastindex + 1)
                setActive(active + 1)
            }
        } else {
            setActive(el)
        }
    }

    return (
        <Fragment>
            <Pagination className='pagination'>
                <Pagination.Prev className='pagination_box' onClick={() => { paginationAction('prev') }} />
                {items.map((item) => {
                    if (item >= startIndex && item <= lastindex) {
                        return (
                            <Pagination.Item
                                key={item}
                                active={item === active}
                                onClick={() => { paginationAction(item) }}
                                className='pagination_box'
                            >
                                {item}
                            </Pagination.Item>
                        )
                    }
                })}
                <Pagination.Next className='pagination_box' onClick={() => { paginationAction('next') }} />
            </Pagination>
        </Fragment>
    )
}