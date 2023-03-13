import {Container, Row} from "react-bootstrap";
import Ratings from "./ratings";
import Feedback from "./feedback";
import Reviews from "./reviews";

const RatingsAndFeedback = ({ title, feedback }) => {
    const review = {
        avarage: 4.6,
        ratingStarInfo: 'test',
        totalRating: 10
    }

    return (
        <section className="rating-and-feedback-section pb-3">
            <Container>
                <Row className="bg-white">
                    <div className="rating-and-feedback-wrapper p-3">
                        <div className="section-title-text mb-3">
                            <h4 className="mb-0">{`Ratings & Reviews of ${title}`}</h4>
                        </div>
                        <hr className="my-2"/>
                        <div className="section-body-wrapper">
                            {/*<Ratings/>*/}
                            {/*<Feedback/>*/}

                            <Reviews review={review}/>
                            <hr/>
                            <Feedback feedback={feedback}/>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default RatingsAndFeedback