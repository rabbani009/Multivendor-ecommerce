import Link from "next/link";

const NavItem = (props) => {
  const { slug, name } = props;
  return (
    <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/${slug}`}>
      <a className="nav-link p-1">{name}</a>
    </Link>
  );
};

export default NavItem;
