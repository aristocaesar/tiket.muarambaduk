import MenuCamping from "@/components/camping/menu";
import MenuMain from "@/components/menu/menu";
import TopBar from "@/components/navbar/topBar";
import MenuNews from "@/components/news/menu";
import Wrapper from "@/components/wrapper";
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