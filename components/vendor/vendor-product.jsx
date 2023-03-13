import { Row, Container } from "react-bootstrap"
import ProductItem from "../products/product-item"
import ReactPaginate from "react-paginate";
import React from "react";
import {useRouter} from "next/router";

const VendorProduct = ({ products, links }) => {
    const router = useRouter()

    // If doesn't have products and products length is 0 return product not found
    if (!products || products.length === 0) return <div>product not found!</div>

    // Handle pagination
    const handlePagination = (_page) => {
        // console.log('check links...', links)
        // console.log('check page number...', _page)
        // console.log('fired pagination handler...', _page)
        // console.log('check router...', router)
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: _page,
            }
        })
        // router.push({
        //     query: {
        //         page: parseInt(_page)
        //     }
        // })
    }

    return (
        <div className="bg-light rounded-2 py-3 px-4">
            <Container className="p-0">
                <Row>
                {
                    products.map((product) => {
                        return <ProductItem xl={3} key={product.id} product={product}/>
                    })
                }
                </Row>
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
                        onPageChange={(e) => handlePagination(e.selected + 1)}
                        pageCount={links.length - 2}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                }

            </div>
            
        </div>
    )
}

export default VendorProduct