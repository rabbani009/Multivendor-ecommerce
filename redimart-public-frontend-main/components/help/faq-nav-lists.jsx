import {Accordion} from "react-bootstrap";
import FaqNavItem from "./faq-nav-item";

import faqNav from "../../lib/utils/faq-nav";

const FaqNavLists = ({ nav }) => {

    if (nav?.length === 0) return;

    return (
        <Accordion defaultActiveKey={1} flush>
            {
                nav.map(( item ) => {
                    const {categoryName, id, subCategories} = item
                    return <FaqNavItem key={id} id={id} category={categoryName} slug={id} subCategories={subCategories}/>
                })
            }
            {/*<Accordion.Item eventKey="0">*/}
            {/*    <Accordion.Header>Item #1</Accordion.Header>*/}
            {/*    <Accordion.Body>*/}
            {/*        test1*/}
            {/*    </Accordion.Body>*/}
            {/*</Accordion.Item>*/}
            {/*<Accordion.Item eventKey="1">*/}
            {/*    <Accordion.Header>Item #2</Accordion.Header>*/}
            {/*    <Accordion.Body>*/}
            {/*        test2*/}
            {/*    </Accordion.Body>*/}
            {/*</Accordion.Item>*/}
        </Accordion>
    )
}

export default FaqNavLists