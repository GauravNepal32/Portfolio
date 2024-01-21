import { Clock } from 'lucide-react'
import { Metadata, ResolvedMetadata } from 'next'
import React from 'react'
import blogs from './blogs.json'
import Link from 'next/link'


type Props = {
    params: { slug: string }

}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = params.slug
    const blog = blogs.find(x => x.slug === slug)
    return {
        title: blog!.title,
    }
}

const Blogs = ({ params }: { params: { slug: string } }) => {
    const blog = blogs.find(x => x.slug === params.slug)
    return (
        <div className=" container py-5">
            <div className="grid grid-cols-6 gap-3">
                <div className="col-span-4">
                    <div className="font-bold text-2xl">
                        Gaurav Nepal
                    </div>
                    <div className="mt-10 flex gap-2 text-gray-500">
                        <Clock />  {new Date(blog!.date).toDateString()}
                    </div>
                    <h1 className="mt-10 text-5xl font-semibold leading-relaxed">
                        {blog?.title}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: blog!.description }} className="blog_writer [&>*]:!text-justify"></div>
                </div>
                <div className="col-span-2 border-l p-3">
                    <div className="text-2xl font-semibold mb-7">
                        Blogs
                    </div>
                    {blogs.filter(x => x.slug !== params.slug).map(x => (
                        <Link href={`/blog/${x.slug}`} className="shadow min-h-[250px] mb-7 px-5 py-3 rounded-lg flex flex-col justify-between">
                            <div className="">
                                {x.date}
                            </div>
                            <div className="my-5 font-semibold text-2xl">
                                {x.title}
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs