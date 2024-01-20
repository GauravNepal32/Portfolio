import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { mainModule } from "process";
import blogs from '@/app/blog/[slug]/blogs.json'
import Link from "next/link";
import Cards from "@/components/cards";
import { ModeToggle } from "@/components/ThemeToggler";
export default function Home() {
  return (
    <main className="h-screen overflow-hidden mx-auto">
      <div className="grid h-screen grid-cols-2 space-x-5 py-4">
        <div className="flex container flex-col justify-center">
          <div className="">
          </div>
          <h1 className="text-5xl font-bold">Hello <span className="wave">👋</span> , I'm Gaurav Nepal</h1>
          <div className=" text-[15px] mt-5">
            Just out of the academic gates, I'm armed with a sharp toolkit – Node JS, Next JS, and TypeScript are my trusty companions, and Tailwind's my secret weapon for crafting stunning interfaces. Building sleek, interactive web experiences is my jam, and I'm always on the hunt for the next big challenge. Whether it's tackling complex algorithms or collaborating with fellow code geeks, my passion for problem-solving keeps me buzzing. So, if you're looking for a curious, can-do developer who's eager to learn and contribute, let's build something awesome together!
          </div>
          <div className="mt-10 space-y-5">
            <div className="flex space-x-5 items-center">
              <span>
                01
              </span>
              <span className="w-5 border-t-2 border-black"></span>
              <span>
                Open Source
              </span>
            </div>
            <div className="flex space-x-5 items-center">
              <span>
                02
              </span>
              <span className="w-5 border-t-2 border-black"></span>
              <span>
                Blogs
              </span>
            </div>
          </div>
          <div className="mt-24 flex gap-5">
            <ModeToggle />

            <a target="_blank" href="https://github.com/gauravnepal32" className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <span className="border-b flex items-center border-dashed border-black">
                Github
                <ArrowUpRight size={18} />
              </span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/gaurav-nepal-618053212/" className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <span className="border-b flex items-center border-dashed border-black">
                LinkedIn
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
        <div className="">
          <ScrollArea className="max-h-screen container overflow-y-scroll ">
            <div className="text-gray-600 my-4">
              01/ Open Source
            </div>
            <div className="flex flex-col gap-4">
              <Cards>
                <a target="_blank" href="https://www.npmjs.com/package/react-multitable-selector" className="">
                <div className="">
                  TypeScript
                </div>
                <div className="my-5 font-bold text-3xl">
                  React-MultiTable-Selector
                </div>
                <div className="text-gray-500">
                  A comprehensive tool allowing user to feature to select list in table format.
                </div>
                <div className="text-gray-500 my-5 flex gap-5">
                  <Star className="text-yellow-500" fill="yellow" />
                  <span>
                    2
                  </span>
                </div>
              </a>
              </Cards>
            </div>
            <div className="my-20">
              <div className="text-gray-600 my-4">
                02/ Blogs
              </div>
              <div className="grid grid-cols-2 mt-4 space-x-4">
                {blogs.map(x => (
                  <Cards className={'min-h-[250px]'}>
                    <Link href={`/blog/${x.slug}`} className="flex flex-col h-full justify-between">
                    <div className="">
                      {x.date}
                    </div>
                    <div className="my-5 font-semibold text-2xl">
                      {x.title}
                    </div>

                  </Link>
                  </Cards>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>


      </div>
    </main>
  );
}
