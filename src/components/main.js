import React, { useContext } from "react";
// import TrackVisibility from "react-on-screen";
import VisibilitySensor from "react-visibility-sensor";

const Main = () => {
  return (
    <React.Fragment>
      <div className="schoolslideshow_container">
        <div className="schoolslideshow">
          <div className="schoolslideshow_content">
            <div className="slideup_container">
              <h1>Welcome to Counselor University of Science and Technology</h1>
            </div>

            <p>
              At Counselor University of Science and Technology, our goal is to
              provide our students with an exceptional learning experience that
              equips them with the knowledge and skills they need to succeed in
              their careers.
            </p>
          </div>
        </div>
      </div>

      {/* carry this carousel to about page */}

      <div className="aboutus_container">
        <div className="sizing gradient">
          <div className="slideup_container">
            <h1>About Us</h1>
          </div>

          <p>
            Counselor University of Science and Technology is a private,
            non-profit institution located in the heart of the city. Our mission
            is to advance knowledge and educate students in science, technology,
            and other areas of scholarship to best serve society.
          </p>
        </div>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="sizing gradient about2">
              <div className="slideup_container col-md-4">
                <h2>Our History</h2>
                <p>
                  Founded in 2020, Counselor University of Science and
                  Technology has since been committed to providing students with
                  a quality education with strong foundations in science and
                  technology.
                </p>
              </div>
              <div className="slideup_container col-md-4">
                <h2>Our Values</h2>
                <ul>
                  <li>Diversity and Inclusion</li>
                  <li>Community Engagement</li>
                  <li>Academic Rigor</li>
                </ul>
              </div>
              <div className="slideup_container col-md-4">
                <h2>Our Campus</h2>
                <p>
                  Our state-of-the-art campus is equipped with the latest
                  technology and resources, providing students with the perfect
                  environment to learn and thrive
                </p>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="sizing info-container">
            <div className="info slideup_container col-md-4">
              <h1>#1</h1>

              <p>best in Nigeria</p>
              <p>Source:Soon!!!</p>
            </div>
            <div className="info slideup_container col-md-4">
              <h1>#1</h1>

              <p>best in Africa</p>
              <p>Source:Soon!!!</p>
            </div>

            <div className="info slideup_container  col-md-4">
              <a href="/">
                <h1 style={{ color: "#ff0000c2" }}>Register Now!</h1>
              </a>
            </div>
          </div>
        )}
      </VisibilitySensor>

      {/* <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="above-and-beyond-container">
            <div className={isVisible ? "above-and-beyond" : "blur"}>
              <h1>
                <span className="one">GO </span>
                <span className="two">ABOVE </span>
                <span className="three">AND </span>
              </h1>
              <h1 className="beyond">Beyond!</h1>
              <img
                src={require("../pictures/world2.png")}
                alt="world"
                className="world"
              />
              <img
                src={require("../pictures/astronaut2.png")}
                alt="astronaut"
                className="astronaut"
              />
            </div>
          </div>
        )}
      </VisibilitySensor> */}

      {/* Explore!!! */}

      <div className="sizing gradient ">
        <div className="slideup_container">
          <h1>Our Academic Programs</h1>
        </div>

        <p>
          Here at Counselor University of Science and Technology, we offer a
          wide range of undergraduate, graduate, and doctoral programs in
          science, technology, engineering, and mathematics.
        </p>
        <h4>Choose your area of interest</h4>
        <div className="explore_major_arror_div">
          <h4>
            <a href="/">Explore Majors & Degrees </a>
          </h4>
          <img
            src={require("../pictures/right_arrow.gif")}
            alt="rightarrow"
            className="img_grow"
          ></img>
        </div>
      </div>

      <div className="explore-majors_container">
        <div className="sizing explore-majors">
          <div className="degree_majors col-md-5">
            <div className="gradient">
              <h4>Master of Science in Electrical Engineering</h4>
            </div>

            <p>
              Refine your skills in electrical engineering to advance your
              career in an innovative and rapidly-evolving field.
            </p>
          </div>
          <div className="degree_majors col-md-5">
            <div className="gradient">
              <h4>Bachelor of Science in Computer Science</h4>
            </div>
            <p>
              Explore theories and principles of computer science, programming,
              and data structures in our undergraduate program.
            </p>
          </div>
          <div className="degree_majors col-md-5">
            <div className="gradient">
              <h4>Doctor of Philosophy in Computational Biology</h4>
            </div>
            <p>
              Prepare for a career in research with our interdisciplinary PhD
              program at the intersection of computer science and biology.
            </p>
          </div>
          <div className="degree_majors col-md-5">
            <div className="gradient">
              <h4>Bachelor of Science in Mathematics</h4>
            </div>
            <p>
              Develop both theory and application skills in mathematics in order
              to land a career in finance, data analysis, and much more.
            </p>
          </div>
        </div>
      </div>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="sizing gradient admission">
            <div className="slideup_container">
              <h2>Admission</h2>
            </div>

            <p>
              Ready to join the Counselor University of Science and Technology
              family?
            </p>
            <ul>
              <li>Learn more about our requirements and deadlines</li>
              <li>Explore financial aid and scholarships options</li>
              <li>
                Contact our admissions office with any questions or concerns
              </li>
            </ul>

            <div className="admission_container">
              <div className="admission_item">
                <img
                  src={require("../pictures/deadline.jpg")}
                  alt="deadline"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />
                <h4>Requirements and Deadlines</h4>
                <p>
                  Find out what you need to do to apply to Counselor University
                  of Science and Technology, including important deadlines.
                </p>
              </div>

              <div className="admission_item">
                <img
                  src={require("../pictures/scholarship.jpg")}
                  alt="scholarship"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />
                <h4>Financial Aid and Scholarships</h4>
                <p>
                  We want to make sure our students have access to the highest
                  quality education and resources, which is why we offer
                  financial support and scholarships for those in need.
                </p>
              </div>
              <div className="admission_item">
                <img
                  src={require("../pictures/admission.jpg")}
                  alt="admission"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />

                <h4>Contact Admissions</h4>
                <p>
                  We're here to help you throughout the admissions process, from
                  answering your questions to guiding you through the
                  application process. Contact us today.
                </p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="sizing gradient campus_life">
            <div className="slideup_container">
              <h2>Campus Life</h2>
            </div>

            <p>
              From the classroom to extracurriculars, Counselor University of
              Science and Technology offers a vibrant and active campus
              experience.
            </p>
            <div className="campus_life_container">
              <div className="campus_life_item">
                <h4>Clubs and Organizations</h4>
                <p>
                  Join one of our many student clubs, or start one of your own,
                  to connect with other students who share your interests and
                  passions.
                </p>
              </div>
              <div className="campus_life_item">
                <h4>Campus Events</h4>
                <p>
                  Our campus is constantly buzzing with activity and events,
                  from guest lectures to social gatherings. Don't miss out!
                </p>
              </div>
              <div className="campus_life_item">
                <h4>Campus Facilities</h4>
                <p>
                  Our campus features modern and well-equipped facilities for
                  both research and leisure, including student centers,
                  libraries, gyms, and much more.
                </p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="sizing gradient admission">
            <div className="slideup_container">
              <h2>Career Services</h2>
            </div>

            <p>
              We are committed to helping our students achieve their career
              goals. We offer resources and support to help students identify
              their strengths, build their resumes, and connect with potential
              employers.
            </p>

            <div
              className={
                isVisible ? "admission_container" : " admission_container blur"
              }
            >
              <div className="admission_item slideup_container">
                <img
                  src={require("../pictures/careerfair.jpg")}
                  alt="careerfair"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />
                <h4>Career Fairs and Networking Events</h4>
                <p>
                  Join us for career fairs and networking events with top
                  industry professionals and companies.
                </p>
              </div>
              <div className="admission_item slideup_container">
                <img
                  src={require("../pictures/graduation.jpg")}
                  alt="graduation"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />
                <h4>Job Placement Services</h4>
                <p>
                  Our job placement services team is dedicated to helping you
                  identify and secure your dream job. Take advantage of
                  everything we have to offer, from resume reviews to interview
                  prep.
                </p>
              </div>
              <div className="admission_item slideup_container">
                <img
                  src={require("../pictures/handshake.jpg")}
                  alt="handshake"
                  className={isVisible ? "img_grow" : "img_grow blur"}
                />

                <h4>Student Internships</h4>
                <p>
                  We partner with leading companies to offer our students
                  opportunities for internships that provide real-world
                  experience and valuable networking opportunities.
                </p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>

      <div className="pathdesign"></div>

      <div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="slideup_container contact_us_container">
              <img
                src={require("../pictures/phonecall.jpg")}
                alt="phone call"
              />
              <div>
                <h1>Contact Us</h1>
                <p>Have questions or comments? Contact us!</p>
                <div className="contact_us_img">
                  <img
                    src={require("../pictures/whatsappp.png")}
                    alt="whatsapp"
                  />
                  <img src={require("../pictures/email.png")} alt="email" />
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </React.Fragment>
  );
};

export default Main;
