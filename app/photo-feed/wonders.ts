import { StaticImageData } from "next/image";
import photo1 from "@/app/photo-feed/photos/photo1.jpg"
import photo2 from "@/app/photo-feed/photos/photo2.jpg" 
import photo3 from "@/app/photo-feed/photos/photo3.jpg" 

export type WonderImg = {
    id: string
    name: string
    src: StaticImageData
}

export const wonderImg: WonderImg[] = [
    {
        id: '1',
        name: 'photo one',
        src: photo1
    },
    {
        id: '2',
        name: 'photo two',
        src: photo2
    },
    {
        id: '3',
        name: 'photo three',
        src: photo3
    },
]