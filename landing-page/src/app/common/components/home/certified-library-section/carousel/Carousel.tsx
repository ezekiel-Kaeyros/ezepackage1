'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReportDefaultImage from '../../../../../../../public/images/reportDefaultImage.png';
import ReportCard from '../report-card/ReportCard';



const Carousel: React.FC<{ section6: any }> = ({ section6 }) => {
  const reports = [
    {
      id: 1,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },
    {
      id: 2,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },
    {
      id: 3,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },

    {
      id: 4,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },

    {
      id: 5,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },
    {
      id: 6,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },
    {
      id: 7,
      title: section6.title1,
      subTitle: section6.description,
      image: ReportDefaultImage,
      description: section6.p,
      href: section6.link,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '30px',
          color: 'blue',
        }}
      >
        <div className=" mt-6 h-2 rounded-full w-6"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
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
    <div className=" lg:w-[70vw] xl:w-[67vw] md:w-[80vw] w-screen px-8 lg:-mr-48">
      <Slider {...settings}>
        {reports?.map((report) => (
          <ReportCard
            key={report?.id}
            title={report?.title}
            subTitle={report?.subTitle}
            description={report?.description}
            image={report?.image}
            href={report?.href}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
