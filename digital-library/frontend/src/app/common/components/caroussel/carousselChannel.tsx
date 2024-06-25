"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDocument from "../cardDocument/CardDocument";
import CardChannel from "../cardChannel/CardChannel";

// import ReportDefaultImage from "../../../../../../../public/images/reportDefaultImage.png";
// import ReportCard from "../report-card/ReportCard";

const CarouselChannel: React.FC<{
  data: { name: string; id: number }[];
}> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //     }}
    //   >
    //     <div className=" mt-6 h-2 rounded-full w-6"></div>
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 908,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {data?.map((item) => (
          <div className="px-2">
            <CardChannel text={item.name} id={item.id.toString()} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselChannel;
