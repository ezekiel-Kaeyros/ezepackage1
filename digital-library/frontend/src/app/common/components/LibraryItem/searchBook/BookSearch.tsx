'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import searchIcon from "../../../../../../public/images/search-normal (2).svg";
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BookSearch = () => {
    const { responseData } = useSelector((item: RootState) => item.setResponseData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const router = useRouter()

    useEffect(() => {
        if (searchQuery) {
            const filtered = responseData.filter((book: any) =>
                book.data.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks([]);
        }
    }, [searchQuery, responseData]);

    return (
        <div className="relative">
            <div className="relative h-14 lg:w-6/12 w-11/12 m-auto rounded-full overflow-hidden bg-transparent border-2 mb-2 bg-[#E9ECEF] border-[#E9ECEF] text-black">
                <input
                    type="text"
                    className="w-full h-full pl-12 border rounded-full bg-[#E9ECEF] border-[#E9ECEF]"
                    placeholder="Search Articles, Research Works, Documentation, Thesis ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Image
                    src={searchIcon}
                    alt="Search Icon"
                    className="absolute h-7 w-7 top-[13px] left-3"
                />
            </div>
            {searchQuery && (
                <div className="absolute w-full lg:w-6/12 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 text-black left-1/4">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book: any) => {
                            return (<Link href={`/digital-library/${book.key}`} key={book.key}>
                                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                    {book.data.title}
                                </div>
                            </Link>)
                        })
                    ) :
                        responseData.length == 0 ?
                            <div className='py-2 px-4'>
                                Loading Books...
                            </div> :
                            (
                                <div className="px-4 py-2 text-black">Book does not exist</div>
                            )}
                </div>
            )}
        </div>
    );
}

export default BookSearch;
