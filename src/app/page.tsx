import Image from "next/image";
import { AnimateFromLeft, AnimateFromBottom, AutoShow } from "./Animation/animation";
import TimeLine from '@/components/timeline'
import Temple from "./components/archi";
import CultureSection from "./components/culture";
import Gallery from "./components/gallery";
import Map from "./components/map";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        
        <section className="hero-section relative w-screen min-h-screen overflow-hidden">
          <div className="hero-bg relative w-full min-h-screen">
            <Image width={224} height={112} objectFit="cover" alt="ballon" src="/assets/background/ballon.png" className="b1 absolute top-5 left-0 z-40" />
            <img src="/assets/background/ballon.png" alt="ballon" className="b2 w-40 absolute z-40" />
            <Image layout="fill" objectFit="cover" alt="background" src='/assets/background/bg-5.jpg' className="hero-bg" />
            <h1 className="font-roboto text-5xl lg:text-9xl md:text-8xl sm:text-7xl font-bold absolute left-1/2 top-1/4 z-20 text-white">BAGAN</h1>
          </div>
          <AnimateFromLeft>
            <div  className="content absolute h-auto left-5 sm:left-10 top-1/3 z-40 text-white">
              <h2 className="font-zain font-semibold text-3xl lg:text-6xl md:text-5xl sm:text-4xl">LEGACY</h2>
              <p className="font-sans [text-shadow:_2px_2px_4px_rgba(0,0,0,0.6)] text-xs md:text-base sm:text-sm">Bagan (Burmese: ပုဂံ; formerly Pagan) is an ancient city<br /> and a UNESCO World Heritage Site in the Mandalay Region of Myanmar.<br/>From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom,<br/> the first kingdom that unified the regions that would later constitute Myanmar.</p>
              <button className="hero-btn font-sans text-black md:text-l sm:text-base text-sm lg:w-40 w-28 md:w-36 sm:w-32 p-2 rounded-full border border-white m-2 transition duration-300 hover:brightness-125 hover:font-medium"><a href="#home-map">Get Location</a></button>
              <button className="hero-btn2 font-sans text-sm sm:text-base md:text-l lg:w-40 w-28 sm:w-32 md:w-36 p-2 rounded-full border border-white m-2 hover:font-medium"><a href="#home-history">Explore</a></button>
            </div>
          </AnimateFromLeft>
          <AnimateFromBottom>
            <div className="facts w-full grid grid-cols-1 sm:grid-cols-3 gap-3 absolute left-0 bottom-0 z-40 p-2">
              <div className="hero-fact1 flex items-center justify-center">
                <img src="/assets/png/unesco.png" alt="UNESCO" className="w-10 sm:w-8 md:w-12 lg:w-14 max-w-full h-auto"/>
                <p className="text-white font-sans text-xs px-1">Bagan is a sacred landscape, featuring an exceptional range of Buddhist art and architecture. <a href="https://whc.unesco.org/en/list/1588/" target="_blank" rel="noopener noreferrer" className="see-more-btn text-blue-600">see more</a></p>
              </div>
              <div className="hero-fact2 flex items-center justify-center">
                <img src="/assets/png/pagoda.png" alt="pagoda" className="w-10 sm:w-8 md:w-12 lg:w-14 max-w-full h-auto" />
                <p className="text-white font-sans text-xs px-1">Bagan, Myanmar has between 2,000 and 3,000 remaining pagodas. The city is known as the City of Four Million Pagodas.</p>
              </div>
              <div className="hero-fact3 flex items-center justify-center">
                <img src="/assets/png/9th.png" alt="ancient-scroll" className="w-10 sm:w-8 md:w-12 lg:w-14 max-w-full h-auto" />
                <p className="text-white font-sans text-xs px-1">The Bagan Dynasty, also known as the Pagan Kingdom, lasted for approximately 250 years, roughly from 1044 to 1284 CE.</p>
              </div>
            </div>
          </AnimateFromBottom>
        </section>
        
        <section id="home-history" className="history-section w-full min-h-screen flex flex-col justify-center">
          <div className="flex flex-col self-center justify-center w-3/4">
            <AutoShow><h1 className="font-zain text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center m-4">Brief History</h1></AutoShow>
            <AutoShow><p className="lg:text-lg text-xs md:text-base sm:text-sm text-center mb-4">Bagan was founded in the mid-to-late 9th century by the Mranma (Burmans), who had recently entered the Irrawaddy valley from the <a  className="see-more-btn text-blue-600" href="https://en.wikipedia.org/wiki/Nanzhao" target="_blank" rel="noopener noreferrer">Nanzhao Kingdom</a>. It was among several competing <a  className="see-more-btn text-blue-600" href="https://en.wikipedia.org/wiki/Pyu_city-states" target="_blank" rel="noopener noreferrer">Pyu city-states</a> until the late 10th century when the Burman settlement grew in authority and grandeur.</p></AutoShow>
          </div>
          <AutoShow><TimeLine /></AutoShow>
          {/* <AutoShow>
            <div className="w-3/4 self-center">
              <button type="button" className="float-right p-2 flex bg-transparent border-none text-base md:text-lg hover:text-amber-500"><Link href="/History">More History</Link></button>
            </div>
          </AutoShow> This is Button     */}
        </section>

        <section id="home-archi" className="archi-section w-full min-h-screen flex flex-col justify-center">
          <div className="flex flex-col self-center w-3/4">
            <AutoShow><h1 className="font-zain text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center m-4">Architectural Feats</h1></AutoShow>
            <AutoShow><p className="lg:text-lg text-xs md:text-base sm:text-sm text-center mb-4">Bagan architecture is known for its temples, stupas, and monasteries, and is a testament to the artistic and engineering skills of ancient Myanmar craftsmen. </p></AutoShow>
          </div>
          <AutoShow><Temple /></AutoShow>
        </section>

        <section id="home-culture"  className="culture-section w-full min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col self-center w-3/4">
            <AutoShow><h1 className="font-zain text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center m-4">Main Cultures</h1></AutoShow>
            <AutoShow><p className="lg:text-lg text-xs md:text-base sm:text-sm text-center mb-4">The culture of Bagan, Myanmar is influenced by Buddhism, the Mon people, and other traditions. Daily life of the Bagan people revolves around the Buddhist faith. Aside from strict observance of Buddhist Sabbath days, people uphold age-old traditions such as respect for monks and elders, and scheduling important events on lucky days according to the Buddhist calendar.</p></AutoShow>
          </div>
          <AutoShow><CultureSection /></AutoShow>
        </section>

        <section id="home-gallery" className="gallery-section w-full min-h-screen relative flex flex-col items-center justify-center">
          <div className="flex flex-col self-center w-3/4">
            <AutoShow><h1 className="font-zain text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center m-4">Modern Day Bagan</h1></AutoShow>
            <AutoShow><p className="text-xl lg:text-4xl md:text-3xl sm:text-2xl mb-4">Image Gallery</p></AutoShow>
          </div>
          <AutoShow><Gallery /></AutoShow>
        </section>

        <section id="home-map" className="map-section w-full min-h-screen relative flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <AutoShow><h1 className="font-zain text-3xl lg:text-5xl md:text-4xl sm:text-4xl text-center m-4">Locations of Famous Temples & Pagodas</h1></AutoShow>
          </div>
          <div className="w-3/4">
            <AutoShow><Map /></AutoShow>
          </div>
        </section>

      </div>
    </>
  );
}
