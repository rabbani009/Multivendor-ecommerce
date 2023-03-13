import {Container, Row} from "react-bootstrap";
import {getAllCategory} from "../../lib/api/category";
import CategoryItem from "../../components/category/category-item";

export async function getServerSideProps() {
    let categoriesData = {}
    const allCategoriesRes = await getAllCategory()
    if (allCategoriesRes.status === 200) {
        const { success, data } = allCategoriesRes.data;
        if (success) {
            categoriesData = data
        }
    }

    return {
        props: {
            categoriesData
        }
    }
}

const CategoriesPage = ({categoriesData}) => {
    const {data, count} = categoriesData

    return (
        <section className="categories-section categories py-2 py-md-3">
            <Container>
                <Row className="g-0 box-shadow-lg">

                    <div className="categories-inner rounded-3 p-2 p-md-3">

                        <div className="section-title">
                            <h4 className="mb-0 d-flex align-items-center text-uppercase">
                                {/*<img*/}
                                {/*    src="https://api.zdrop.com.bd/public/storage/home/icon/top-selection.svg"*/}
                                {/*    alt="icon"*/}
                                {/*/>{" "}*/}
                                {"All Categories"}
                            </h4>
                        </div>

                        <div className="categories-wrapper p-2 p-md-3">
                            <Container className="categories-item-wrapper">
                                <Row>
                                    {
                                        data.data.map((category, index) => <CategoryItem key={index} category={category} />)
                                    }
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>


        // <section className="categories-sections categories">
        //     <Container>
        //         <Row>
        //             {
        //                 categories && categories.map((category, index) => <CategoryItem key={index} category={category} />)
        //             }
        //         </Row>
        //     </Container>
        // </section>
    )
}

export default CategoriesPage