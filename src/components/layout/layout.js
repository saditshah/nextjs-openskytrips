import layoutcss from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}