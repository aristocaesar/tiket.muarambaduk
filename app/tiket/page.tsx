import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Ticket } from "../_types/ticket";
import ItemsTiket from "../components/tiket/items";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Tiket'
}

export default async function Tiket() {

    const tickets = await MUARAMBADUK_API.get('tickets');
    const ticketsData : Ticket[] = tickets.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Tiket</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/tiket.svg"} alt='icon-tiket' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            <ItemsTiket items={ticketsData}/>
        </Wrapper>
    );

}