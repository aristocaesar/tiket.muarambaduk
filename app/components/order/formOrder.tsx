"use client"

import { MUARAMBADUK_API } from "@/app/_config/serverApi";
import { Button, Datepicker, Label, Select } from "flowbite-react";
import React, { useState } from "react";

async function getOrder(date : string, isCamping : boolean) {
    const order = await MUARAMBADUK_API.post('tickets/checkin', {
            date : date,
            camping : isCamping
        })

    console.log(order)
}

export default function FormOrder() {
    const [submit, setSubmit] = useState(false);

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await getOrder("25/8/2023", true);
    }
    
    return (
        <div>
            <form
                action=""
                method="post"
                className="space-y-5"
                onSubmit={(e)=>{
                    onSubmit(e);
                    setSubmit(!submit);
                }}
            >
                <div
                    id="date"
                >
                    <div className="mb-2 block">
                        <Label
                            htmlFor="date"
                            value="Tanggal Berkunjung"
                        />
                    </div>
                    <Datepicker
                        id="date"
                        minDate={new Date()}
                        showClearButton={false}
                        showTodayButton={false}
                        autoHide={true}
                        language="id-ID"
                        required
                    />
                </div>

                <div
                    id="select"
                    className="pb-2"
                >
                    <div className="mb-2 block">
                        <Label
                            htmlFor="isCamping"
                            value="Apakah kamu akan camping ?"
                        />
                    </div>
                    <Select
                        id="isCamping"
                        required
                    >
                        <option value="true">Ya, Saya akan camping</option>
                        <option value="false">Tidak</option>
                    </Select>
                </div>

                <Button
                    type="submit"
                    className="bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950 text-white w-full font-semibold py-1 text-base"
                    disabled={submit}
                >
                    { !submit ? 
                        <span>Pesan Sekarang</span> : 
                        <div className="flex flex-row items-center space-x-2">
                            <span className="loader"></span>
                            <p>Memuat ...</p>
                        </div>
                    }
                </Button>
            </form>
            { submit ? <>
                <div className="fixed z-20 bg-cod-gray-950 inset-0 bg-opacity-70"></div>
                <div className={`absolute z-30 bg-white w-full h-5/6 right-0 rounded-t-3xl p-6 transition-all bottom-0`}>
                    <button onClick={()=>{
                        setSubmit(!submit);
                    }}>XXXXX</button>
                    <p>Cupidatat magna ea sit occaecat. Qui fugiat in do ut eu occaecat magna nisi enim qui cupidatat aute. Dolore laboris commodo reprehenderit velit elit laboris sint voluptate tempor deserunt incididunt mollit cillum. Nulla nulla sint duis incididunt velit culpa qui cillum veniam officia. Cillum laboris duis tempor pariatur mollit labore amet. Aliquip eu elit Lorem anim aute id fugiat ut aliqua deserunt commodo anim consequat sit.</p>
                </div>
            </>
            : <></> }
        </div>
    )
}