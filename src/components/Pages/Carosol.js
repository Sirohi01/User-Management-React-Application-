import React from "react";

const Carasol = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={'/image.png'} // Replace with your image URL
              alt="Image 1"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={'3bb00cbe95127f2fe36c85a33cfe69f4e5911234.jpg'} // Replace with your image URL
              alt="Image 2"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={'20210121_133325.jpg'} // Replace with your image URL
              alt="Image 3"
              className="d-block w-100"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Carasol;
