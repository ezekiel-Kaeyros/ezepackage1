'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import searchIcon from "../../../../../../public/icons/searchIcon.svg";
import config from '@/utils/config'
import axios from 'axios';
import Link from 'next/link';
import { Button } from '../../button/Button';

interface BookSearchProps {
    btn: string;
    placeholder: string;
}

const BookSearch: React.FC<BookSearchProps> = ({ btn, placeholder }) => {
    const [bookItems, setBookItems] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            try {
                const url = `${config.ssoUrl}/api/items/5577831`;
                setLoading
                const res = await axios.get(url);
                setBookItems(res.data);
            } catch (error: any) {
                setLoading(false);
                throw Error("Data Not Fetched", error)
            }
        }

        fetchData();
    }, [])

    return (
        <div className="relative">
            <div className="relative">
                <input
                    type="search"
                    id="search"
                    className="block w-full p-4 ps-6 text-sm text-secondaryColor focus:outline-none border border-gray-300 rounded-full bg-gray-100 focus:ring-primaryColor focus:border-primaryColor"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete='off'
                />
                <div className="absolute h-fit right-0 w-fit top-0">
                    <Button
                        icon={searchIcon}
                        type="submit"
                        className="text-white rounded-full  focus:ring-4 focus:outline-none  font-medium  text-sm px-4 lg:px-8 py-3.5 "
                    >
                        <h1 className="hidden lg:block">{btn}</h1>
                    </Button>
                </div>
            </div>
            {searchQuery && (
                <div className="absolute w-full lg:w-6/12 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 text-black left-0">
                    {bookItems.length > 0 ? (
                        bookItems.map((book: any) => {
                            return (<Link href={`${config.livingLibraryUrl}/${book.key}`} key={book.key}>
                                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                    {book.data.title}
                                </div>
                            </Link>)
                        })
                    ) :
                        bookItems.length == 0 ?
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
