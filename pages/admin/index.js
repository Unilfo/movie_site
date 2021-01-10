// import cookie from 'cookie'

export default function Admin() {
    // console.log(cookie);
    return (
        <div>
            <div className='admin_panel'>
                <div>
                    Login
                </div>
                <input />
                <div>
                    Password
                </div>
                <input />
            </div>
            <style jsx>{`
                .admin_panel{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column nowrap;
                    background-color: #333;
                    color: #ccc;
                    width: 100vw; 
                    height: 100vh; 
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps() {
    console.log('asd');
    // let authenticated = false;
    // const request = appContext.ctx.req;
    // if (request) {
    //     request.cookies = cookie.parse(request.headers.cookie || '');
    //     authenticated = !!request.cookies.session;
    // }

    // // Call the page's `getInitialProps` and fill `appProps.pageProps`
    // const appProps = await App.getInitialProps(appContext);

    return {
        // props: { ...appProps, authenticated },
        props: {}
    }
}