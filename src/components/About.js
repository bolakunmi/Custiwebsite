import React from "react";
import defaultimage from "../pictures/profile.png";

const About = () => {
  const boardmemebrs = [
    {
      name: "Segun Oluwayemi",
      Position: "Provost",
      description: "blah blah blah",
      ImageSource: require("../pictures/boardmembers/segun.png"),
    },
    {
      name: "Placeholder",
      Position: "Placeholder",
      description: "blah blah blah",
    },
    {
      name: "Placeholder",
      Position: "Placeholder",
      description: "blah blah blah",
    },

    {
      name: "Placeholder",
      Position: "Placeholder",
      description: "blah blah blah",
    },

    {
      name: "Placeholder",
      Position: "Placeholder",
      description: "blah blah blah",
    },

    {
      name: "Placeholder",
      Position: "Placeholder",
      description: "blah blah blah",
    },
  ];

  return (
    <React.Fragment>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../pictures/first.JPG")} alt="Image_3" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Councellor of CUSTI</h3>
              <p>Mr. Segun Oluwayemi</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require("../pictures/second.JPG")} alt="Image_3" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Members of the Board</h3>
              <p>The complete board members</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require("../pictures/third.JPG")} alt="Image_3" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Board meeting</h3>
              <p>Picture taken during the conception of CUSTI</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="sizing gradient">
        <h1>Meet the board members</h1>

        <div className="board_members_container sizing">
          {boardmemebrs.map((each) => {
            const { name, Position, ImageSource } = each;

            return (
              <div key={name.id} className="board_member">
                <img
                  src={ImageSource || defaultimage}
                  alt={name || "default image"}
                />
                <div>
                  <h3>{name}</h3>
                  <h4>{Position}</h4>
                  <p style={{ fontStyle: "italic" }}>"{each.description}"</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sizing">
        <h1 style={{textDecoration:"underline"}}> We can't wait to have you join us!</h1>
      </div>
    </React.Fragment>
  );
};

export default About;
