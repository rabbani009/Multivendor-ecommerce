import React, {Fragment, useState} from "react";
import ProductReviewCard from "./product-review-card";
import MyModal from "../ui/modules/my-modal";
import {Button, Modal} from "react-bootstrap";
import WriteReviewContent from "./write-review-content";

const ProductsReviewItems = ({ reviews, type }) => {
    // console.log('check reviews...', reviews)
    // const [modalShow, setModalShow] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [selectReview, setSelectReview] = useState({})


    const handleReview = (review) => {
        // console.log('check id...', review)
        setSelectReview(review)
        setModalShow(true)
    }

    // If not have reviews
    if (reviews.length === 0) return <div className="d-flex align-items-center justify-content-center my-5">No reviews yet</div>

    return (
        <Fragment>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Review details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-100" style={{ width: '100% !important'}}>
                    <WriteReviewContent productReviewInfo={selectReview} type={type}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </MyModal>
            {/*<MyModal*/}
            {/*    show={modalShow}*/}
            {/*    onHide={() => setModalShow(false)}*/}
            {/*/>*/}
            <div className="my-reviews-container">
                {
                    reviews?.map((item, index) => {
                        return <ProductReviewCard key={index} review={item} type={type} handleReview={handleReview} />
                    })
                }
            </div>
        </Fragment>
        // <div className="my-reviews-container">
        //     {
        //         reviews?.map((item, index) => {
        //             return <ProductReviewCard key={index} review={item} type={type} />
        //         })
        //     }
        // </div>
    )
}

export default ProductsReviewItems