import { fetchGroupItems, fetchGroups } from '@/funtions/zoteroApi';
import React, { useEffect, useState } from 'react';
import { Item } from '../LibraryItem';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import addIcon from "../../../../../../public/images/add-square.svg";
import Filter from './filterDocument/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setResponseData } from '@/redux/features/auth-slice';
import AnimateClick from '../../animateClick/AnimateClick';
import { config } from '@/utils';

function HomeLibrary() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [pdfs, setPdfs] = useState<Item[] | any>([]);
  const { itemActiveName } = useSelector((item: RootState) => item.setActiveItemName)

  const { responseData } = useSelector((item: RootState) => item.setResponseData)
  const dispatch = useDispatch();

  useEffect(() => {
    if (responseData && responseData.length > 0) return;
    setLoading(true)
    async function fetchData() {
      try {
        const url = `${config.ssoUrl}/api/items/5577831`;
        const res = await axios.get(url);
        dispatch(setResponseData(res.data));
        setPdfs(res.data);
      } catch (error: any) {
        setLoading(false);
        throw Error("Data Not Fetched", error)
      }
    }

    fetchData();
    // fetchData()
  }, [dispatch])

  const convertDateToFrenchFormat = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    return formattedDate;
  };

  const filteredItems = responseData.filter((item: Item) => item.data.title.includes('a'));
  const mappedFilterdItems = itemActiveName == 'all' || !itemActiveName ? responseData : filteredItems;

  return (
    responseData.length !== 0 ? (
      <div>
        <div className='flex flex-wrap gap-4'>
          <Link href={"/add-document"} className='px-4 py-2 bg-[#B0D0C7] rounded-xl'>
            <div className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-36 h-36 pt-3 px-2 pb-4 flex flex-col animate-zoomIn">
              <p className="truncate sm:text-sm text-xs font-[500]">
                Add New Document
              </p>
              <div className="w-full flex-grow flex justify-center items-center bg-[#D9E8E4] mt-2">
                <Image src={addIcon} alt="" />
              </div>
            </div>
          </Link>
          {mappedFilterdItems?.map((item: Item) => (
            <div key={item.key} className='px-4 py-2 bg-[#B0D0C7] rounded-xl'>
              <AnimateClick>
                <Link
                  // key={item.key}
                  className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-36 h-36 bg-[#B0D0C7] flex flex-col gap-y-2 cursor-pointer animate-fadeIn"
                  href={`/digital-library/${item.key}`}>
                  <p className="truncate sm:text-sm text-xs pb-2">{item.data.title}</p>
                  <div className="w-full flex-grow mb-1 flex justify-center items-center overflow-hidden mt-2">

                    <Image
                      src={item.coverImage}
                      alt=""
                      width={200}
                      height={180}
                      className="object-center object-cover w-full"
                    />
                  </div>
                  <p className="truncate text-xs text-[#47586E] font-bold pb-2">
                    lastModified: {convertDateToFrenchFormat(item.data.accessDate)}
                  </p>
                </Link>
              </AnimateClick>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className='flex flex-wrap gap-4'>
        {[1, 2, 3, 4].map((index) => (
          <div className="lg:w-56 bg-[#B0D0C7] lg:h-56 md:w-48 md:h-48 w-36 h-36 pt-3 px-2 pb-1 rounded-xl animate-pulse" key={index}>
            <div className="w-full h-full rounded-xl"></div>
          </div>
        ))}
      </div>
    )
  )

}

export default HomeLibrary;
