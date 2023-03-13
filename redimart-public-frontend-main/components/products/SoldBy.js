import Link from "next/link";

const SoldBy = (props) => {
  const {shopInfo} = props
  const {shopName, slug} = shopInfo

  return (
    <div className="module mt-3">
      <div className="module-header d-flex flex-column pt-2 px-3">
        <h6 className="mb-0">Sold by</h6>
        <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/radimart-shop/${slug}`}>
          <a className="text-decoration-none">{shopName}</a>
        </Link>
        <hr className="mt-3" />
      </div>
      <div className="module-body">
        <div className="module-body-item py-2 px-3">
          <div className="module-item-wrapper text-center">
            <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/radimart-shop/${slug}`}>
              <a className="text-info text-uppercase">GO TO STORE</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldBy;
