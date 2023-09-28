import MenuCamping from "@/app/components/camping/menu";
import MenuMain from "@/app/components/menu/menu";
import TopBar from "@/app/components/navbar/topBar";
import MenuNews from "@/app/components/news/menu";
import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { PackageResponse } from "../_types/packages";
import { AxiosError, AxiosResponse } from "axios";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { NewsResponse } from "../_types/news";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Dashboard'
}

export default async function Dashboard() {
    const session = await getServerSession();

    const fetchPackages = async () : Promise<PackageResponse> => {
        try {
            const packages : AxiosResponse = await MUARAMBADUK_API.get('packages');
            return {
                code : packages.status,
                status : packages.statusText,
                data : packages.data.data
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

    const packages : PackageResponse = await fetchPackages();
    const news : NewsResponse = await fetchNews();

    return (
        <Wrapper>
            <TopBar session={session} />
            <MenuMain />
            <MenuCamping packages={packages} />
            <MenuNews news={news} />
        </Wrapper>
    );
}