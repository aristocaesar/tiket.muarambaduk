import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import { MUARAMBADUK_API } from "@/app/_config/serverApi";
import { News, NewsDetailResponse } from "@/app/_types/news";
import NotFound from "@/app/not-found";
import TagLine from "@/app/components/news/tagLine";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Detail Berita'
}

interface DetailNewsProps {
    searchParams: { [key: string]: string | null | undefined },
    params : {
        slug : string;
    }
}

const fetchNews = async (slug : string) : Promise<NewsDetailResponse> => {
    try {
        const _package : AxiosResponse = await MUARAMBADUK_API.get(`news/${slug}`);
        return {
            code : _package.status,
            status : _package.statusText,
            data : _package.data.data
        };
    } catch (error) {
        if(error instanceof AxiosError) {
            return {
                code : 0,
                status : error.code,
                data : null
            }
        }
        return {
            code : 0,
            status : "SERVER_ERROR",
            data : null
        }
    }
}

export default async function DetailBerita({searchParams, params} : DetailNewsProps) {
    
    const news : NewsDetailResponse = await fetchNews(params.slug);
    if(news.data?.id == undefined) return NotFound();
    
    return (
        <>
        <TagLine
            title={news.data.title}
            thumbnail={news.data.thumbnail}
            created_at={news.data.created_at}
        />
        <Wrapper classname="relative z-10 -mt-5 bg-white rounded-t-3xl text-cod-gray-950">
            <div dangerouslySetInnerHTML={{
                __html : news.data.body
            }} />
        </Wrapper>
        </>
    );
}