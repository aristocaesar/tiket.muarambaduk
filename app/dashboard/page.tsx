import MenuCamping from "@/app/components/camping/menu";
import MenuMain from "@/app/components/menu/menu";
import TopBar from "@/app/components/navbar/topBar";
import MenuNews from "@/app/components/news/menu";
import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import { getServerSession } from "next-auth"

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Dashboard'
}

export default async function Dashboard() {
    const session = await getServerSession();
    return (
        <Wrapper>
            <TopBar session={session} />
            <MenuMain />
            <MenuCamping />
            <MenuNews />
        </Wrapper>
    );
}