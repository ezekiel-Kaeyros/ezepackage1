import Carousel from '@/app/common/components/caroussel/Carousel';
import cover2 from '../../../../../../public/images/overview.svg'
import arrowIcon from '../../../../../../public/images/arrow-left (2).svg'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SeeFileCat from '@/app/common/components/LibraryItem/seeFileCat/SeeFileCat';


function page() {
    return (
        <div className=''>
           <SeeFileCat />
        </div>
    )
}

export default page