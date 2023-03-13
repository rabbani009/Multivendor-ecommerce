import { Row } from "react-bootstrap";

import ListItem from "../../wishlist/list-item";

const WishListContent = (props) => {
  const { products } = props;

  // If doesn't have item...
  if (products.length < 1) return <div>No item found!</div>;

  return (
    <div className="wish-list-content page-content px-4 py-2">
      <Row className="flex-column">
        {products &&
          products.map((product) => {
            const { id, title, image, quantity, productId, skuId, productPrice } = product;

            return ( 
              <ListItem
                key={id}
                id={id}
                title={title}
                image={image}
                quantity={quantity}
                productId={productId}
                skuId={skuId}
                price={productPrice}
              />
            );
          })}
      </Row>
    </div>
  );
};

export default WishListContent;
