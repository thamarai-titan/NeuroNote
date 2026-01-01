import Image from 'next/image';

export default function Section1(){
    return (
        <section className="flex">
            <div className="flex flex-col w-full">
                <div className="flex justify-center text-xl sm:text-2xl md:text-4xl">
                    <h2 className="py-10">" Built for developers & creators "</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className='relative w-full aspect-square'>
                        <Image 
                        src="/brain.jpg" 
                        fill 
                        className="object-cover"
                        alt="No Image available"/>
                    </div>
                    <div className='border border-zinc-300 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] '>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}