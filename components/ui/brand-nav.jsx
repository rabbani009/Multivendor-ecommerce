import React, { Fragment } from "react";

import BrandNavItem from "./brand-nav-item";

const BrandNav = ({ brands, handleBrand }) => {

    if (brands?.length === 0) return <p>No brands!</p>

    return (
        <Fragment>
            {
                brands &&
                brands.map((brand) => {
                    const { brand_name, id } = brand
                    return <BrandNavItem key={id} id={id} brand_name={brand_name} handleBrand={handleBrand}/>
                })
            }
        </Fragment>
    )
}

export default BrandNav