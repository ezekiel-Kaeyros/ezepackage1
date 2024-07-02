"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDocument from "../cardDocument/CardDocument";
import NewCardDocument from "../newCardDocument/NewCardDocument";
import { useAddDocument } from "@/app/hooks/useAddDocument";
// import { fetchGroupItems, fetchGroups } from "@/functions/zoteroApi";
import { fetchGroupItems, fetchGroups } from "@/funtions/zoteroApi";
import coverPhoto from '../../../../../public/images/coverphoto.svg';

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
    username:string;
    name:string;
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
  const { arrayDoc } = useAddDocument();
  const array = [...arrayDoc, ...data];
  const [loading, setLoading] = useState(false)

  const [pdfUrls, setPdfUrls] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const groups = await fetchGroups()
        const allPdfUrls: string[] = []
        // console.log(groups, 'groups')
        for (const group of groups) {
          // console.log(group, 'this is my group')
          const groupPdfUrls: any = await fetchGroupItems(group.id)
          console.log(groupPdfUrls, 'pdfurl')
          allPdfUrls.push(...groupPdfUrls)
        }
        setLoading(false)
        setPdfUrls(allPdfUrls)
      } catch (error) {
        setLoading(false)
        console.error('Error fetching Zotero data:', error)
      }
    }

    fetchData()
  }, [])




  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
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
      {/* <Slider {...settings}>
        {arrayDoc.map((item) => (
          <div className="px-2">
            <NewCardDocument
              imgCover={item.url && item.url}
              description={item.description}
              title={item.name}
              categorie={item.type}
              id={item.id}
            />
          </div>
        ))}
      </Slider> */}

      {loading ? <div className="flex justify-center items-center">
  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
</div> : 
        <Slider {...settings}>
        {pdfUrls.length > 0 && pdfUrls.map((item: any, index) => (
            <div className="px-4" key={index}>
            {/* <Link href={item.pdfUrl} target="_blank">{item.pdfUrl}</Link> */}
            <NewCardDocument
                imgCover={coverPhoto}
                description={item.data.note}
                title={item.data.title}
                categorie={item.data.itemType}
                id={item.id}
                name={item.meta.createdByUser.name}
                url={item.pdfUrl}
              />
          </div>
          ))}
        </Slider>
      }
      {/* <p className="font-bold text-xl text-800-red">Hello there jimmy</p>
      {pdfUrls.length > 0 && pdfUrls.map((item: any, index) => (
          <div style={{ height: '300px' }} key={index}>
          <Link href={item.pdfUrl} target="_blank">{item.pdfUrl}</Link>
          <NewCardDocument
              imgCover={coverPhoto}
              description={item.data.note}
              title={item.data.title}
              categorie={item.data.itemType}
              id={item.id}
              name={item.meta.createdByUser.name}
              url={item.pdfUrl}
            />
        </div>
        ))} */}
    </div>
  );
};

export default Carousel;