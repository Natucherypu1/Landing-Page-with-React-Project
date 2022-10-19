import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = () => {
  return (
    
      <div className="card mx-auto">
        <div className="image-container" >
					<img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />

		</div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    
  );
};

export default Card;
