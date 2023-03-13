import Link from "next/link";
import Image from "next/image";
import brandImg from "../../../../assets/img/radimart-logo.png";

const BrandNav = () => {
  return (
    <Link className="navbar-brand" href="/">
      <a className="brand-img-wrapper d-flex">
        <Image className="brand-img" src={brandImg} width={144} height={40} alt="Brand image" />
      </a>
    </Link>
  );
};

export default BrandNav;
