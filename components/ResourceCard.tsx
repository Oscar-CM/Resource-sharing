import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    slug: string;
    downloadlink:string;
}


const ResourceCard = ({ id, title, image, downloadNumber, slug, downloadlink}: Props) => {
    console.log(downloadlink)
    console.log(title)
    return (
        <Card className='w-full max-w-fit border-0 !bg  sm:max-w[356px]'>
            <Link href=''>
            <CardHeader className='flex-center flex-col gap-2.5 !p-0'> 
                <div>
                    <Image src={image}
                    className='h-full rounded-md object-cover'
                    width={384}
                    height={440}
                    alt='title'
                    />
                </div>

                <CardTitle className='text-white paragraph-semibold 
                line-clamp-1 w-full text-left'>{title}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            </Link>
            
            <CardContent className='flex-between mt-4 p-0'>
                 <div className='flex-center body-medium gap-1.5 text-white'>
                    <Image src='/downloads.svg' width={20} height={20}
                    alt='downloads'/>
                    {downloadNumber}
                 </div>
                 <Link href={`/resources/${id}`} 
                 className='flex-center text-gradient_purple-blue body-semiold gap-1.5'>
                    Download Now
                    <Image src='/arrow-blue.svg' width={13} height={10} alt='arrow'/>
                 </Link>
            </CardContent>

        </Card>


    )
}

export default ResourceCard