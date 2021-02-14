import React from "react";
import "./News.css";
import { Button } from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function News({ product }) {
  return (
    <Zoom>
      <div className="card">
        <div className="card-img">
          <img src={product.image} alt="Alisher Navoiy" className="img-fluid" />
        </div>
        <div className="card-title">
          <p>{product.title}</p>
        </div>
        <div className="card-body">
          <TextTruncate
            line={3}
            element="span"
            truncateText="..."
            text={product.description}
          />
        </div>
        <div className="card--footer">
          <div className="card-date">
            <span>08-02-2021 | 14:53 </span>
          </div>
          <div className="card-button">
            <Link to={`/post/${product._id}`}>
              <Button color="primary" variant="contained" className="button">
                batafsil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
