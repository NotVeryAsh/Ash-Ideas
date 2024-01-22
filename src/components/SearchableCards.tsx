'use client'

import React, {useState} from "react";
import Card from "@/components/Card";
import getCardData from "@/lib/CardData";

export default function SearchableCards() {

    const [value, setValue] = useState("");

    return (
        <>
            <input placeholder={"Search projects..."}
                   type="text"
                   className="shadow-xl text-slate-200 font-bold outline-none bg-midnight text-sm rounded-2xl block w-full md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 p-4"
                   onChange={event => setValue(event.target.value)}
                   value={value}
            />
            <div className="grid grid-flow-col gap-5 w-full grid-rows-12 md:grid-rows-6 xl:grid-rows-4 xl:max-w-6xl">
                <Cards value={value}/>
            </div>
        </>
    );
}

function Cards({value}: {value: string})
{
    let cardData = getCardData();

    if(value.trim() !== "") {
        cardData = cardData.filter((card) =>
            card.title.toLowerCase().includes(value) ||
            card.description.toLowerCase().includes(value)
        )
    }

    return cardData.map((card, index) => {
        return <Card key={index} title={card.title} url={card.url}>
            {card.description}
        </Card>
    })
}