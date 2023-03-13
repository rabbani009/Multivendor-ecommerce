import Link from "next/link";
import { Nav} from "react-bootstrap";
const SocialItem =  (props) => {
    const {link, icon} = props

    return (
        <Nav.Item as="li">
            <Link href={link}>
                <a className="nav-link" target="_blank">{icon}</a>
            </Link>
        </Nav.Item>
    )
}

export default SocialItem