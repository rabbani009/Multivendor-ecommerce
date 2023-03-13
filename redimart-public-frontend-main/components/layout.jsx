import { Fragment } from "react"
import Footer from "./footer/footer"
import HeaderMain from "./header/header-main"

const Layout = ({children}) => {
    return (
        <Fragment>
            <HeaderMain menus={{topmenu: []}}/>
            <main>
                {children}
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout