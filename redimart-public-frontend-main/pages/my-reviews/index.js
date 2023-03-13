import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Col, Container, Row} from "react-bootstrap";
import ProfileNav from "../../components/profile/ProfileNav";
import MyReviewsContent from "../../components/my-reviews/my-reviews-content";
import withAuth from "../../components/hoc/withAuth";
import {myReviews} from "../../lib/api/feedback";
import {useUserContext} from "../../store/context/userContext";
import LoadingSpin from "../../components/ui/loading-spin";

const MyReviews = () => {
    const {token} = useUserContext()
    const router = useRouter()
    // const [key, setKey] = useState('to-be-reviewed')
    // const [key, setKey] = useState(router?.query?.status)
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState([])
    // console.log('check reviews...', reviews)


    // console.log('check...', key)
    // const handleEventKey = (k) => {
    //     setKey(k)
    //     console.log('check key...', key)
    //     router.push(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}${router.pathname}?status=${k}`)
    //     setKey(k)
    // }


    useEffect( () => {
        // Fetch data
        const fetchData = async () => {
            // console.log('fetch data...', key)
            setLoading(true)
            const myReviewsRes = await myReviews(token, router?.query?.status)
            // console.log(myReviewsRes)
            if (myReviewsRes.status === 200) {
                const {data, success, message} = myReviewsRes?.data
                setReviews(data)
                // console.log('check data...', data)
                // router.replace({
                //     pathname: "/my-reviews",
                //     query: {
                //         status: 'to-be-reviewed'
                //     }
                // })
            }
            setLoading(false)
        }

        fetchData()
    }, [router?.query?.status, token])

    // console.log(reviews)

    if (loading) return <LoadingSpin/>
    // if (reviews?.length < 1) return <div className="d-flex align-items-center justify-content-center my-5">No reviews yet</div>


    return (
        <div className="my-reviews-page page">
            <section className="my-reviews-page-section page-section">
                <Container>
                    <Row>
                        <Col xl={3}>
                            <ProfileNav />
                        </Col>
                        <Col xl={9}>
                            <MyReviewsContent reviews={reviews}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default withAuth(MyReviews)