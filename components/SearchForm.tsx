"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { useState } from 'react'
import { formUrlQuery } from '@/sanity/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchForm = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    
    const [search, setSearch] = useState('')
    const router = useRouter();

    useEffect(() => {
        const delayBebounceFn = setTimeout(() => {
            let newUrl = ''
            if(search) {
                newUrl  = formUrlQuery({
                    params:searchParams.toString(),
                    key:'query',
                    value:search
                })
            }else{
                newUrl = formUrlQuery({
                    params:searchParams.toString(),
                    keysToRemove:['query']
                })
            }

            router.push(newUrl, { scroll: false})
        }, 300)
        return () => clearTimeout(delayBebounceFn)

    },[search])

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 
    sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image src='/magnifying-glass.svg' alt='magnifying'
                    width={32}
                    height={32}
                    className='absolute left-8'
                />


                <Input
                    className='base-regular h-fit border-0 
             bg-black-400 py-4 pr-8 pl-20 outline-none
             text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange = {(e) =>setSearch(e.target.value)}

                />

            </label>
        </form>
    )
}

export default SearchForm