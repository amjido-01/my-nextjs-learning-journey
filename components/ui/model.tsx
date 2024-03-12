'use client'
import { Button } from "./button";
import React from "react";
import { useRouter } from "next/router";

export function Modal({children}: {children: React.ReactNode}) {
    const router = useRouter()

    return (
        <div className="border-4 border-green-500 h-[200px] absolute z-50">
             <Button className="border-2" onClick={() => {
            router.back()
        }}>close modal</Button>
        <div>{children}</div>
        </div>
    )
}