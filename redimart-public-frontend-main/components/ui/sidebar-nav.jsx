import React from "react";
import { ListGroup } from "react-bootstrap";

import SidebarNavItem from "./sidebar-nav-item";

const SidebarNav = ({ noCat, active, categories, handleCategory }) => {
    // console.log('check categories...', categories)

    if (noCat || categories.length === 0) return <p>No category!</p>

    return (
        <ListGroup className="filtering-base-nav border-0" as={'ul'}>
            {
                categories &&
                categories.map((item) => {
                    const { categoryId, categoryName, id } = item
                    return <SidebarNavItem active={active} key={categoryId} activeId={categoryId} catId={id} handleCat={handleCategory} catName={categoryName}/>
                })
            }
        </ListGroup>
    )
}

export default SidebarNav