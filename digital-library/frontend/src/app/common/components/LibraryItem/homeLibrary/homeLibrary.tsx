import React from 'react';
import { Item } from '../LibraryItem';
import Image from 'next/image';
import Link from 'next/link';
import addIcon from "../../../../../../public/images/add-square.svg";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AnimateClick from '../../animateClick/AnimateClick';
import { useItems } from '@/app/hooks/useItems';
import { convertDateToFrenchFormat, parseDate } from './filterDocument/filter-doc-date/data';

function HomeLibrary() {
  const { responseData, isLoading } = useItems()
  const { itemActiveName } = useSelector((item: RootState) => item.setActiveItemName)

  const { modificationDate } = useSelector((item: RootState) => item.setResponseData)
  const modificationDateValue = parseDate(modificationDate);
  const currentDate = new Date();


  const filteredItems = responseData.filter((item: Item) => item.data.title.includes('a'));
  const mappedFilterdItems = itemActiveName == 'all' || !itemActiveName ? responseData : filteredItems;

  const filteredDateItems = mappedFilterdItems.filter((item: Item) => {
    const itemDate = new Date(item.data.dateModified);
    return itemDate >= modificationDateValue && itemDate <= currentDate;
  });

  const mappedFilteredDateDocItems = filteredDateItems.length !== 0 ? filteredDateItems : mappedFilterdItems;

  return (
    responseData.length !== 0 ? (
      <div>
        <div className='flex flex-wrap gap-4 items-center justify-center sm:justify-start gap-y-8 sm:gap-y-4'>
          <Link href={"/add-document"} className='px-4 py-2 bg-[#B0D0C7] rounded-xl'>
            <div className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-52 h-52 pt-3 px-2 pb-4 flex flex-col animate-zoomIn">
              <p className="truncate sm:text-sm text-xs font-[500]">
                Add New Document
              </p>
              <div className="w-full flex-grow flex justify-center items-center bg-[#D9E8E4] mt-2">
                <Image src={addIcon} alt="" />
              </div>
            </div>
          </Link>
          {mappedFilteredDateDocItems?.map((item: Item) => {
            const dateFormat = convertDateToFrenchFormat(item.data.accessDate)

            return (
              <div key={item.key} className='px-4 py-2 bg-[#B0D0C7] rounded-xl'>
                <AnimateClick>
                  <Link
                    // key={item.key}
                    className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-52 h-52 bg-[#B0D0C7] flex flex-col gap-y-2 cursor-pointer animate-fadeIn"
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
                      lastModified: {dateFormat}
                    </p>
                  </Link>
                </AnimateClick>
              </div>
            )
          })}
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
