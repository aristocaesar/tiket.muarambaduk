"use client"

import { Currency } from "@/app/_libs/currency";
import { Ticket } from "@/app/_types/ticket";
import classNames from "classnames";
import { useState } from "react";

interface ItemsTiketProps {
    tickets : Ticket[]
}

export default function ItemsTiket({tickets}: ItemsTiketProps) {
    const [category, setCategory] = useState("tourist");

    return(
        <>
        <div className="flex w-full justify-between">
            <button className={classNames("w-full text-white  font-semibold py-2 rounded-l", {
                "bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950" : category == "tourist",
                "bg-wild-sand-500 hover:bg-wild-sand-900 active:bg-wild-sand-900" : category != "tourist"
            })} onClick={()=>{setCategory("tourist")}}>
                Wisatawan
            </button>
            <button className={classNames("w-full text-white  font-semibold py-2 rounded-r", {
                "bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950" : category == "transport",
                "bg-wild-sand-500 hover:bg-wild-sand-900 active:bg-wild-sand-900" : category != "transport"
            })} onClick={()=>{setCategory("transport")}}>
                Kendaraan
            </button>
        </div>
        <div className="flex flex-col mt-8 text-cod-gray-950 space-y-5">
            {
                tickets.map((item, index) => (
                    item.category == category ? (
                    <div key={index}>
                        <h2 className="font-semibold mb-3">{item.title}</h2>
                        <div className="flex flex-col">
                            <div className="flex justify-between border-b py-2">
                                <p>Hari Normal :</p>
                                <p className="font-semibold">{Currency.toIDR(item.normal_day)}</p>
                            </div>
                            <div className="flex justify-between py-2">
                                <p>Hari Akhir Pekan / Libur :</p>
                                <p className="font-semibold">{Currency.toIDR(item.weekend_day)}</p>
                            </div>
                        </div>
                    </div>
                    ) : <></>
                ))
            }
        </div>
        </>
    )
}