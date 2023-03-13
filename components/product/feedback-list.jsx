import React, {Fragment, useState} from "react"
import ReactPaginate from "react-paginate";

import FeedbackItem from "./feedback-item";

const FeedbackList = ({ feedback }) => {
    const [enlargedImage, setEnlargedImage] = useState(null)
    const [active, setActive] = useState(undefined)

    const handleEnlargedImage = (id, image) => {
        setActive(id)
        setEnlargedImage(image)
    }

    if (feedback.length === 0) return <div className="py-4 text-center">No feedback yet!</div>
    return (
        <div className="feedback-items-wrapper">
            <div>
                {
                    feedback.map((item) => {
                        const {customerName, date, feedback, image, productId, ratingStar, id} = item

                        return (
                            <Fragment key={item.id}>
                                <FeedbackItem
                                    name={customerName}
                                    publishDate={date}
                                    activeImage={active}
                                    feedback={feedback}
                                    handleEnlargedImage={handleEnlargedImage}
                                    stars={ratingStar}
                                    images={image}
                                    image={enlargedImage}
                                />
                                <hr/>
                            </Fragment>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center justify-content-end pt-3">
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
                    onPageChange={(e) => console.log(e.selected+1)}
                    pageCount={10}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default FeedbackList