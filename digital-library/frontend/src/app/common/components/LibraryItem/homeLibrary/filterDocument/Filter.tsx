import React, { useEffect, useState } from 'react';
import { FilterIconAll, FilterIconDoc } from '../../libraryIcons/libraryIcons';
import arrowDown from '../../../../../../../public/icons/arrow-down.svg';
import Image from 'next/image';
import { setActiveItemName } from '@/redux/features/auth-slice';
import { RootState } from '@/redux/store';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';


function Filter() {
    const [active, setActive] = useState('all');
    const dispatch = useDispatch()

    const handleClick = (name: string) => {
        dispatch(setActiveItemName(name));
    };

    return (
        <div>
            <div className='flex gap-x-3'>
                <div className='flex'>
                    <div
                        className={`flex gap-2 border-2 items-center px-3 py-2 rounded-l-full cursor-pointer ${active === 'all' ? 'bg-[#D9E8E4] text-[#002F22]' : ''
                            }`}
                        onClick={() => {setActive('all'), handleClick('all')}}
                    >
                        <FilterIconAll isActive={active}/>
                        <h3 className='m-0 h-[22px]'>All</h3>
                    </div>
                    <div
                        className={`flex gap-2 border-2 items-center px-3 py-2 rounded-r-full cursor-pointer ${active === 'document' ? 'bg-[#D9E8E4] text-[#002F22]' : ''}`}
                        onClick={() => {setActive('document'), handleClick('document')}}
                    >
                        <FilterIconDoc isActive={active}/>
                        <h3 className='m-0 h-[22px]'>Document</h3>
                    </div>
                </div>
                <div className='w-[0.6px] bg-gray-800'></div>
                <div className='flex gap-x-2'>
                    <div className='flex items-center border-2 rounded-full py-2 cursor-pointer px-3'>
                        <h3>Modification Date</h3>
                        <Image src={arrowDown} alt='arrow down' />
                    </div>
                    <div className='flex items-center border-2 rounded-full py-2 cursor-pointer px-3'>
                        <h3>Type</h3>
                        <Image src={arrowDown} alt='arrow down' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;