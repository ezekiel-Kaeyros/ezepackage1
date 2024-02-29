'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReportDefaultImage from '../../../../../../../public/images/reportDefaultImage.png';
import ReportCard from '../report-card/ReportCard';

const reports = [
  {
    id: 1,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },
  {
    id: 2,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },
  {
    id: 3,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },

  {
    id: 4,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },

  {
    id: 5,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },
  {
    id: 6,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },
  {
    id: 7,
    title: 'Market Insights:',
    subTitle: 'Agricultural Products in Congo',
    image: ReportDefaultImage,
    description:
      'This reports covers the FIFA Women’s world Cup, one of the leading competitions in world soccer. This report focuses on participating teams and key information',
  },
];

const Carousel = () => {
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
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
