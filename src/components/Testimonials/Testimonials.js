import React, { useState } from "react";
import "./testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Blogs = [
  {
    id: 1,
    title: "jody ",
    content:
      "I recently had the occasion to hire Mr. Staubus for a hotly contested Guardianship matter.  Mr. Staubus brought a rare combination of effectiveness, reasonableness and understanding of the human element involved.  Mr. Staubus handled all things in a calm, highly competent, effective and reasonable way.  It could not have been as easy as he made it seem.  He's a credit to the Bar.",
  },
  {
    id: 2,
    title: "jody ",
    content:
      "I recently had the occasion to hire Mr. Staubus for a hotly contested Guardianship matter.  Mr. Staubus brought a rare combination of effectiveness, reasonableness and understanding of the human element involved.  Mr. Staubus handled all things in a calm, highly competent, effective and reasonable way.  It could not have been as easy as he made it seem.  He's a credit to the Bar.",
  },
  {
    id: 3,
    title: "jody ",
    content:
      "I recently had the occasion to hire Mr. Staubus for a hotly contested Guardianship matter.  Mr. Staubus brought a rare combination of effectiveness, reasonableness and understanding of the human element involved.  Mr. Staubus handled all things in a calm, highly competent, effective and reasonable way.  It could not have been as easy as he made it seem.  He's a credit to the Bar.",
  },
];

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <GrNext className="icon" />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrPrevious className="icon" />
      </button>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="blog" id="Blog">
        <div className="wrapper">
          <div className="heading-div">
            <h2>What They're Saying About Us </h2>
          </div>

          <div className="content">
            <div className="center-wrapper">
              <Slider {...settings}>
                {Blogs.map(({ id, title, content }) => (
                  <div className="box">
                    <p>{content}</p>
                    <h5>~{title}~</h5>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
