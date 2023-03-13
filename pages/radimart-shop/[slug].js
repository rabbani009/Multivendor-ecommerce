import React from "react";

import VendorProfile from '../../components/vendor/vendor-profile';
import ProductsPage from "../../components/products/products-page";
import NotFoundPage from "../404";

// import VendorProducts from '../../components/vendor/vendor-products';

import { getShop } from '../../lib/api/vendor';
import { isEmpty } from '../../lib/helpers';

export async function getServerSideProps(ctx) {
    // Get query
    const { query } = ctx;
    const { slug, page } = query

    // Define the data
    let radimartShop = {}

    // Api call
    const radimartShopRes = await getShop(slug, page)

    // Check api status
    if (radimartShopRes?.status === 200) {
        const {data, success} = radimartShopRes?.data
        if (success) {
            // Update radimart shop data
            radimartShop = data
        }
    } else {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            radimartShop: radimartShop || {}
        },
        // notFound: true,
    }
}

const ShopPage = ({ radimartShop }) => {
    // if shop is empty then return not found
    if (isEmpty(radimartShop)) return <NotFoundPage/>

    const { data, brand, category, productCount } = radimartShop

    return (
        <div className="shop-page page">
            <VendorProfile name={data?.shopName} logo={data.shopLogo} bg_img={data?.bannerImage} email={data?.email} address={data?.address} phone={data?.mobileNumber}/>
            <ProductsPage rootSlug="shop" products={data?.allproduct} brands={brand} categories={category} count={productCount}/>
        </div>
    )
}

export default ShopPage
