import { ListGroup } from "react-bootstrap";

const SidebarNavItem = ({ active, activeId, handleCat, catId, catName}) => {

    return (
        <ListGroup.Item as={'li'} onClick={() => handleCat(catId, activeId)} variant="default" className={active === activeId ? "text-size-sm border-0 px-0 py-1 active" : "text-size-sm border-0 px-0 py-1"}>{ catName?.replace(/&amp;/g, "&") || '' }</ListGroup.Item>
    )
}

export default SidebarNavItem