"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCardDocument from "../newCardDocument/NewCardDocument";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import Link from "next/link";
import AnimateClick from "../animateClick/AnimateClick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setResponseData } from "@/redux/features/auth-slice";
import axios from "axios";
import { config } from "@/utils";
import { fetchGroupItems } from "@/funtions/zoteroApi";

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

const api_key = 'ljJwZLSkS26ymt6DFd5D2Blc'
const user_id = '14487670'

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


const FilterdCarousel: React.FC<{
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
  }[],
  path:string;
}> = ({ data, path }) => {
  const { arrayDoc } = useAddDocument();
  const array = [...arrayDoc, ...data];
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<any>([])
  const dispatch = useDispatch();

  const { responseData } = useSelector((item: RootState) => item.setResponseData)
  console.log(path, 'cathegoryName')

  useEffect(() => {
    if (responseData && responseData.length > 0) return;
    setLoading(true)
    async function fetchData() {
      try {
        const url = `${config.ssoUrl}/api/items/5577831`;
        const res = await axios.get(url);
        dispatch(setResponseData(res.data));
      } catch (error: any) {
        setLoading(false);
        throw Error("Data Not Fetched", error)
      }
    }

    fetchData();
    // fetchData()
  }, [dispatch])


  const filteredCathegories = responseData.filter((item: any) => item.cathegory === path);

  console.log(filteredCathegories.length, 'filteredCaths')

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

  return (
    <div className="w-full">
      {responseData.length == 0 ? <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div> : filteredCathegories.length == 0 ? <div>
        <h1 className="px-4 mt-5"><span className="text-black text-sm">This Cathegory Does not Exist Yet, You Can </span><Link href={'/add-document'} className="text-blue-700 hover:border-b-1 border-b-blue-700" >Create One</Link></h1>
      </div> :
      <div className="ml-4">
        <Slider {...settings}>
          {filteredCathegories !== null && filteredCathegories.map((item: any) => {
            return (
              <Link href={`/en/digital-library/${item.key}`} key={item.key} className="w-full pl-2">
                <AnimateClick>
                  <div className="" key={item.key}>
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
      </div>
      }
    </div>
  );
};

export default FilterdCarousel;
