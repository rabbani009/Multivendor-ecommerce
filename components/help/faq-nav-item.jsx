import { useState } from "react";
import { useRouter } from 'next/router'
import { Accordion } from "react-bootstrap";

const FaqNavItem = ({id, category, slug, subCategories}) => {
    const router = useRouter()
    const [active, setActive] = useState(0)

    // console.log('check router...', router)

    const handleRouter = (slug, sub_slug, index) => {
        // console.log('check router...', router)
        // console.log(`slug: ${slug}, sub_slug: ${sub_slug}, index: ${index}`)
        // router.push({
        //     pathname: router.pathname,
        //     query: 'xyz'
        // })
        // console.log(`${router.asPath}`)
        // console.log(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}${router.pathname}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`)
        // if (index) setActive(index)
        setActive(index)
        // router.replace(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/help/${router.query.slug}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`);
        // console.log(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/help/${router.query.slug}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`);
        // if (router?.query?.slug && router.query.slug) {
        //     console.log(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/help/${router.query.slug}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`);
        //     router.replace(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/help/${router.query.slug}?${(router.query = 'cat')}=${slug}&subCat=${sub_slug}`)
        // }

        router.push({
            pathname: router?.pathname,
            query: {
                slug: router?.query?.slug,
                cat: slug,
                subCat: sub_slug
            },
        })
    }

    // console.log(`active: ${active}`)
    // console.log(router)

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header as="h4" onClick={(e) => handleRouter(slug, subCategories[0]?.id, 0)}>{category}</Accordion.Header>
            {
                subCategories.map((item, index) => {
                    const {id, categoryName, categoryUniqueId, parentCategoryId} = item
                    // console.log('check item in categoryUniqueId...', categoryUniqueId)

                    return (
                        <Accordion.Body className={index === active ? 'active' : ''} key={id} onClick={() => handleRouter(slug, id, index)}>
                            {categoryName}
                        </Accordion.Body>
                    )
                })
            }
        </Accordion.Item>
    )
}

export default FaqNavItem