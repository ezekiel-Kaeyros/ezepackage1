"use client"

import FilterdCarousel from '../../caroussel/filteredCarousel';
import cover2 from '../../../../../../public/images/overview.svg'
import arrowIcon from '../../../../../../public/images/arrow-left (2).svg'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { usePathname } from 'next/navigation';

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


function SeeFileCat() {
    const {cathegoryName} = useSelector((item:RootState) => item.setCathegoryName)
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const dynamicSegment = pathParts[pathParts.length - 1];

    function decodeString(encodedString: string) {
        return decodeURIComponent(encodedString);
    }
    
    const data = dynamicSegment;
    const decodedData = decodeString(data);

    return (
        <div className='mt-5'>
            <Link
                href={"/en/digital-library"}
                className="flex justify-start items-center gap-2 text-[#015E44] pl-2 mb-5 mt-4"
            >
                <Image src={arrowIcon} alt="" />
                <span>Back To Documents</span>
            </Link>
            <div className='pl-4 text-xl'>
                <h1>
                    {decodedData}
                </h1>
            </div>
            <div className="w-full  pb-14 overflow-hidden">
                <FilterdCarousel data={arraytest} path={dynamicSegment} />
            </div>
        </div>
    )
}

export default SeeFileCat;