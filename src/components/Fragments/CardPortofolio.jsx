const CardPortofolio = (props) => {
  const { image, id } = props;
  return (
    <img
      src={image}
      alt="portofolio"
      className="w-60 h-30 m-2 md:m-3 rounded-lg shadow-lg transition-transform hover:scale-105"
      id={id}
    />
  );
};


export default CardPortofolio;