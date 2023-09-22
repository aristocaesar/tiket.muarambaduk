import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import { MUARAMBADUK_API } from "@/app/_config/serverApi";
import { News } from "@/app/_types/news";
import NotFound from "@/app/not-found";
import TagLine from "@/app/components/news/tagLine";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Detail Berita'
}

interface DetailNewsProps {
    searchParams: { [key: string]: string | null | undefined },
    params : {
        slug : string;
    }
}

export default async function DetailBerita({searchParams, params} : DetailNewsProps) {
    
    const newsDetail = await MUARAMBADUK_API.get(`news/${params.slug}`);
    const newsData : News = newsDetail.data;

    if(newsData.id == undefined) return NotFound();
    
    return (
        <>
        <TagLine
            title={newsData.title}
            thumbnail={newsData.thumbnail}
            created_at={newsData.created_at}
        />
        <Wrapper classname="relative z-10 -mt-5 bg-white rounded-t-3xl text-cod-gray-950">
            <div dangerouslySetInnerHTML={{
                __html : newsData.body
            }} />
        </Wrapper>
        </>
    );
}