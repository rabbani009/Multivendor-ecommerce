import Link from "next/link"
import {Table, Button} from 'react-bootstrap'
import { humanReadableDate } from '../../lib/helpers/human-readable-date'

const OrderTable = (props) => {
    return (
        <Table hover size="sm">
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Items</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.orders.map((order, index) => {
                        const {orderId, created_at, status, orderPrice, id, totalItems} = order
                        
                        return (
                            <tr key={index}>
                                <td>#{orderId}</td>
                                <td>{humanReadableDate(created_at)}</td>
                                <td>{status}</td>
                                <td>৳ {orderPrice}</td>
                                <td>{ totalItems || 'N/A'} items</td>
                                <td>
                                    <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/order/${orderId}`}>
                                        <a>
                                            <Button size="sm" variant="outline-primary">View</Button>                                    
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                {/* <tr>
                    <td>#123</td>
                    <td>January 1, 2022</td>
                    <td>Complete</td>
                    <td>৳ 994.20</td>
                    <td><Button variant="warning" className="py-1 px-5">View</Button></td>
                </tr>
                <tr>
                    <td>#123</td>
                    <td>January 1, 2022</td>
                    <td>Complete</td>
                    <td>৳ 994.20</td>
                    <td><Button variant="warning" className="py-1 px-5">View</Button></td>
                </tr>
                <tr>
                    <td>#123</td>
                    <td>January 1, 2022</td>
                    <td>Complete</td>
                    <td>৳ 994.20</td>
                    <td><Button variant="warning" className="py-1 px-5">View</Button></td>
                </tr> */}
            </tbody>
        </Table>
    )
}

export default OrderTable