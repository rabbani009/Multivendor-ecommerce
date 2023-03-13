import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import {getAllShops} from "../../lib/api/vendor";

import RadimartShop from "../../components/section/radimart-shop";
import RadimartCardItem from "../../components/item/radimart-card-item";

export async function getServerSideProps(ctx) {
    // console.log('check query...', ctx.query)
    // Get query
    const { query } = ctx;
    // const { slug } = params;
    // console.log('check params...', params)
    // console.log('check query...', query)
    // console.log('check slug...', slug)

    // let tempShops = []
    // Define the data
    let radimartShops = {}
    // let page = 1

    // API call
    const shopsRes = await getAllShops(query?.page)

    // Check api status
    if (shopsRes?.status === 200) {
        const {data, success} = shopsRes?.data
        if (success) {
            // Update radimart shops data
            radimartShops = data
        }
    } else {
        return {
            notFound: true,
        }
    }


    // console.log('check all shops...', shopsRes)

    // const allShops = await getAllShops()
    // // console.log('check all shops...', allShops)
    // if (allShops.status === 200) {
    //     const {data,success} = allShops.data
    //
    //     if(success) {
    //         // tempShops = data
    //     }
    // }

    return {
        props: {
            shops: radimartShops
            // shops: tempShops
        }, // will be passed to the page component as props
    }
}

const RadimartShopsPage = ({ shops })=> {
    const {data, links} = shops
    console.log('check shops...', shops)
    const router = useRouter()
    // console.log('check router...', router)


    // Handle pagination
    const handlePagination = (_page) => {
        // console.log('fired pagination handler...', _page)
        router.push({
            query: {
                page: parseInt(_page)
            }
        })
    }

    return (
        <section className="radimart-shops-section py-2 py-md-3">
            <Container>
                <Row className="g-0 box-shadow-lg">

                    <div className="radimart-shops rounded-3 p-2 p-md-3">

                        <div className="section-title">
                            <h4 className="mb-0 d-flex align-items-center text-uppercase">
                                {/* <img
                                    src="https://api.zdrop.com.bd/public/storage/home/icon/top-selection.svg"
                                    alt="icon"
                                />{" "} */}
                                {"Radimart Shops"}
                            </h4>
                        </div>

                        <div className="radimart-shops-wrapper p-2 p-md-3">
                            <Container className="shops-item-wrapper">
                                <div className="shops-wrapper">
                                    <Row>
                                        {/*{*/}
                                        {/*    shops &&*/}
                                        {/*    shops.map((item, index) => {*/}
                                        {/*        return <RadimartCardItem shop={item} key={index} />;*/}
                                        {/*    })*/}
                                        {/*}*/}

                                        {
                                            data && data.map((item, index) => {
                                                return <RadimartCardItem shop={item} key={index} />
                                            })
                                        }

                                    </Row>
                                </div>
                            </Container>

                            <div className="section-footer d-flex justify-content-end pt-3">
                                {
                                    links?.length >= 1 &&
                                    <ReactPaginate
                                        className="pagination"
                                        breakClassName="page-item"
                                        pageClassName="page-item"
                                        nextClassName="page-item"
                                        previousClassName="page-item"
                                        pageLinkClassName="page-link"
                                        breakLinkClassName="page-link"
                                        previousLinkClassName="page-link"
                                        nextLinkClassName="page-link"
                                        activeClassName="active"
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={(e) => handlePagination(e.selected)}
                                        pageCount={links.length - 2}
                                        previousLabel="< previous"
                                        renderOnZeroPageCount={null}
                                    />
                                }

                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default RadimartShopsPage