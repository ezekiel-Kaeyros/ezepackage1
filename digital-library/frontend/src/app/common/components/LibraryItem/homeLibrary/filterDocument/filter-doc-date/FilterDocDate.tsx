import Image from 'next/image'
import React, { useState } from 'react'
import arrowDown from '../../../../../../../../public/icons/arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Item } from '../../../LibraryItem';
import { setModificationDate } from '@/redux/features/auth-slice';

const FilterDocDate = () => {
    const { responseData } = useSelector((item: RootState) => item.setResponseData);
    const dispatch = useDispatch();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const selectDate = (date: string) => {
        setSelectedDate(date);
        dispatch(setModificationDate(date))
        setIsDropdownOpen(false);
    };

    const convertDateToFrenchFormat = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthNames = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
        return `${day} ${monthNames[month]} ${year}`;
    };

    // Filter out duplicate dates using a Set
    const uniqueDates = Array.from(
        new Set(responseData.map((item: Item) => convertDateToFrenchFormat(item.data.accessDate)))
    );

    return (
        <div className='relative'>
            <div className='flex gap-x-2'>
                <div className='flex items-center border-2 rounded-full py-2 cursor-pointer px-3' onClick={toggleDropdown}>
                    <h3 className='text-sm sm:text-base'>{selectedDate ? selectedDate : "Modification Date"}</h3>
                    <Image src={arrowDown} alt='arrow down' />
                </div>
                <div className='flex items-center border-2 rounded-full py-2 cursor-pointer px-3'>
                    <h3 className='text-sm sm:text-base'>Type</h3>
                    <Image src={arrowDown} alt='arrow down' />
                </div>
            </div>
            {isDropdownOpen && (
                <ul className='absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg'>
                    {uniqueDates.map((date: any, index: number) => (
                        <li
                            key={index}
                            className='px-4 py-2 cursor-pointer hover:bg-gray-100'
                            onClick={() => selectDate(date)}
                        >
                            {date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FilterDocDate;
