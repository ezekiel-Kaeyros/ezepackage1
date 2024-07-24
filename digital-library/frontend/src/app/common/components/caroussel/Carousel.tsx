"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCardDocument from "../newCardDocument/NewCardDocument";
import Link from "next/link";
import AnimateClick from "../animateClick/AnimateClick";
import { useItems } from "@/app/hooks/useItems";
import { useEffect } from "react";

interface Item {
  key: string;
  data: {
    title: string;
    attachments: {
      key: string;
      url: string;
      filename: string;
    }[];
  };
}

type ZoteroGroup = {
  id: number
}

type ZoteroItem = {
  key?: any;
  data?: {
    key?: any;
    contentType?: string;
    itemType?: string
  };
  links?: {
    enclosure?: {
      type?: string;
      href: string;
    };
  };
  library?: {
    name?: string | any;
  }
  meta: {
    createdByUser: {
      username: string;
      name: string;
    }
  }
};


const Carousel: React.FC<{
  data: {
    id?: string;
    categorie?: string;
    type?: string;
    author?: string;
    name?: string;
    description?: string;
    coverImage?: any;
    ibsn?: string;
    url?: string;
    num?: number;
    save?: boolean;
    img?: any;
    confidentiality?: string;
    // document: File | undefined;
    file?: File | undefined;
    urlFile?: string;
  }[];
}> = ({ data }) => {
  const { responseData, isLoading, setIsLoading, error } = useItems()

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 768,
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

  useEffect(() => {
    if (responseData && isLoading) setIsLoading(false)
  }, [responseData])

  return (
    <div className="w-full">
      {responseData?.length == 0 && isLoading && <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>}
      {error && <div> Error Loading items </div>}
      {responseData && <Slider {...settings}>
        {responseData.map((item: any) => {
          return (
            <Link href={`/en/digital-library/${item.key}`} key={item.key}>
              <AnimateClick>
                <div className="px-4" key={item.key}>
                  <NewCardDocument
                    imgCover={item.coverImage}
                    description={item.data.note}
                    title={item.data.title}
                    categorie={item.data.itemType}
                    id={item.id}
                    name={item.meta.createdByUser.name}
                    url={item.pdfUrl}
                    date={item.data.accessDate}
                    price={item.price}
                  />
                </div>
              </AnimateClick>
            </Link>
          )
        })}
      </Slider>
      }
    </div>
  );
};

export default Carousel;
