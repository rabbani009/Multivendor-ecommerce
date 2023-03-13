const ProductDescription = (props) => {
  const { description } = props;

  // Generate description
  const genShortDesc = description.slice(0, 86);
  return (
    <div className="product-description-wrapper pt-2">
        <div dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  );
};

export default ProductDescription;
