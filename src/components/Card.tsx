"use client"

import React from "react";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Card({title, url, classes, children}: { title?: string, url?: string, classes?: string, children?: React.ReactNode }) {
    const router = useRouter();

    return (
        <div className={ classes + " bg-royal flex flex-col rounded-2xl drop-shadow-md"}>
            {title ?
                <h2 className={"bg-indigo-900 p-5 text-xl font-medium rounded-t-2xl"}>{title}</h2>
                : null
            }
            <div className={"p-4 space-y-3"}>
                {children}
            </div>
            { url ? <Button onClick={() => router.replace(url)} classNames={"mx-auto mb-4 mt-auto"}>Visit <FontAwesomeIcon icon={faArrowRight} /></Button> : null}
        </div>
    );
}