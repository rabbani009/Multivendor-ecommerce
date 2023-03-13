import Link from "next/link";
import {ListGroup} from "react-bootstrap";
import Breadcrumb from "../ui/modules/breadcrumb";
import {useRouter} from "next/router";

const FaqBody = ({ questions }) => {
    // console.log('check questions...', qus)
    const router = useRouter()
    // console.log(router)

    // const handleClick = (item) => {
    //     router.replace({
    //         pathname: router.pathname,
    //         query: {
    //             cat: router.query?.cat,
    //             subCat: router.query?.subCat,
    //             qus: item
    //         }
    //     })
    //     console.log(item)
    //     console.log(router)
    //     if (router.query?.qus) {
    //         router.replace(`${router?.asPath}&qus=${item}`)
    //     }
    //
    //     router.replace(`${router?.asPath}&qus=${item}`)
    //     console.log(router)
    //
    //
    //     router.replace(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}${router.pathname}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`);
    //     console.log(router)
    //     console.log(router.query?.qus ? 'yes' : 'no')
    //     if (router.query?.qus) {
    //         router.replace({
    //             pathname: router.pathname,
    //             query: {
    //                 cat: router.query?.cat,
    //                 subCat: router.query?.subCat,
    //                 qus: item
    //             }
    //         })
    //     }
    // }

    // const navItems = [
    //     {
    //         id: 1,
    //         label: 'Home'
    //     },
    //     {
    //         id: 2,
    //         label: 'Category'
    //     },
    //     {
    //         id: 3,
    //         label: 'Sub-Category'
    //     },
    //     {
    //         id: 4,
    //         label: 'Question'
    //     }
    // ]

    if (questions.length === 0) return <div>No question here!</div>

    return (
        <div className="page faq-content-wrapper bg-light p-4">
            {/*<Breadcrumb nav={router.query}/>*/}

            <hr className="my-3"/>
           <div className="question-wrapper">
               {/*<ListGroup as="ul" variant="flush">*/}
               {/*    {*/}
               {/*        [1,2,3,4,5].map((item => {*/}
               {/*            return (*/}
               {/*                // <ListGroup.Item as="li" key={item} onClick={() => handleClick(item)}>*/}
               {/*                //     <Link href={`${router?.asPath}&qus=${item}`}>*/}
               {/*                //         <a className="text-decoration-none">How do I pay on Radimart?</a>*/}
               {/*                //     </Link>*/}
               {/*                //*/}
               {/*                //     /!*{*!/*/}
               {/*                //     /!*    item*!/*/}
               {/*                //     /!*}*!/*/}
               {/*                // </ListGroup.Item>*/}

               {/*                <ListGroup.Item as="li" key={item}>*/}
               {/*                    /!*<Link href={router.replace({*!/*/}
               {/*                    /!*    pathname: router.pathname,*!/*/}
               {/*                    /!*    query: {*!/*/}
               {/*                    /!*        ...router.query,*!/*/}
               {/*                    /!*        que: item*!/*/}
               {/*                    /!*    }*!/*/}
               {/*                    /!*})}>*!/*/}
               {/*                    <Link href={{*/}
               {/*                        pathname: router.pathname,*/}
               {/*                        query: {*/}
               {/*                            ...router.query,*/}
               {/*                            qus: item*/}
               {/*                        }*/}
               {/*                    }}>*/}
               {/*                        <a className="text-decoration-none">How do I pay on Radimart?</a>*/}
               {/*                    </Link>*/}

               {/*                    /!*{*!/*/}
               {/*                    /!*    item*!/*/}
               {/*                    /!*}*!/*/}
               {/*                </ListGroup.Item>*/}
               {/*            )*/}
               {/*        }))*/}
               {/*    }*/}
               {/*    /!*<ListGroup.Item as="li">Dapibus ac facilisis in?</ListGroup.Item>*!/*/}
               {/*    /!*<ListGroup.Item as="li">Morbi leo risus?</ListGroup.Item>*!/*/}
               {/*    /!*<ListGroup.Item as="li">Porta ac consectetur ac?</ListGroup.Item>*!/*/}
               {/*    /!*<ListGroup.Item as="li">Vestibulum at eros?</ListGroup.Item>*!/*/}
               {/*</ListGroup>*/}
               {/*{*/}
               {/*    questions.map(question => {*/}
               {/*        */}
               {/*    })*/}
               {/*}*/}

               {
                   !router.query.qus ? (
                       <ListGroup as="ul" variant="flush">
                           {
                               questions?.map((item => {
                                   const {id, question} = item

                                   return (
                                       <ListGroup.Item as="li" key={id}>
                                           <Link href={{
                                               pathname: router.pathname,
                                               query: {
                                                   ...router.query,
                                                   qus: id
                                               }
                                           }}>
                                               <a className="text-decoration-none">{question}?</a>
                                           </Link>

                                           {/*{*/}
                                           {/*    item*/}
                                           {/*}*/}
                                       </ListGroup.Item>
                                   )
                               }))
                           }
                       </ListGroup>
                   ) : <div className="html-content-wrapper" dangerouslySetInnerHTML={{__html: `${questions?.answer}`}}></div>
               }
           </div>
        </div>
    )
}

export default FaqBody