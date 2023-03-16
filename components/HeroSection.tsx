"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">

<div className="px-2 md:px-6 lg:px-10 space-y-4 md:space-y-0 py-4 min-h-[50rem] bg-lightBg dark:bg-darkBg flex flex-col-reverse md:flex-row items-center justify-between shadow-md shadow-darkBg dark:shadow-lightBg rounded-lg ">

      {/* <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"> */}
        
      {/* <div className="space-y-2 md:space-y-4"> */}
      <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Децентрализованная торговля, на рынке драгметаллов</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            
            <span className="font-semibold text-teal-600">
            {" "}
            </span>
            Дарим акцию стоимостью до 30 000 ₽ за приглашенного друга и 1 000 ₽ за открытие счета по вашей ссылке
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            привет
          </Link>
        </div>
        
        
        
        
        <div className="w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] relative animate-pulse ">
				<Image
					objectFit="cover"
          src="/main1.png"
					alt="banner1"
					layout="fill"
				/>
			</div>
        
        
        
        {/* <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div> */}
       
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
