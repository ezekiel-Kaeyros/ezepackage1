'use client'
import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../../../public/images/overview.svg";
import arrowIcon from "../../../../../../public/images/arrow-left (2).svg";
import { Italiana } from "next/font/google";
import Image from "next/image";
import CardChannel from "@/app/common/components/cardChannel/CardChannel";
import Carousel from "@/app/common/components/caroussel/Carousel";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CarouselChannel from "@/app/common/components/caroussel/carousselChannel";
import { useEffect, useState } from "react";
// import { useToggleSidebar } from "@/app/hooks/useToggleSidebar";
// import { toggleFunc2 } from "@/redux/features/auth-slice"; should uncomment
import fetchFile from "@/app/api/fetchFiles";
import axios from "axios";
import FileViewer from "@/app/common/components/pdf-viewer/Viewer";
import PdfViewer from "@/app/common/components/pdf-viewer/PdfViewer";
import LibraryItem from "@/app/common/components/LibraryItem/LibraryItem01";


const arraytest = [
  { num: 3, save: true },

  { num: 2, save: false, img: cover2 },

  { num: 2, save: false },
  { num: 3, save: false },
  { num: 2, save: true },
  { num: 2, save: false },
  { num: 2, save: false, img: cover2 },

  { num: 1, save: true },

  { num: 2, save: false },

  { num: 2, save: false, img: cover2 },

  { num: 7, save: true },

  { num: 2, save: false },
];
const arraytest1 = [
  { num: 3, save: true },

  { num: 2, save: false, img: cover2 },

  { num: 2, save: false },
  { num: 3, save: false },

  { num: 2, save: false, img: cover2 },

  { num: 7, save: true },

  { num: 2, save: false },
];
const channelarray = [
  { name: "health", id: 1 },
  { name: "Mines", id: 2 },
  { name: "Ict", id: 3 },
  { name: "Agro Food Sciences", id: 4 },
  { name: "Energie", id: 5 },
  { name: "Social Xciences", id: 6 },
  { name: "Data Analytics", id: 7 },
];
const Home = () => {
  // const { dispatch } = useToggleSidebar();
  const pathname = usePathname();
  const api_key = process.env.NEXT_PUBLIC_ZOTERO_API_KEY;
  const group_id = process.env.NEXT_PUBLIC_ZOTERO_GROUP_ID;
  const id: any = pathname.split('/').pop();
  const [fileUrl, setFileUrl] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState(false);

  // console.log(id, 'myId')


  // const name = channelarray.find(
  //   (item) => item.id.toString() == pathname.split("/")[pathname.split("/").length - 1]
  // )?.name;  

  //   const newArrayChannel = channelarray.filter(
  //     (item) =>
  //       item.id.toString() !=
  //       pathname.split("/")[pathname.split("/").length - 1]
  //   );
  //  useEffect(() => {
  //    dispatch(toggleFunc2(false));
  //  }, []); 

  const zoteroConfig = {
    zoteroBaseUrl: 'https://api.zotero.org',
    zoteroGroupId: group_id,
    zoteroFileId: id,
    zoteroApiKey: api_key,
  };

  useEffect(() => {
    async function fetchPdfUrl() {
      setLoading(true)
      try {
        const response = await axios.post('/api/file', zoteroConfig);
        console.log(response, 'i am getting here')
        // console.log(response, 'response')
        const { filePath } = response.data;
        console.log(filePath, 'filePath')
        setFileUrl(filePath.trim());
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdfUrl();
  }, []);


  console.log(fileUrl, 'fileurl')

  return (
    <div
      className="w-full h-full  p-2 "
    // onClick={() => {
    //   dispatch(toggleFunc2(false));
    // }}
    >
      <Link
        href={"/en/digital-library"}
        className="flex justify-start items-center gap-2 text-[#015E44] pl-2 mb-5"
      >
        <Image src={arrowIcon} alt="" />
        <span>Back To Documents</span>
      </Link>

      {/* <div style={{ height: '100vh', width: '100%' }} className="border border-green-500">
        <iframe
          src="/Downloads/random.pdf"
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
        />
      </div> */}
      
      
      <div className="flex gap-x-10">
        <div className="w-3/5">
          <FileViewer pdfUrl={fileUrl}/>
          {/* <iframe
          src="Downloads/random.pdf"
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
        /> */}
        </div>
        <LibraryItem />
      </div>
      <div className="w-full flex justify-between items-center mb-5 px-1 mt-5">
        <p className="font-bold text-lg">Trending</p>
        <p className=" font-bold border-b-3 border-[green] text-[green]">
          See More
        </p>
      </div>
      <div className="w-full overflow-hidden mt-5">
        <Carousel data={arraytest} />
      </div>
      {/* <div className="w-full  pb-14">
        <Carousel data={arraytest1} />
      </div> */}

      {/* <p className="font-bold text-xl">Other Categories</p>
      <div className="w-full  pb-14">
        <CarouselChannel data={newArrayChannel} />
      </div> */}
    </div>
  );
};
export default Home;













// import React, { useEffect, useState } from 'react';
// import { Item } from './LibraryItem';
// import { usePathname } from 'next/navigation';
// // import { fetchGroupItems, fetchGroups } from "../../";

// interface ItemIdProps {
//     itemKey: string;
// }

// function LibraryItem() {
//     const pathname = usePathname();
//     const itemKey: any = pathname.split('/').pop();
//     const [loading, setLoading] = useState(false);
//     const [pdfs, setPdfs] = useState<Item[] | any>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const groups = await fetchGroups();
//                 const allPdfUrls: Item[] = [];
//                 for (const group of groups) {
//                     const groupPdfUrls: Item[] | any = await fetchGroupItems(group.id);
//                     allPdfUrls.push(...groupPdfUrls);
//                 }
//                 setLoading(false);
//                 setPdfs(allPdfUrls);
//             } catch (error) {
//                 setLoading(false);
//                 console.error('Error fetching Zotero data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const findItemByKey = (items: Item[], key: string): Item | undefined => {
//         return items.find(item => item.key === key);
//     };

//     const matchedItem = findItemByKey(pdfs, itemKey);

//     console.log(itemKey, 'itemKey');
//     console.log(matchedItem, 'matchedItem');
//     console.log(pdfs, 'pdfs');

//     return (
//         <div>LibraryItem</div>
//     );
// }

// export default LibraryItem;
