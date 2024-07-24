'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../../../public/images/overview.svg";
import arrowIcon from "../../../../../../public/images/arrow-left (2).svg";
import CardChannel from "@/app/common/components/cardChannel/CardChannel";
import Carousel from "@/app/common/components/caroussel/Carousel";
import CarouselChannel from "@/app/common/components/caroussel/carousselChannel";
import fetchFile from "@/app/api/fetchFiles";
import FileViewer from "@/app/common/components/pdf-viewer/Viewer";
import PdfViewer from "@/app/common/components/pdf-viewer/PdfViewer";
import LibraryItem from "@/app/common/components/LibraryItem/LibraryItem01";
import { useRouter } from "next/navigation";
import AnimateClick from "@/app/common/components/animateClick/AnimateClick";

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

const Home: React.FC = () => {
  const pathname = usePathname();
  const api_key = process.env.NEXT_PUBLIC_ZOTERO_API_KEY;
  const group_id = process.env.NEXT_PUBLIC_ZOTERO_GROUP_ID;
  const id = pathname.split('/').pop();
  const [fileUrl, setFileUrl] = useState<string>('');
  const [fileData, setFileData] = useState<{ data: Uint8Array } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  const zoteroConfig = {
    zoteroBaseUrl: 'https://api.zotero.org',
    zoteroGroupId: group_id,
    zoteroFileId: id,
    zoteroApiKey: api_key,
  };

  useEffect(() => {
    const fetchPdfUrl = async () => {
      
      setLoading(true);
      try {
        const response = await axios.post('/api/file', zoteroConfig);
        const { filePath, fileData } = response.data;
        setFileUrl(filePath.trim());
        setFileData({ data: new Uint8Array(fileData.data) });
      } catch (error) {
        console.error('Error fetching PDF:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfUrl();
  }, []);

  return (
    <div className="w-full h-full p-2">
      <Link href="/en/digital-library" className="flex justify-start items-center gap-2 text-[#015E44] pl-2 mb-5">
        <Image src={arrowIcon} alt="Back" />
      </Link>
      <span>Back To Documents</span>

      <div className="flex gap-x-10">
        <div className="w-3/5">
          {fileData ? (
            <FileViewer pdfUrl={fileUrl} fileData={fileData} />
          ) : (
            <div className="bg-white h-[70vh] flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
        <LibraryItem />
      </div>

      <div className="w-full flex justify-between items-center mb-5 px-1 mt-5">
        <p className="font-bold text-lg">Trending</p>
        <AnimateClick>
          <p className="font-bold border-b-3 border-[green] text-[green] cursor-pointer" onClick={() => router.push('/en/')}>
            See More
          </p>
        </AnimateClick>
      </div>

      <div className="w-full overflow-hidden mt-5">
        <Carousel data={arraytest} />
      </div>
    </div>
  );
};

export default Home;
