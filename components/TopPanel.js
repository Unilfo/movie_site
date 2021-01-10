import { Fragment } from 'react'
import Search from './Search'

export default function TopPanel() {
    return (
        <Fragment>
            <div className='top_panel'>
                <div className='top_panel-logo'>INTWIN</div>
                <Search />
            </div>
            <style jsx>{`
                .top_panel{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 70px;
                    background: chocolate;
                    flex-flow: row nowrap;
                    margin-top: 30px;
                    background-color: #333;
                    box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
                    border-bottom: 2px solid #222;
                }
                .top_panel-logo{
                    font-weight: 700;
                    color: #fff;
                    font-size: 40px;
                    margin-left: 20px;
                }
            `}</style>
        </Fragment>
    )
}