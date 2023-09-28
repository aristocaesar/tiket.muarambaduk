import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import MenuNewsItem from "../components/news/menuItem";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { NewsResponse } from "../_types/news";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Berita'
}

const fetchNews = async () : Promise<NewsResponse> => {
    try {
        const news : AxiosResponse = await MUARAMBADUK_API.get('news');
        return {
            code : news.status,
            status : news.statusText,
            data : news.data.data
        };
    } catch (error) {
        if(error instanceof AxiosError) {
            return {
                code : 0,
                status : error.code,
                data : []
            }
        }
        return {
            code : 0,
            status : "SERVER_ERROR",
            data : []
        }
    }
}

export default async function Berita() {
    
    const news : NewsResponse = await fetchNews();

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Berita</h1>
            <div className="flex flex-col space-y-5 my-10">
                {
                    news.status == "ERR_BAD_REQUEST" || news.status == "ECONNREFUSED" || news.status == "SERVER_ERROR" ? (
                        <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat berita, Silakan ulangi beberapa saat.</p>
                    ) : news.status == "OK" && news.data.length == 0 ? (
                        <p className="text-sm text-center py-10 text-cod-gray-500">Tidak ada berita</p>
                    ) : (
                        news.data.map((_news, index) => {
                            return (
                                <MenuNewsItem 
                                    key={index}
                                    items={_news}
                                    previous={null}
                                />
                            )   
                        })
                    ) 
                }
            </div>
        </Wrapper>
    );
}