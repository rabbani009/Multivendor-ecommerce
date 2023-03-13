import FeedbackList from "./feedback-list";

const Feedback = ({ feedback }) => {
    return (
        <div className="feedback-wrapper pt-2">
            <div className="feedback-title">
                <h5 className="text-size-sm mb-0 pb-2">Product Reviews</h5>
            </div>
            <hr/>
            <FeedbackList feedback={feedback}/>
        </div>
    )
}

export default Feedback