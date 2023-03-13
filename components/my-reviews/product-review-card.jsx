import React, {Fragment, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Card, Button} from "react-bootstrap";
import {humanReadableDate} from "../../lib/helpers/human-readable-date";
import MyModal from "../ui/modules/my-modal";

const ProductReviewCard = ({ review,type, handleReview }) => {
    // const [modalShow, setModalShow] = useState(false);
    const {attributeId, color, id, image, orderDate, orderId, productId, productTitle, size, slug, vendorShopName} = review
    const calculateTitle = productTitle?.slice(0, 28);

    return (
        <Fragment>
            {/*<Button onClick={() => setModalShow(true)}>Show</Button>*/}
            {/*<MyModal*/}
            {/*    show={modalShow}*/}
            {/*    onHide={() => setModalShow(false)}*/}
            {/*/>*/}
            <Card className="flex-row my-2 py-3">
                <div className="card-item flex-grow-1 px-3">
                    <div className="mb-2">
                        <span className="text-muted text-size-sm">Purchased on {humanReadableDate(orderDate)}</span>
                    </div>
                    <div className="d-flex">
                        <div className="img-wrapper pe-3">
                            <Link href={`/product/${slug}`}>
                                <a>
                                    {/*<img src={image} alt=""/>*/}
                                    {
                                        image && <Image src={`${image}_56x56.png`} alt={productTitle} height={"56"} width={"56"}/>
                                    }
                                </a>
                            </Link>
                        </div>
                        <div className="flex-grow-1">
                            <div>
                                <Link href={`/product/${slug}`}>
                                    <a className="card-title-link">
                                        <h6 className="mb-0">
                                            { calculateTitle?.length > 27 ? calculateTitle + "..." : calculateTitle }
                                        </h6>
                                    </a>
                                </Link>
                            </div>
                            <div className="attributes-wrapper d-flex flex-column">
                                <span>Color Family : {color || "N/A"}</span>
                                <span>Size Family : {size ||  "N/A"}</span>
                            </div>

                            <div>
                                {/*stars*/}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card-item px-3">
                    <div className="vendor-name">
                        <h6>Sold by
                            <Link href={`radimart-shop/${slug}`}>
                                <a className="vendor-link">{" "} {vendorShopName}</a>
                            </Link>
                        </h6>
                    </div>
                    <div>
                        {
                            type === "to-be-reviewed" ? (
                                <Link href={`my-reviews/write-review?status=${type}&orderId=${orderId}&productId=${productId}&attributeId=${attributeId || 'N/A'}`}>
                                    <a className="btn btn-outline-primary btn-sm" role="button">
                                        Write review
                                    </a>
                                </Link>
                            ) : (
                                <Button variant="outline-primary" size="sm" onClick={() => handleReview(review)}>View review</Button>
                            )
                        }
                    </div>
                </div>
            </Card>
        </Fragment>
        // <Card className="flex-row my-2 py-3">
        //     <div className="card-item flex-grow-1 px-3">
        //         <div className="mb-2">
        //             <span className="text-muted text-size-sm">Purchased on {humanReadableDate(orderDate)}</span>
        //         </div>
        //         <div className="d-flex">
        //             <div className="img-wrapper pe-3">
        //                 <Link href={`/product/${slug}`}>
        //                     <a>
        //                         {/*<img src={image} alt=""/>*/}
        //                         {
        //                             image && <Image src={`${image}_56x56.png`} alt={productTitle} height={"56"} width={"56"}/>
        //                         }
        //                     </a>
        //                 </Link>
        //             </div>
        //             <div className="flex-grow-1">
        //                 <div>
        //                     <Link href={`/product/${slug}`}>
        //                         <a className="card-title-link">
        //                             <h6 className="mb-0">
        //                                 { calculateTitle?.length > 27 ? calculateTitle + "..." : calculateTitle }
        //                             </h6>
        //                         </a>
        //                     </Link>
        //                 </div>
        //                 <div className="attributes-wrapper d-flex flex-column">
        //                     <span>Color Family : {color || "N/A"}</span>
        //                     <span>Size Family : {size ||  "N/A"}</span>
        //                 </div>
        //
        //                 <div>
        //                     {/*stars*/}
        //                 </div>
        //
        //             </div>
        //         </div>
        //     </div>
        //
        //     <div className="card-item px-3">
        //         <div className="vendor-name">
        //             <h6>Sold by
        //                 <Link href={`radimart-shop/${slug}`}>
        //                     <a className="vendor-link">{" "} {vendorShopName}</a>
        //                 </Link>
        //             </h6>
        //         </div>
        //         <div>
        //             {
        //                 type === "to-be-reviewed" ? (
        //                     <Link href={`my-reviews/write-review?status=${type}&orderId=${orderId}&productId=${productId}&attributeId=${attributeId || 'N/A'}`}>
        //                         <a className="btn btn-outline-primary btn-sm" role="button">
        //                             Write review
        //                         </a>
        //                     </Link>
        //                 ) : (
        //                     <Button variant="outline-primary" size="sm">View review</Button>
        //                 )
        //             }
        //         </div>
        //     </div>
        // </Card>
    )
}

export default ProductReviewCard