import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import MenuNewsItem from "../components/news/menuItem";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { News } from "../_types/news";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Berita'
}

export default async function Berita() {
    
    const news = await MUARAMBADUK_API.get('news');
    const newsData : News[] = news.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Berita</h1>
            <div className="flex flex-col space-y-5 my-10">
                {
                    newsData.map((_news, index) => {
                     return (
                        <MenuNewsItem 
                            key={index}
                            items={_news}
                            previous={null}
                        />
                     )   
                    })
                }
            </div>
        </Wrapper>
    );
}