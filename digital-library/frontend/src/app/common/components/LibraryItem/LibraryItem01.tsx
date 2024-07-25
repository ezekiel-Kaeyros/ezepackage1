import React, { useEffect, useState } from 'react';
import { Item } from './LibraryItem';
import { usePathname } from 'next/navigation';
import { fetchGroupItems, fetchGroups } from '@/funtions/zoteroApi';
import filledStar from '../../../../../public/icons/filledStar.svg';
import unFilledStar from '../../../../../public/icons/unFilledStar.svg'
import rateStar from '../../../../../public/icons/rateStar.svg'
import saveStar from '../../../../../public/icons/save.svg';
import { Button } from '../button/Button';
import Image from 'next/image';
import AnimateClick from '../animateClick/AnimateClick';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { config } from '@/utils';
import { setResponseData } from '@/redux/features/auth-slice';

interface ItemIdProps {
    itemKey: string;
}

function LibraryItem() {
    const pathname = usePathname();
    const itemKey: any = pathname.split('/').pop();
    const [loading, setLoading] = useState(false);
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
          } catch (error: any) {
            setLoading(false);
            throw Error("Data Not Fetched", error)
          }
        }
    
        fetchData();
        // fetchData()
      }, [dispatch])

    const findItemByKey = (items: Item[], key: string): Item | undefined => {
        return items.find((item: Item) => item.key === key);
    };

    const matchedItem = findItemByKey(responseData, itemKey);

    const getFileExtension = (fileName: string): string => {
        const parts: any = fileName.split('.');
        return parts.length > 1 ? parts.pop() : '';
    };

    const fileExtension = matchedItem?.data.filename ? getFileExtension(matchedItem.data.filename) : '';

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
    
    
    const newFormat: string = convertDateToFrenchFormat(matchedItem?.data.accessDate);

    return (
        <>
            {matchedItem ? <div className='bg-white w-11/12 sm:w-3/5 lg:w-2/5'>
                <span className='flex justify-end'>
                    <div className='bg-[#3D4C5E] w-20 p-2 flex justify-center rounded-l-xl'>
                        <h3 className='w-fit text-white'>Free</h3>
                    </div>
                </span>
                <div className=' pt-5 px-10 flex flex-col gap-y-2 mb-4'>
                    <span>
                        <h1 className='m-0'>Article Name</h1>
                        <p className='m-0'>{matchedItem?.data.title}</p>
                    </span>
                    <span>
                        <h1>Description</h1>
                        <p>{matchedItem?.data.note}</p>
                    </span>
                    <span>
                        <h1>File Type</h1>
                        <p>{fileExtension ? fileExtension : "No Extension"}</p>
                    </span>
                    <span>
                        <h1>Author</h1>
                        <p>John Doe</p>
                    </span>
                    <span>
                        <h1>Rate</h1>

                        <div className='flex items-center gap-x-2'>
                            <div className='flex gap-x-1'>
                                <Image src={filledStar} alt='star' />
                                <Image src={filledStar} alt='star' />
                                <Image src={unFilledStar} alt='star' />
                                <Image src={unFilledStar} alt='star' />
                                <Image src={unFilledStar} alt='star' />
                            </div>
                            <small className='text-xs items-start pt-1'>2/5</small>
                        </div>
                    </span>
                    <span>
                        <h1>Publication Date</h1>
                        <p>{newFormat.includes('undefined') ? '' : newFormat}</p>
                    </span>
                    <span>
                        <h1>Cathegory</h1>
                        <p>{matchedItem?.data.itemType}</p>
                    </span>
                    <span>
                        <h1>Price</h1>
                        <p>{matchedItem?.price}<small>XAF</small></p>
                    </span>
                    <span className='flex justify-between'>
                        <div className='flex gap-x-3'>
                            <div>
                                <Image src={saveStar} alt='saveStar' />
                                <h3>Save</h3>
                            </div>
                            <div>
                                <Image src={rateStar} alt='rateStar' />
                                <h3>Rate</h3>
                            </div>
                        </div>
                        <AnimateClick>
                            <Button className='rounded-md'>Buy (Free)</Button>
                        </AnimateClick>
                    </span>
                </div>
            </div> :
                <div className='bg-white w-2/5 h-[70vh]'>
                    <div className="flex justify-center items-center h-full flex-col">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            }
        </>
    );
}

export default LibraryItem;