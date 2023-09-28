import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Ticket, TicketResponse } from "../_types/ticket";
import ItemsTiket from "../components/tiket/items";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Tiket'
}

const fetchTicket = async () : Promise<TicketResponse> => {
    try {
        const tickets : AxiosResponse = await MUARAMBADUK_API.get('tickets');
        return {
            code : tickets.status,
            status : tickets.statusText,
            data : tickets.data.data
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

export default async function Tiket() {

    const tickets : TicketResponse = await fetchTicket();


    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Tiket</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/tiket.svg"} alt='icon-tiket' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            {
                tickets.status == "ERR_BAD_REQUEST" || tickets.status == "ECONNREFUSED" || tickets.status == "SERVER_ERROR" ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat tiket, Silakan ulangi beberapa saat.</p>
                ) : tickets.status == "OK" && tickets.data.length == 0 ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Tidak ada tiket</p>
                ) : (
                    <ItemsTiket tickets={tickets.data}/>
                ) 
            }
        </Wrapper>
    );

}