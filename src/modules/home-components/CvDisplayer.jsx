import page1eng from '../../media/cv/cv-eng/page1eng.webp';
import page2eng from '../../media/cv/cv-eng/page2eng.webp';
import page1swe from '../../media/cv/cv-swe/page1swe.webp';
import page2swe from '../../media/cv/cv-swe/page2swe.webp';
import { useEffect, useState } from 'react';

export default function CvDisplayer({language}) {
   const [img, setImg] = useState({});

    useEffect(()=>{

        if(language === "swe"){
            setImg(
                {
                    page1:page1swe,
                    page2:page2swe
                } 
            );
        }else{
            setImg(
                {
                    page1:page1eng,
                    page2:page2eng
                } 
            );
        }
       
    },[language])

    return (
        img ? (
            <section className='flex flex-col items-center'>
                <img
                    className='w-[360px] md:w-[700px] lg:w-[1000px] mt-2'
                    src={img.page1}
                    alt="Page 1"
                    decoding="sync"
                />
                <img
                    className='w-[360px] md:w-[700px] lg:w-[1000px] mt-2'
                    src={img.page2}
                    alt="Page 2"
                    decoding="sync"
                />
            </section>
        ) : null
    );
    
}
