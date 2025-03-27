import { AutoShow } from "@/Animation/animation"

export default function History() {
    return (
        <>
            <section id="history-hero" className="legend relative w-full min-h-screen overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/assets/background/history-bg.jpg')"}}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div id="history-hero-text" className="absolute text-white w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="font-vintage font-medium text-2xl md:text-3xl lg:text-4xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.6)] p-2">Discover the Timeless Wonders of Bagan</h1>
                    <p className="text-sm sm:text-base md:text-lg font-medium [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">Step back in time and witness the rise and fall of an ancient empire</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)] mb-2">A lost empire where dynasties rose, legends were born, and the spirit of Bagan still lingers in the whispers of time.</p>
                    <button className="hero-btn2 font-sans text-sm sm:text-base lg:w-40 w-28 sm:w-32 md:w-36 p-2 rounded-full border border-white m-2"><a href="#history-rise">Rise of Bagan</a></button>
                    <button className="hero-btn2 font-sans text-sm sm:text-base lg:w-40 w-28 sm:w-32 md:w-36 p-2 rounded-full border border-white m-2"><a href="#history-fall">Fall of Bagan</a></button>
                    <button className="hero-btn2 font-sans text-sm sm:text-base lg:w-40 w-28 sm:w-32 md:w-36 p-2 rounded-full border border-white m-2"><a href="#history-lore">Tales & Lores</a></button>
                </div>
            </section>
            <section id="history-kings" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5 font-vintage [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                    <AutoShow><h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-2 font-semibold">Kings of Bagan (Major Rulers)</h2></AutoShow>
                    <AutoShow><p className="py-2 text-base sm:tex-lg md:text-xl md:font-medium text-center">Here’s a list of the most notable kings who shaped Bagan’s rise and legacy:</p></AutoShow>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl font-semibold p-2">The Founding and Expansion</h3></AutoShow>
                    <ul className="px-2">
                        <AutoShow><li className="list-disc list-inside text-base sm:tex-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Pyinbya (846-878) - </span>The first ruler to fortify Bagan as a city.</li></AutoShow>
                        <AutoShow><li className="list-disc list-inside text-base sm:tex-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Thantilla (931-964) - </span>One of the earliest rulers of the growing settlement.</li></AutoShow>
                    </ul>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl font-semibold p-2">The Golden Age</h3></AutoShow>
                    <div className="w-full flex flex-col sm:flex-row justify-center">
                        <ul className="px-2">
                            <AutoShow><li className="list-disc list-inside text-base sm:text-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Anawrahta (1044-1077) - </span>The true founder of the Bagan Empire; he unified Myanmar and promoted Theravāda Buddhism.</li></AutoShow>
                            <AutoShow><li className="list-disc list-inside text-base sm:text-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Kyansittha (1084-1112) - </span>A warrior king who strengthened Bagan’s rule and fostered cultural development.</li></AutoShow>
                            <AutoShow><li className="list-disc list-inside text-base sm:text-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Alaungsithu (1112-1167) - </span>Expanded trade and built significant temples like Thatbyinnyu Pagoda.</li></AutoShow>
                            <AutoShow><li className="list-disc list-inside text-base sm:text-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Narathu (1167-1170) - </span>Builder of Dhammayangyi Temple, known for his cruelty and assassination.</li></AutoShow>
                            <AutoShow><li className="list-disc list-inside text-base sm:text-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Narapatijitu (1211-1234) - </span>Ruled during Bagan’s peak but faced internal instability.</li></AutoShow>
                        </ul>
                        <img src="/assets/anawyahtar.jpg" alt="Anawyahtar" title="Anawyahtar(1044-1077)" className="w-1/4 h-auto sm:h-72 object-cover object-[50%_25%] rounded-lg shadow-lg shadow-slate-800 border-2 border-grey transition ease-in hover:scale-105"/>
                    </div>
                        <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl font-semibold p-2">The Decline</h3></AutoShow>
                        <ul className="px-2">
                            <AutoShow><li className="list-disc list-inside text-base sm:tex-lg md:text-xl md:font-medium py-1"><span className="font-medium text-lg md:text-xl md:font-semibold">Kyawswa (1287-1297) - </span>The last recognized king before the Mongol invasion and Bagan’s fall.</li></AutoShow>
                        </ul>
                </div>
            </section>
            <section id="history-rise" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5 font-vintage [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                    <AutoShow><h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-2 font-semibold">The Rise of Bagan: A Kingdom Forged in Faith and Stones</h2></AutoShow>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">In the days before Bagan, the land was fractured—scattered Pyu city-states clung to power, their influence waning like dying embers. But from the shadows of uncertainty, a new force emerged. The Bamar people, fierce and ambitious, crossed the mighty Irrawaddy River, claiming the sunbaked plains as their own.</h3></AutoShow>
                    <div className="w-full flex flex-col sm:flex-row justify-center gap-1">
                        <div>
                            <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">It was 849 CE when the first stone of Bagan was laid—a walled fortress, a mere whisper of the empire it would become. For nearly two centuries, warlords and chieftains vied for dominance, their banners rising and falling like the tides. But true destiny waited for one man: Anawrahta.
                            </h3></AutoShow>
                            <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">In 1044, Anawrahta seized the throne, not just with steel, but with vision. He crushed rival factions, bent rebellious lords to his will, and did what none before him had achieved—he unified the lands under one crown. Yet, power alone was not enough. The soul of a kingdom must be shaped, and so he turned to faith.</h3></AutoShow>
                            <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">From the far reaches of Sri Lanka, the teachings of Theravāda Buddhism arrived in Bagan, carried by monks and whispered by sages. Anawrahta embraced it, casting aside the old ways of spirit worship and decreeing a new path for his people. With faith as his shield and ambition as his sword, he ordered the construction of temples that would stand for centuries—monuments to gods, kings, and time itself.</h3></AutoShow>
                        </div>
                        <img src="/assets/bg-3.jpg" alt="Myauk-U" className="w-56 sm:w-1/4 h-auto sm:h-72 lg:h-auto object-cover object-[50%_25%] rounded-lg shadow-lg shadow-slate-800 border-2 border-grey transition ease-in hover:scale-105"/>
                    </div>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">Bagan blossomed into a city of over 10,000 temples, its golden spires clawing at the heavens. Scholars, traders, and artisans flocked to its gates, bringing wealth, wisdom, and war. For two centuries, Bagan stood unchallenged, its kings shaping an empire that seemed untouchable.</h3></AutoShow>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">But all empires, no matter how mighty, must face their reckoning... and Bagan’s fate was already being written in the sands of time.</h3></AutoShow>
                </div>
            </section>
            <section id="history-fall" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5 font-vintage mt-5 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                    <AutoShow><h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-2 font-semibold">The Fall of Bagan: The Clash of Faith and Steel</h2></AutoShow>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">For over two centuries, Bagan stood as the beating heart of a mighty empire, its temples gleaming beneath the sun, its kings ruling with the wisdom of monks and the might of warriors. But no kingdom, no matter how grand, is immune to time, greed, and war.
                    </h3></AutoShow>
                    <div className="w-full flex flex-col sm:flex-row justify-center gap-1">
                        <div>
                            <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">The first cracks began not on the battlefield, but within the royal court. Successive kings, more enthralled by divine glory than governance, poured the empire’s wealth into ever more extravagant temples, gilding their faith in gold while neglecting the empire’s defenses. Land once ruled by mighty warlords fell under the sway of powerful monks, and soon, Bagan was less a kingdom of warriors and more a land of monasteries—vast, wealthy, and untaxed. The treasury ran dry, and with it, Bagan’s strength.
                            </h3></AutoShow>
                            <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">Then came the Mongols. In 1277, Kublai Khan’s forces clashed with Bagan’s armies at the Battle of Ngasaunggyan. The once-mighty soldiers of Bagan, unprepared for the storm of steel that descended upon them, were crushed. King Narathihapate, whose arrogance had led to war, fled his throne, earning the infamous title: "Tayok Pyay Min"—the King Who Fled from the Chinese."</h3></AutoShow>
                        </div>
                        <img src="/assets/riding-horse.jpg" alt="Riding horse" className="w-56 sm:w-1/4 h-auto sm:h-72 lg:h-auto object-cover object-[50%_25%] rounded-lg shadow-lg shadow-slate-800 border-2 border-grey transition ease-in hover:scale-105"/>
                    </div>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">By 1287, the Mongols marched upon Bagan itself. Some say the city was sacked, its temples defiled, its people scattered. Others claim the Mongols, uninterested in a land of monks and ruins, left without bloodshed. But the truth was undeniable—Bagan’s golden age had ended.
                    </h3></AutoShow>
                    <AutoShow><h3 className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">The once-glorious empire crumbled, its throne left vacant, its lands divided among rival warlords. The city that had once been the jewel of Myanmar became a whisper of its former self—a kingdom lost to time, its temples standing as silent witnesses to its fall.</h3></AutoShow>
                </div>
            </section>
            <section id="history-lore" className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-4/5 font-vintage my-5 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                    <AutoShow><h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-4 font-semibold">Tales & Lores</h2></AutoShow>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl font-semibold">I. The Legend of King Anawrahta and the White Elephant</h3></AutoShow>
                    <AutoShow><p className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">King Anawrahta (the founder of the Bagan Empire) was gifted a sacred white elephant carrying a Buddhist scripture (Tripitaka) from Thaton. The elephant wandered and kneeled at a spot, which Anawrahta took as a divine sign to build Shwezigon Pagoda, one of Bagan’s most revered temples.</p></AutoShow>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold">II. The Cursed Love of Queen Thanbula</h3></AutoShow>
                    <AutoShow><p className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">Thanbula, the wife of King Kyansittha, was believed to have had an affair with Prince Rajakumar, Kyansittha's son from another wife. A prophecy foretold that she would bear a child who would become a king. Fearing this, Kyansittha forbade her from having children. However, some versions say she secretly bore a son who later became a king of another land. This tale adds a mysterious, tragic element to Bagan's royal history.</p></AutoShow>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold">III. The Vanishing Bell of Dhammayangyi Temple</h3></AutoShow>
                    <AutoShow><p className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">King Narathu, a tyrannical ruler, ordered Dhammayangyi Temple to be built with bricks so tightly fitted that even a needle could not pass through the cracks. He brutally punished workers if they failed. Legend says that after he was assassinated, a massive bronze bell meant for the temple mysteriously disappeared, believed to have been swallowed by the Irrawaddy River.</p></AutoShow>
                    <AutoShow><h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold">IV. The Spirit of Popa Medaw (Mother of Mount Popa)</h3></AutoShow>
                    <AutoShow><p className="py-2 text-base sm:tex-lg md:text-xl md:font-medium">Mount Popa, near Bagan, is considered the home of Myanmar’s most powerful nats (spirits). According to legend, Popa Medaw (Mother of Popa) was a flower-eating ogress named Me Wunna. She fell in love with a human prince and bore two sons. When the king ordered her husband’s execution, her sons later became powerful guardian spirits worshipped across Myanmar.</p></AutoShow>
                </div>
            </section>
        </>
    )
}