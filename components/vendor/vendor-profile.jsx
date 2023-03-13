import Link from 'next/link'
import Image from 'next/image'

import { Container } from "react-bootstrap";
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";

import Stars from "../../components/products/Stars";


const VendorProfile = ({ name, logo, bg_img, email, address, phone }) => {

    const background = 'https://bonik-react.vercel.app/assets/images/banners/shop-cover.png'
    const _shopLogo = 'https://bonik-react.vercel.app/assets/images/faces/propic.png'
    
  return (
    <section className="shop-feature-section py-1">
        <Container>
            <div className="shop-feature-inner rounded-3 bg-light pb-4">
                <div className="shop-background-image" style={{ backgroundImage: `url(${bg_img || background})` }}></div>
                <div className="shop-content-wrapper d-flex flex-column flex-md-row w-100">
                    <div className="shop-profile-icon me-4">
                        {/* <img src={shopLogo} alt={shopName}/> */}
                        <Image src={logo || _shopLogo} width={120} height={120} alt={name}/>
                    </div>

                    <div className="shop-profile-info w-100 mt-4 mt-md-0">
                        <div className="shop-profile-info-top d-flex flex-column flex-sm-row justify-content-between">
                            <div className="shop-name-bg text-uppercase rounded-2 p-2">
                                <h3 className="mb-0 text-light text-center text-sm-start">{name}</h3>
                            </div>
                        </div>

                        <div className="shop-profile-info-bottom d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-sm-start align-items-lg-center">
                            <div className="left-content">
                                <div className="review-wrapper d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <Stars stars={2} reviews={10}/>
                                </div>
                                <div className="shop-contact-info d-flex flex-column align-items-center align-items-sm-start">
                                    <div className="d-flex my-1 my-md-2">
                                        <div>
                                            <FaMapMarkerAlt/>
                                        </div>
                                        <div>
                                            <span>{address}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex my-1 my-md-2">
                                        <div>
                                            <FaPhoneAlt/>
                                        </div>
                                        <div>
                                            <span>{phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content mt-2 mt-lg-0">
                                <Link href={`mailto:${email}`}>
                                    <a className="btn btn-outline-danger" >contact vendor</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default VendorProfile
