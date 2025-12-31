import { Story_Script } from "next/font/google";

const storyscript = Story_Script({
    weight:"400"
})

export default function Logo(){
    return <>
        <div className={`${storyscript.className} text-3xl md:text-4xl`}>
            |NeuroNote
        </div>
    </>
}