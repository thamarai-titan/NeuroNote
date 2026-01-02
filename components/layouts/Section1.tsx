import Image from 'next/image';

export default function Section1(){
    return (
        <section className="flex">
            <div className="flex flex-col w-full">
                <div className="flex justify-center text-xl sm:text-2xl md:text-4xl">
                    <h2 className="py-10">" Built for developers & creators "</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className='relative w-full aspect-square '>
                        <Image 
                        src="/brain.jpg" 
                        fill 
                        className="object-cover"
                        alt="No Image available"/>
                    </div>
                    <div className='border border-zinc-300 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] '>
                        <div className='p-5 gap-10 flex flex-col items-center justify-center h-full'>
                            <div>
                                <h1 className='text-xl sm:text-2xl font-medium py-3'>Stop losing important thoughts</h1>
                                <p className='font-light text-zinc-500'>You have great ideas at the worst times — in meetings, while walking, or just before sleep. NeuroNote lets you capture thoughts instantly without breaking your flow. Every idea is saved, searchable, and available exactly when you need it.</p>
                            </div>
                            <div>
                                <h1 className='text-xl sm:text-2xl font-medium py-3'>Connect ideas automatically</h1>
                                <p className='font-light text-zinc-500'>Your notes shouldn’t live in isolation. NeuroNote links related thoughts, topics, and concepts automatically, helping you see patterns and relationships you might otherwise miss. Over time, your knowledge evolves into a connected system — not a scattered list.</p>
                            </div>
                            <div>
                                <h1 className='text-xl sm:text-2xl font-medium py-3'>Recall knowledge instantly</h1>
                                <p className='font-light text-zinc-500'>Remembering shouldn’t feel like digging through folders. With smart search and AI-powered recall, NeuroNote surfaces the right information at the right moment — whether it’s a past idea, a code snippet, or a concept you explored months ago.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}