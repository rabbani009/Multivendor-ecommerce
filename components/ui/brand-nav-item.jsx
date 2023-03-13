import React from "react";
import { useRouter } from "next/router";

const BrandNavItem = ({ id, brand_name, handleBrand}) => {
    const router = useRouter()

    return (
        <div>
            <label className="d-flex align-items-center">
                <input checked={parseInt(router.query?.brand) === id} name="brand" onChange={(e) => handleBrand(e.target.value)} type="radio" value={id} className="me-2"/>
                {brand_name}
            </label>
        </div>
    )
}

export default BrandNavItem