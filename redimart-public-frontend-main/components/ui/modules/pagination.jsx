import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({links, handler}) => {

    return (
        <Pagination className='justify-content-end py-2'>
            {
                links.map((link, index) => {
                    const {label, active} = link
                    
                    let genName = (name) => name === "Next &raquo;" ? name.replace(/&raquo;/g, "") : name.replace(/&laquo;/g, "")
                    return (
                        <Pagination.Item active={active} key={index} onClick={() => handler(label)}>
                            {genName(label)}                            
                        </Pagination.Item>
                    )
                })
            }
            {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item> */}
        </Pagination>
    )
}

export default MyPagination