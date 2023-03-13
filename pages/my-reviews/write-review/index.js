import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Col, Container, Row} from "react-bootstrap";
import ProfileNav from "../../../components/profile/ProfileNav";
import WriteReviewContent from "../../../components/my-reviews/write-review-content";
import {useUserContext} from "../../../store/context/userContext";
import withAuth from "../../../components/hoc/withAuth";
import LoadingSpin from "../../../components/ui/loading-spin";
import {isEmpty} from "../../../lib/helpers";
import {getReviewProduct} from "../../../lib/api/feedback";

const WriteReview = () => {
    const router = useRouter()
    const {orderId, productId, attributeId} = router?.query

    const {token} = useUserContext()

    const [loading, setLoading] = useState(false)
    const [reviewProduct, setReviewProduct] = useState({})


    // console.log('check router query...', orderId, productId, attributeId)

    // Fetch data



    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            // const writeReviewRes = await writeReview(token, orderId, productId, attributeId)
            const getReviewProductRes = await getReviewProduct(token, orderId, productId, attributeId)
            if (getReviewProductRes.status === 200) {
                const {data, success, message} = getReviewProductRes?.data
                setLoading(false)
                // console.log('check review product', data)
                setReviewProduct(data)
                // setReviewProduct({name: 'nazmul'})
            }
        }

        fetchData()
    }, [token, orderId, productId, attributeId])

    // console.log('check reveiw product...', reviewProduct)
    if (loading) return <LoadingSpin/>
    if (isEmpty(reviewProduct)) return <div className="d-flex align-items-center justify-content-center my-5">Sorry, You can&apos;t review this products.</div>

    return (
        <div className="write-review page">
            <section className="write-review-page-section page-section">
                <Container>
                    <Row>
                        <Col xl={3}>
                            <ProfileNav />
                        </Col>
                        <Col xl={9}>
                            <WriteReviewContent productReviewInfo={reviewProduct} type="to-be-reviewed"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default withAuth(WriteReview)