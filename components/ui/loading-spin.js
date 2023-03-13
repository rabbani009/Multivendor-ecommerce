const LoadingSpin = () => {
  return (
    <div className="spin-wrapper d-flex align-items-center justify-content-center">
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default LoadingSpin;
