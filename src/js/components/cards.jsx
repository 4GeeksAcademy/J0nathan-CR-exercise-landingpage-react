const Cards = ({ title, description, image, buttonLabel, buttonUrl }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href={buttonUrl} className="btn btn-primary w-100">{buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;