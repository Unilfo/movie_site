import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.css'
import { AppWrapper } from '../context/state'

export default function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}