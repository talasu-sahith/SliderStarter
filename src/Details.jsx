const Details = ({ list, activeId }) => {
  const { id, image, name, quote, title } = list[activeId];
  return (
    <article className="slide">
      <img src={image} className="person-img"></img>
      <div>
        {" "}
        <h3 className="name">{name}</h3>
        <h5 className="title">{title}</h5>
        <p className="text">{quote}</p>
      </div>
    </article>
  );
};
export default Details;
