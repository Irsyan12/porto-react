const CardPortofolio = (props) => {
  const { image, id } = props;
  return (
    <img
      src={image}
      alt="portofolio"
      className="w-60 h-30 m-2 md:m-3 rounded-lg shadow-lg object-cover transition-transform hover:scale-125 lg:hover:scale-110 "
      id={id}
    />
  );
};


export default CardPortofolio;