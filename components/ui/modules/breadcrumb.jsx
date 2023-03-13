import {Fragment} from "react";

const Breadcrumb = ({ nav }) => {

    // console.log('check nav...', nav)
    // console.log(`check nav: ${nav}`)
    // for (let item of nav) {
    //     console.log('check item...', item)
    // }

    // console.log('check nav...', nav)
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">

                {/*{*/}
                {/*    nav.map(item => {*/}
                {/*        return (*/}
                {/*            <li key={item.id} className="breadcrumb-item active" aria-current="page">{item.label}</li>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

                <li className="breadcrumb-item active" aria-current="page">Home</li>
                {
                    <Fragment>
                        <li className="breadcrumb-item active" aria-current="page">{nav?.cat}</li>
                        <li className="breadcrumb-item active" aria-current="page">{nav?.subCat}</li>
                        <li className="breadcrumb-item active" aria-current="page">{nav?.qus}</li>
                    </Fragment>
                }

            </ol>
        </nav>
    )
}

export default Breadcrumb