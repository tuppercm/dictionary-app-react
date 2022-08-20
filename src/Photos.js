import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props);

  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  title={`Photographer: ${photo.photographer}`}
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>

        <a
          className="photo-credit"
          href="https://www.pexels.com"
          target="_blank"
          rel="noreferrer"
        >
          Photos provided by Pexels
        </a>
      </section>
    );
  } else {
    return null;
  }
}
