import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import { FaCaretSquareRight } from "react-icons/fa";

import SidebarNav from "./sidebar-nav";
import BrandNav from "./brand-nav";

const Filter = ({ noCat, categories, brands }) => {
    // console.log(`Check categories: `, categories)
    // console.log(`Check brands: `, brands)

    const router = useRouter()
    const [active, setActive] = useState(0)
    const [calCat, setCalCat] = useState(categories?.slice(0, 10) || [])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    // Handle category
    const handleCategory = (cat, activeId) => {
        // set active / Price zero when handle category
        setActive(activeId)
        setMinPrice(0)
        setMaxPrice(0)

        // Change router
        router.push({
            pathname: router.pathname,
            query: {
                slug: router.query?.slug,
                cat: cat
            }
        })
    }

    // Handle checkout
    const handleCheckOut = (value) => {
        // Price zero when handle category
        setMinPrice(0)
        setMaxPrice(0)

        // Change router
        router.push({
            pathname: router.pathname,
            query: {
                slug: router.query?.slug,
                cat: router.query?.cat,
                brand: value
            }
        })
    }

    // Handle price
    const handlePrice = () => {
        // Calculate min and max price
        const conMinNum = Number(minPrice)
        const conMaxNum = Number(maxPrice)

        if (conMinNum === 0) {
            router.push({
                pathname: router.pathname,
                query: {
                    slug: router?.query?.slug,
                    cat: router?.query?.cat,
                    maxPrice: conMaxNum,
                }
            })
        } else if (conMaxNum > conMinNum) {
            router.push({
                pathname: router.pathname,
                query: {
                    ...router.query,
                    minPrice: conMinNum,
                    maxPrice: conMaxNum
                }
            })
        } else {
            router.push({
                pathname: router.pathname,
                query: {
                    slug: router?.query?.slug,
                    cat: router?.query?.cat,
                    minPrice: conMinNum,
                }
            })
        }
    }

    return (
        <div className="filtering bg-light rounded-2 py-3 px-4">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <h5>Categories</h5>

                    <SidebarNav noCat={noCat} active={active} categories={calCat} handleCategory={handleCategory}/>
                    {
                        noCat || categories && (
                            <div className="categories-cal-size">
                                {
                                    categories?.length === calCat?.length ? <span className="text-size-sm text-primary" onClick={() => setCalCat(categories.slice(0, 10))}>Less categories</span> : <span className="text-size-sm text-primary" onClick={() => setCalCat(categories)}>More categories</span>
                                }
                            </div>
                        )
                    }

                </div>

                <hr className="line mb-3" />

                <div className="form-group">
                    <h5>Brand</h5>
                    <BrandNav brands={brands} handleBrand={handleCheckOut}/>
                </div>

                <hr className="line mb-3" />

                <div className="form-group">
                    <h5 className="d-block">Price</h5>
                    <div className="d-flex">
                        <div className="">
                            <label htmlFor="minPrice" className="mb-0">Min</label>
                            <input type="number" name="minPrice" id="minPrice" min={0} value={minPrice} onChange={(e) => setMinPrice(e.currentTarget?.value)} className="form-control px-2" placeholder="min" />
                        </div>
                        <div className="px-2">
                            <label htmlFor="maxPrice" className="mb-0">Max</label>
                            <input type="number" name="maxPrice" id="maxPrice" min={0} value={maxPrice} onChange={(e) => setMaxPrice(e.currentTarget?.value)} className="form-control px-2" placeholder="max" />
                        </div>
                        <div className="align-self-end">
                            <Button onClick={() => handlePrice()} type="submit"><FaCaretSquareRight/></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter