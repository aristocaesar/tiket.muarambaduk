import MenuCamping from "@/app/components/camping/menu";
import MenuMain from "@/app/components/menu/menu";
import TopBar from "@/app/components/navbar/topBar";
import MenuNews from "@/app/components/news/menu";
import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Package } from "../_types/packages";
import { News } from "../_types/news";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Dashboard'
}

export default async function Dashboard() {
    const session = await getServerSession();
    
    const packages = await MUARAMBADUK_API.get('packages');
    const packagesData : Package[] = packages.data;
    
    const news = await MUARAMBADUK_API.get('news');
    const newsData : News[] = news.data;

    return (
        <Wrapper>
            <TopBar session={session} />
            <MenuMain />
            <MenuCamping packages={packagesData} />
            <MenuNews news={newsData} />
        </Wrapper>
    );
}