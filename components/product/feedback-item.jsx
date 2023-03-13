import Image from "next/image";
import { Card } from "react-bootstrap";
import { BsShieldFillCheck } from "react-icons/bs";

import Stars from "./stars";
import {humanReadableDate} from "../../lib/helpers/human-readable-date";

const FeedbackItem = ({ name, publishDate, activeImage, feedback, handleEnlargedImage, stars, images, image}) => {
    const nameFirstLatter = name.charAt(0)

    return (
        <Card className="shadow-none border-0 pt-3 py-2">
            <div className="card-header border-0 bg-light d-flex p-0">
                <div className="image-wrapper pe-2">
                    <div className="profile-image d-flex align-items-center justify-content-center">{nameFirstLatter}</div>
                </div>
                <div className="card-title ps-2 mb-0">
                    <h6 className="mb-0">{name}<small>
                        <BsShieldFillCheck className="text-success"/>
                    </small></h6>
                    <Stars stars={stars}/>
                </div>
            </div>
            <div className="card-body p-0">
                <p className="py-2 mb-0 text-muted">{feedback}</p>
                <div className="image-wrapper d-flex mb-2">
                    {
                        images?.map((item) => {
                            const {id, image} = item
                            return (
                                <div className={activeImage === id ? 'item-img-wrapper px-2 me-1 active' : 'item-img-wrapper px-2 me-1'} key={id} onClick={()=> handleEnlargedImage(id, image)}>
                                    <Image src={`${image}_94x94.png`} width={"94"} height={"94"} alt={image}/>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    image && (
                        <div className="review-image-enlarged-wrapper">
                            <div className="image-wrapper">
                                <Image src={`${image}_400x400.png`} width={"400"} height={"400"} alt={'test'}/>
                            </div>
                        </div>
                    )
                }
                <div>Publish data {humanReadableDate(publishDate)}</div>
            </div>
        </Card>
    )
}

export default FeedbackItem