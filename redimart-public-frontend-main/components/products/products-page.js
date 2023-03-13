import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumb, Button, Col, Container, Image, Row } from "react-bootstrap";
import ReactPaginate from 'react-paginate';

import Sort from "../category/Sort";
import ProductItem from "./product-item";
import Filter from "../ui/filter";
import MyPagination from "../ui/modules/pagination";

const ProductsPage = ({ noCat, rootSlug, products, brands, categories, count }) => {
  const router = useRouter();
  // console.log('check router...', router)

  const {data: _products, links } = products

  const handlePagination = (_page) => {
    router.push({
      query: {
        ...router.query,
        page: parseInt(_page), slug: router.query.slug
      }
    })
  }

  return (
    <div className="category-page">
      <section className="category-path-section">
        <Container>
          <div className="category-path-wrapper py-2">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/">
                  <a className="text-capitalize">home</a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={{
                  pathname: router?.pathname,
                  query: {
                    slug: router?.query?.slug
                  }
                }}>
                  <a className="text-capitalize disabled-link">{rootSlug}</a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={{
                  pathname: router?.pathname,
                  query: {
                    ...router?.query,
                    slug: router?.query?.slug
                  }
                }}>
                  <a className="text-capitalize">{router?.query?.slug}</a>
                </Link>
              </Breadcrumb.Item>
              {/*{router.pathname === "/search" && (*/}
              {/*  <Fragment>*/}
              {/*    <Breadcrumb.Item>*/}
              {/*      <Link href="#">*/}
              {/*        <a className="text-capitalize">{"Search"}</a>*/}
              {/*      </Link>*/}
              {/*    </Breadcrumb.Item>*/}
              {/*    <Breadcrumb.Item>*/}
              {/*      <Link href="#">*/}
              {/*        <a className="text-capitalize">{router.query.query}</a>*/}
              {/*      </Link>*/}
              {/*    </Breadcrumb.Item>*/}
              {/*  </Fragment>*/}
              {/*)}*/}
              {/*{rootSlug && (*/}
              {/*  // <div>test</div>*/}
              {/*    <Fragment>*/}
              {/*      <Breadcrumb.Item>*/}
              {/*        <Link*/}
              {/*            href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/${rootSlug}`}*/}
              {/*        >*/}
              {/*          <a className="text-capitalize">{rootSlug}</a>*/}
              {/*        </Link>*/}
              {/*      </Breadcrumb.Item>*/}
              {/*      <Breadcrumb.Item>*/}
              {/*        <Link*/}
              {/*            href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/${rootSlug}/${router.query.slug}`}*/}
              {/*        >*/}
              {/*          <a className="text-capitalize">{router.query.slug}</a>*/}
              {/*        </Link>*/}
              {/*      </Breadcrumb.Item>*/}
              {/*    </Fragment>*/}
              {/*)}*/}
            </Breadcrumb>
          </div>
        </Container>
      </section>

      <hr className="mb-2" />

      <section className="products-section py-3">
        <Container>
          <Row>
            <Col xs="3">
              <Filter noCat={noCat} categories={categories} brands={brands}/>
            </Col>
            <Col xs="9">
              <div className="products-wrapper rounded-3 p-3">
                <div className="section-title">
                  <h4 className="mb-0 text-center text-md-start text-uppercase">
                    {router?.query?.slug}
                  </h4>
                  <Sort productCount={count} name={router?.query?.slug} />
                </div>

                <Container className="product-item-wrapper py-3">
                  <Row>
                    {
                      _products &&
                        _products.map((productItem) => <ProductItem xl={3} key={productItem.id} product={productItem} /> )}
                  </Row>
                </Container>

                <div className="section-footer d-flex justify-content-end">
                  {/* <Button variant="outline-primary" type="button" className={parseInt(router.query.page) > count ? 'd-none' : null} onClick={()=> {
                  console.log('handle load more fired...', router.query.slug)
                  router.push({
                    query: {page: 1, slug: router.query.slug}
                  })
                  // router.push({
                  //   query: {page: parseInt(router.query.page) + 24, slug: router.query.slug}
                  // })
                    // router.push({
                    //   slug: 'new-arrivals',
                    //   query: 10
                    // })
                }}>
                  Load more
                </Button> */}
                  {/* <Button variant="outline-primary" type="button" className={ 24 > count ? 'd-none' : null} onClick={()=> {
                  router.push({
                    query: {page: router.query.page ? parseInt(router.query.page) + tempPage : tempPage +1, slug: router.query.slug}
                  })
                }}>
                  Load more
                </Button> */}

                  {/* // React bootstrap pagination */}
                  {/* <MyPagination handler={handlePagination} links={links}/> */}
                  {/* // react-papginate */}
                  {
                    links?.length >= 1 &&
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
                        onPageChange={(e) => handlePagination(e.selected+1)}
                        pageCount={links.length - 2}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductsPage;
