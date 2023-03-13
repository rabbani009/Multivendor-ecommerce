import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {Container, Row, Col, Form, Button, OverlayTrigger, Popover} from "react-bootstrap";
import {FaDollarSign, FaHouseUser, FaStar} from "react-icons/fa";

import {humanReadableDate} from "../../lib/helpers/human-readable-date";
import {BsInfoCircle} from "react-icons/bs";
import {ImageFileUpload} from "../ui/modules/image-file-upload";
import {ratingStars, satisfactionRating} from "../../lib/utils/ratings";
import {event} from "next/dist/build/output/log";
import {writeReview} from "../../lib/api/feedback";
import {Toastify} from "../ui/modules/alert/toastify";
// import {writeReview} from "../../lib/api/feedback";

const popover = (
    <Popover className="rounded-1" id="popover">
        <div className="tooltip-body">
            <div className="tooltip-body-item">
                <span>Do</span>
                <ul>
                    <li>Focus only on the product and its features.</li>
                    <li>Base the review on your own personal experience.</li>
                    <li>Tell us “why” you feel a certain way about it.</li>
                </ul>
            </div>
            <div className="tooltip-body-item">
                <span>Don&apos;t</span>
                <ul>
                    <li>Share anything irrelevant to the product.</li>
                    <li>Include fraudulent, false, misleading or deceptive information.</li>
                    <li>Use profane, vulgar, obscene, defamatory, threatening, or discriminatory language.</li>
                    <li>Share anyone’s personal information</li>
                    <li>Include any non-Radimart URLs.</li>
                    <li>Include unauthorized trademarked or copyrighted content.</li>
                </ul>
            </div>

        </div>
    </Popover>
);


const filePopover = (
    <Popover className="rounded-1" id="popover">
        <div className="tooltip-body">
            <div className="tooltip-body-item">
                <span><strong>Important: </strong></span>
                <ul>
                    <li>Can&apos;t be empty uploaded</li>
                    <li>Image size can be maximum 5mb.</li>
                    <li> It takes upto 24 hours for the image to be reviewed.</li>
                    <li>Please ensure you meet the
                        <Link href="#community-guidelines">
                            <a>
                                Community Guidelines
                            </a>
                        </Link>
                        before uploading your review
                    </li>
                </ul>
            </div>

        </div>
    </Popover>
);


const WriteReviewContent = ({ productReviewInfo, type }) => {
    const router = useRouter()
    const query = router?.query
    // console.log('check query..', query)
    // console.log('check type...', type)
    const {productId, orderDate, image, productTitle, color, size, customerName, productSlug, slug, shopName, reviewImage, feedback, sellerReviewDetails, vendorShopName, vendorSlug} = productReviewInfo
    const calculateTitle = productTitle?.slice(0, 28);

    // console.log('check orderId...', productReviewInfo)

    const [sellerCValue, setSellerCValue] = useState(2)
    // const [sellerHValue, setSellerHValue] = useState(undefined)
    const [cValue, setCValue] = useState(4);
    const [hValue, setHValue] = useState(undefined);
    const [productMessage, setProductMessage] = useState(feedback || "")
    const [sellerMessage, setSellerMessage] = useState(sellerReviewDetails || "")
    const [isAnonymous, setIsAnonymous] = useState(isAnonymous === 1)
    const [file, setFile] = useState("");

    // File
    // const [fileName, setFileName] = useState("Upload Boundary File");

    // const {productId, orderDate, image, productTitle, color, size, customerName, productSlug, slug, shopName} = productReviewInfo
    // const calculateTitle = productTitle?.slice(0, 28);
    // let cname = 'nazmul'
    // const calCName = cname.split(" ")
    const calCName = customerName?.split(" ")
    // console.log('check calCName...', calCName)

    // return (
    //     <div>test</div>
    // )

    // console.log('Check product review info...', productReviewInfo)

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const obj = {
        //     sellerCValue,
        //     cValue,
        //     productMessage,
        //     sellerMessage,
        //     isAnonymous,
        //     file
        // }
        // const formData = new FormData();
        // formData.append("image", file);
        // formData.append("image", file)
        // console.log('handle submit fired...', formData)

        // const formData = new FormData(); // Currently empty
        // formData.append('product-review-image', file)
        // console.log('check form data...', formData)

        const data = {
            orderId: query?.orderId,
            productId,
            feedback: productMessage,
            image: file,
            sellerReviewIcon: sellerCValue + 1,
            sellerReviewDetails: sellerMessage,
            ratingStar: cValue + 1,
            isAnonymous: isAnonymous ? 1 : 0,
        }

        const writeReviewRes = await writeReview(data)

        if (writeReviewRes.status === 200) {
            const {data, success, message} = writeReviewRes.data
            if (success) {
                if (data?.length === 0) {
                    Toastify.fire({
                        icon: "warning",
                        // title: "Sweet!",
                        text: message
                    });
                } else {
                    router.replace({
                        pathname: "/my-reviews",
                        query: {
                            status: 'to-be-reviewed'
                        }
                    })

                    Toastify.fire({
                        icon: "success",
                        // title: "Sweet!",
                        text: message
                    });
                }

            }
        }

        // console.log('write review response...', {
        //     productId,
        //     feedback: productMessage,
        //     image: file,
        //     sellerReviewIcon: sellerCValue + 1,
        //     sellerReviewDetails: sellerMessage,
        //     ratingStar: cValue + 1,
        //     isAnonymous: isAnonymous ? 1 : 0,
        // })
    }

    const handleFileChange = (e) => {
        let files = e.target.files
        let fileReader = new FileReader()
        // console.log('check file reader...', fileReader)
        fileReader.readAsDataURL(files[0])
        fileReader.onload = ((event) => {
            // console.log('on load fired...', event.target.result)
            // console.log('check width...', this.width)
            setFile(event.target.result)
        })

        // const writeReviewRes = await writeReview({
        //     productId,
        //     feedback: productMessage,
        //     image: file,
        //     sellerReviewIcon: sellerCValue,
        //     sellerReviewDetails: sellerMessage,
        //     ratingStar: cValue
        // })

        // console.log(writeReviewRes)

        // console.log(fileReader)

        // fileReader.onload = (event) => {
        //     console.log('check event file...', event)
        // }
        // console.log('onchnage handler fired...', e.target.files)
        // console.log(Number(file))
    }

    // console.log('check review info...', productReviewInfo)

    // return (
    //     <div>Hello</div>
    // )

    return (
        <div className="write-review-content page-content py-4 px-4">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="7">
                        <div className="product-review">
                            <div className="product-review-group-header d-flex flex-column mb-3">
                                <small className="mb-2">Delivered on {humanReadableDate(orderDate)}</small>
                                <span>Rate and review purchased product:</span>
                            </div>
                            <div className="product-review-body d-flex align-items-start">
                                <div className="image-wrapper pe-3">
                                    {image && <Image src={image} width={56} height={56} alt={productTitle}/>}
                                </div>
                                <div className="product-review-body-item flex-grow-1">
                                    <div className="product-title mb-1">
                                        <Link href={`/product/${productSlug}`}>
                                            <a className="card-title-link text-decoration-none">
                                                <h6 className="mb-0">
                                                    { calculateTitle?.length > 27 ? calculateTitle + "..." : calculateTitle }
                                                </h6>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="attributes-wrapper d-flex flex-column">
                                        <small className="text-muted">Color Family : {color || "N/A"}</small>
                                        <small className="text-muted">Size Family : {size ||  "N/A"}</small>
                                    </div>
                                    <div className="stars-section my-2">
                                        <span className="d-block mb-1">Rate and review product: </span>
                                        <div className="stars-wrapper">
                                            {
                                                ratingStars.map((item, index) => {
                                                return (
                                                        <item.icon
                                                            key={index}
                                                            className={(hValue || cValue) >= index ? "orange me-1" : "gray me-1"}
                                                            onClick={() => setCValue(index)}
                                                            onMouseOver={() => setHValue(index)}
                                                            onMouseLeave={() => setHValue(undefined)}
                                                        />
                                                    );
                                                })
                                            }

                                            <small>{ratingStars[cValue]?.text}</small>
                                        </div>
                                    </div>
                                    <Form.Group className="mb-3" controlId="product-review-detail">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <Form.Label className="mb-0">Review details <small className="text-danger">*</small></Form.Label>
                                            <OverlayTrigger trigger="focus" placement="left" overlay={popover}>
                                                <Button
                                                    variant="default"
                                                    className="d-flex align-items-center p-0"
                                                >
                                                    {" "}
                                                    <BsInfoCircle className="text-muted"/>
                                                </Button>
                                            </OverlayTrigger>
                                        </div>
                                        <Form.Control as="textarea" name="product-review-detail" value={productMessage} onChange={(e) => setProductMessage(e.currentTarget.value)} rows={4} placeholder="Please share your feedback about the product:
                                            Was the product as described? What is the quality like?" required readOnly={type === "history" && true}/>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="product-review-image">
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <Form.Label className="mb-0">Product image upload</Form.Label>
                                                <OverlayTrigger trigger="focus" placement="left" overlay={filePopover}>
                                                    <Button
                                                        variant="default"
                                                        className="d-flex align-items-center p-0"
                                                    >
                                                        {" "}
                                                        <BsInfoCircle className="text-muted"/>
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            {
                                                type === "to-be-reviewed" ? <input type="file" name="product-review-image" id="product-review-image" readOnly={type === "history" && true} onChange={handleFileChange} className="form-control" accept="image/png, image/gif, image/jpeg"/> : (reviewImage && <Image src={`${reviewImage}_56x56`} width={56} height={56} alt={sellerReviewDetails}/>)
                                            }
                                            {/*<input type="file" name="product-review-image" id="product-review-image" readOnly={type === "history" && true} onChange={handleFileChange} className="form-control" accept="image/png, image/gif, image/jpeg"/>*/}
                                        </div>
                                    </Form.Group>

                                    {/*<img src={file} alt=""/>*/}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="5">
                        <div className="seller-review">
                            <div className="vendor-name">
                                <h6>Sold by
                                    <Link href={`radimart-shop/${slug || vendorSlug}`}>
                                        <a className="vendor-link text-decoration-none text-info">{" "} {shopName || vendorShopName}</a>
                                    </Link>
                                </h6>
                            </div>
                            <div className="seller-response-rating-section my-3">
                                <span className="d-block mb-2">Rate and review your seller: </span>
                                <div className="seller-response-rating-wrapper">
                                    {
                                        satisfactionRating.map((item, index) => {
                                            // console.log(sellerHValue)
                                            // console.log(index)
                                            return (
                                                <item.icon
                                                    key={item.id}
                                                    className={(sellerCValue) === index ? "orange me-2" : "gray me-2"}
                                                    onClick={() => setSellerCValue(index)}
                                                />
                                            )
                                        })
                                    }
                                    <small>{satisfactionRating[sellerCValue]?.text}</small>
                                </div>
                            </div>

                            <Form.Group className="mb-3" controlId="seller-review-detail">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <Form.Label className="mb-0">Review details</Form.Label>
                                    <OverlayTrigger trigger="focus" placement="left" overlay={popover}>
                                        <Button
                                            variant="default"
                                            className="d-flex align-items-center p-0"
                                        >
                                            {" "}
                                            <BsInfoCircle className="text-muted"/>
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                                <Form.Control as="textarea" name="seller-review-detail" value={sellerMessage} readOnly={type === "history" && true} onChange={(e)=> setSellerMessage(e.currentTarget.value) } rows={3} placeholder="Please share your feedback about the seller:" />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row className="text-end submit-area">
                    <Col>
                        <Form.Group className="mb-3 d-flex justify-content-end text-info" controlId="review-as-anonymous">
                            <span className="me-2">{calCName && calCName[0] || 'N/A'}</span>
                            <Form.Check type="checkbox" name="review-as-anonymous" label="As Anonymous" defaultChecked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} />
                        </Form.Group>
                        {
                            type === "to-be-reviewed" && <Button type="submit" variant="outline-warning">Submit</Button>
                        }
                        {/*<Button type="submit" variant="outline-warning">Submit</Button>*/}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default WriteReviewContent