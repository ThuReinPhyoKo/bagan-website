"use client"
import Link from "next/link"
import { AutoShow } from "@/Animation/animation";
import Modal from "@/components/modal";
import { useState } from "react";

const archiTemples = [
    {
      id: 1,
      name: "Ananda Temple",
      description: "Ananda Temple is one of the most magnificent and well-preserved temples in Bagan, showcasing a perfect blend of Mon and Indian architectural influences. Built in the early 12th century, it features a massive gilded spire that glows under the sun, along with four standing Buddha statues facing different directions. The temple is often referred to as the 'Westminster Abbey of Burma' due to its historical significance and grandeur.",
      date: "1105 AD",
      builtBy: "King Kyansittha",
      image: "/assets/pagoda/ananda.jpg",
      location: "https://www.google.com/maps/place/Ananda+Temple/@21.1708625,94.864973,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e51c276be127:0x392ae5db3a1149b9!8m2!3d21.1708575!4d94.8675479!16zL20vMGc0Mmo0?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    },
    {
      id: 2,
      name: "Dhammayangyi Temple",
      description: "Dhammayangyi Temple is the largest and one of the most mysterious temples in Bagan. Built by King Narathu in an attempt to atone for his sins, it is known for its precise and sophisticated brickwork, which remains unmatched to this day. Although the temple was never fully completed, its massive structure and eerie inner passageways continue to intrigue visitors and historians alike.",
      date: "1167 AD",
      builtBy: "King Narathu",
      image: "/assets/pagoda/damayangyi.jpg",
      location: "https://www.google.com/maps/place/Dhammayangyi+Temple/@21.1620235,94.8705586,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e4de1e0ca4d9:0x8d1e24b120882ac5!8m2!3d21.1620185!4d94.8731335!16zL20vMGc0M2xu?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    },
    {
      id: 3,
      name: "Thatbyinnyu Temple",
      description: "Standing at 61 meters, Thatbyinnyu Temple is the tallest structure in Bagan and an early example of multi-story temple design. This imposing white temple symbolizes 'omniscience' and offers breathtaking views of the surrounding temple landscape. It serves as an important landmark in Bagan, reflecting the architectural advancements made during King Alaungsithu's reign.",
      date: "12th century",
      builtBy: "King Alaungsithu",
      image: "/assets/pagoda/thatbyinnyu.jpg",
      location: "https://www.google.com/maps/place/That+Bin+Nyu+Temple/@21.168865,94.8603448,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e51d3790dc2b:0x1a93e53d957a0a4d!8m2!3d21.16886!4d94.8629197!16zL20vMGc0MnZ3?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    },
    {
      id: 4,
      name: "Sulamani Temple",
      description: "Sulamani Temple, often referred to as the 'Crowning Jewel,' is known for its exceptional brickwork and exquisite frescoes depicting scenes from Buddhist scriptures. Built in the late 12th century, it represents a refined version of earlier architectural styles, with multiple terraces, decorative stucco work, and a peaceful atmosphere that attracts both worshippers and history enthusiasts.",
      date: "1183 AD",
      builtBy: "King Narapatisithu",
      image: "/assets/pagoda/sulamani.jpg",
      location: "https://www.google.com/maps/place/Sulamani+Temple/@21.1649493,94.8788484,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e4d84319b333:0x3249035225edff50!8m2!3d21.1649443!4d94.8814233!16zL20vMGc0cTRm?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    },
    {
      id: 5,
      name: "Gubyaukgyi Temple",
      description: "Gubyaukgyi Temple, located in Myinkaba village, is famous for its well-preserved fresco paintings that provide valuable insight into early Bagan artistic traditions. The temple's walls are adorned with intricate murals depicting Jataka tales and Buddhist iconography. Its unique Indian-style spire and detailed stucco work make it one of the most visually striking temples in Bagan.",
      date: "13th century",
      builtBy: "Prince Yazakumar",
      image: "/assets/formap/gubyaukgyi.jpg",
      location: "https://www.google.com/maps/place/Gu+Byauk+Gyi+Myin+Kabar/@21.1572391,94.8582734,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e4fae96c31b7:0x5f23422fb124d052!8m2!3d21.1572341!4d94.8608483!16s%2Fg%2F12pgclr1l?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    }
  ];

const archiPagodas = [
  {
    id: 1,
    name: "Shwezigon Pagoda",
    description: "Shwezigon Pagoda, located in Nyaung-U, Bagan, is one of Myanmar’s most significant religious landmarks. Built in the 11th century by King Anawrahta, it serves as a prototype for later pagodas in Myanmar, with its golden stupa and intricate decorations symbolizing the country's rich cultural heritage. It is a popular pilgrimage site and remains an important center for Buddhist worship.",
    builtBy: "King Anawrahta",
    date: "11th century",
    image: "/assets/pagoda/shwezigon-2.jpg",
    location: "https://www.google.com/maps/place/Shwezigon+Pagoda/@21.1953293,94.8914175,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5fab4ae38bc97:0xdd03aab2c05044c9!8m2!3d21.1953243!4d94.8939924!16zL20vMGc0cWNk?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
  },
  {
    id: 2,
    name: "Mahabodhi Pagoda",
    description: "The Mahabodhi Pagoda in Bagan, inspired by the famous Mahabodhi Temple in India, commemorates the spot where Buddha attained enlightenment under the Bodhi tree. Built during the 12th century by King Htilominlo, this pagoda features a towering spire, surrounded by smaller stupas. Its design reflects the deep spiritual connection between Bagan and Buddhist traditions, drawing visitors who seek a sense of tranquility and reflection.",
    builtBy: "King Htilominlo",
    date: "12th century",
    image: "/assets/pagoda/Mahabodhi.jpg",
    location: "https://www.google.com/maps/place/Maha+Bodhi+Phaya/@21.173188,94.8579798,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5e5049d83ff21:0xa53649f94ab40a57!8m2!3d21.173183!4d94.8605547!16zL20vMGc0bmhw?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
  },
  {
    id: 3,
    name: "Payathonzu Pagoda",
    description: "The Payathonzu Pagoda, located near the western side of Bagan, is a lesser-known gem in the archaeological zone. It is a unique temple with three interconnecting chambers, each containing a Buddha statue. The pagoda’s architecture stands out for its distinct shape and the serene atmosphere that surrounds it, making it a peaceful retreat for visitors interested in exploring the quieter corners of Bagan's vast temple landscape.",
    builtBy: "Unknown (around the 12th century)",
    date: "Around 12th century",
    image: "/assets/pagoda/Payathonzu.jpg",
    location: "https://www.google.com/maps/place/Paya+Thone+Zu,+Nyaungu/@21.162011,94.8987329,17z/data=!3m1!4b1!4m6!3m5!1s0x30b5fb289a6c2f19:0x30ea7f01db96acfd!8m2!3d21.1620077!4d94.9033544!16zL20vMGc0cHM3?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
  }
];

export default function Architecture(){
    const [ selected, setSelected ] = useState<string | null>(null)
    return (
        <>
            <section id="archi-home" className="w-full min-h-screen flex flex-col justify-center bg-cover bg-center relative" style={{backgroundImage: "url('/assets/background/archi-bg.jpg')"}}>
                <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
                <div className="w-[80%] lg:w-[60%] m-5 relative text-white">
                    <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.6)] p-2">The Sacred Temples and Pagodas of Bagan</h1>
                    <p className="text-sm sm:text-base md:text-lg font-medium px-4 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">Once the heart of an ancient kingdom, Bagan’s landscape is dotted with awe-inspiring temples and pagodas that have stood for centuries. Here, we highlight six of the most significant structures that showcase the spiritual and artistic heritage of Myanmar.</p>
                    <button className="hero-btn2 font-sans text-sm sm:text-base w-32 sm:w-36 md:w-40 p-2 rounded-full border border-white m-2"><a href="#archi-temples">Explore Temples</a></button>
                    <button className="hero-btn2 font-sans text-sm sm:text-base w-32 sm:w-36 md:w-40 p-2 rounded-full border border-white m-2"><a href="#archi-pagodas">Explore Pagodas</a></button>
                </div>  
            </section>
            <section id="archi-temples" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5">
                    <AutoShow><h1 className="text-2xl md:text-3xl lg:text-4xl text-center p-2 font-semibold">Architectural Marvels: The Timeless Temples of Bagan</h1></AutoShow>
                    {archiTemples.map(event => (
                        <div key={event.id} className="flex lg:gap-6 lg:flex-row flex-col gap-3 p-6">
                            <div className="lg:w-2/3 w-full [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                                <AutoShow><h2 className="font-semibold lg:text-xl md:text-lg sm:text-base text-sm mb-1 lg:mb-2">{event.name}</h2></AutoShow>
                                <AutoShow><p className="text-xs sm:text-sm">{event.date}</p></AutoShow>
                                <AutoShow><p className="text-sm sm:text-base font-medium mb-1 lg:mb-2">{event.builtBy}</p></AutoShow>
                                <AutoShow><p className="text-xs sm:text-sm md:text-base">{event.description}</p></AutoShow>
                                <AutoShow><a target="_blank" rel="noopener noreferrer" href={event.location}>
                                  <button className="rounded-lg border border-black dark:border-white text-xs sm:text-sm w-24 sm:w-28 p-2 mt-2 flex items-center justify-evenly transition ease-in hover:scale-105">
                                      <svg className="w-3 sm:w-4 fill-black dark:fill-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M19.925 1.78443C21.5328 1.18151 23.1029 2.75156 22.5 4.35933L16.0722 21.5C15.3574 23.4061 12.5838 23.1501 12.23 21.1453L10.8664 13.418L3.1391 12.0544C1.13427 11.7006 0.878261 8.92697 2.78443 8.21216L19.925 1.78443ZM20.6273 3.65708L3.48668 10.0848L11.2139 11.4485C12.0417 11.5945 12.6898 12.2426 12.8359 13.0704L14.1996 20.7977L20.6273 3.65708Z"></path> </g></svg>
                                      Location
                                  </button>
                                </a></AutoShow>
                            </div>
                            <img src={event.image} alt={event.name} onClick={() => setSelected(event.image)} className="w-2/3 sm:w-1/3 rounded-lg object-cover shadow-lg shadow-slate-800 border-2 border-grey transition ease-in hover:scale-105" />
                        </div>
                    ))}
                </div>
            </section>
            <section id="archi-pagodas" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5">
                  <AutoShow><h1 className="text-2xl md:text-3xl lg:text-4xl text-center p-2 font-semibold">Explore the Majestic Pagodas of Bagan</h1></AutoShow>
                    {archiPagodas.map(event => (
                          <div key={event.id} className="flex lg:gap-6 lg:flex-row flex-col gap-3 p-6">
                              <div className="lg:w-2/3 w-full [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                                  <AutoShow><h2 className="font-semibold lg:text-xl md:text-lg sm:text-base text-sm mb-1 lg:mb-2">{event.name}</h2></AutoShow>
                                  <AutoShow><p className="text-xs sm:text-sm">{event.date}</p></AutoShow>
                                  <AutoShow><p className="text-sm sm:text-base font-medium mb-1 lg:mb-2">{event.builtBy}</p></AutoShow>
                                  <AutoShow><p className="text-xs sm:text-sm md:text-base">{event.description}</p></AutoShow>
                                  <AutoShow><a target="_blank" rel="noopener noreferrer" href={event.location}>
                                    <button className="rounded-lg border border-black dark:border-white text-xs sm:text-sm w-24 sm:w-28 p-2 mt-2 flex items-center justify-evenly transition ease-in hover:scale-105">
                                        <svg className="w-3 sm:w-4 fill-black dark:fill-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M19.925 1.78443C21.5328 1.18151 23.1029 2.75156 22.5 4.35933L16.0722 21.5C15.3574 23.4061 12.5838 23.1501 12.23 21.1453L10.8664 13.418L3.1391 12.0544C1.13427 11.7006 0.878261 8.92697 2.78443 8.21216L19.925 1.78443ZM20.6273 3.65708L3.48668 10.0848L11.2139 11.4485C12.0417 11.5945 12.6898 12.2426 12.8359 13.0704L14.1996 20.7977L20.6273 3.65708Z"></path> </g></svg>
                                        Location
                                    </button>
                                  </a></AutoShow>
                              </div>
                              <img src={event.image} alt={event.name} onClick={() => setSelected(event.image)} className="w-2/3 sm:w-1/3 rounded-lg object-cover shadow-lg shadow-slate-800 border-2 border-grey transition ease-in hover:scale-105" />
                          </div>
                      ))}
                </div>
            </section>
            {selected && <Modal image={selected} onClose={()=> setSelected(null)} />}
        </>
    )
}