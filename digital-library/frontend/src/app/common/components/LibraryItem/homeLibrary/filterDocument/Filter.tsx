import React, { useEffect, useState } from 'react';
import { FilterIconAll, FilterIconDoc } from '../../libraryIcons/libraryIcons';
import arrowDown from '../../../../../../../public/icons/arrow-down.svg';
import Image from 'next/image';
import { setActiveItemName } from '@/redux/features/auth-slice';
import { RootState } from '@/redux/store';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import FilterDocDate from './filter-doc-date/FilterDocDate';


function Filter() {
    const [active, setActive] = useState('all');
    const dispatch = useDispatch()

    const handleClick = (name: string) => {
        dispatch(setActiveItemName(name));
    };

    return (
        <div>
            <div className='flex gap-x-3 flex-col lg:flex-row items-center gap-y-4 justify-end lg:justify-normal'>
                <div className='flex'>
                    <div
                        className={`flex gap-2 border-2 items-center px-3 py-2 rounded-l-full cursor-pointer ${active === 'all' ? 'bg-[#D9E8E4] text-[#002F22]' : ''
                            }`}
                        onClick={() => {setActive('all'), handleClick('all')}}
                    >
                        <FilterIconAll isActive={active}/>
                        <h3 className='m-0 h-[22px] text-sm sm:text-base'>All</h3>
                    </div>
                    <div
                        className={`flex gap-2 border-2 items-center px-3 py-2 rounded-r-full cursor-pointer ${active === 'document' ? 'bg-[#D9E8E4] text-[#002F22]' : ''}`}
                        onClick={() => {setActive('document'), handleClick('document')}}
                    >
                        <FilterIconDoc isActive={active}/>
                        <h3 className='m-0 h-[22px] text-sm sm:text-base'>Document</h3>
                    </div>
                </div>
                <div className='w-[1px] h-10 bg-gray-800 hidden lg:block'></div>
                <FilterDocDate />
            </div>
        </div>
    )
}

export default Filter;