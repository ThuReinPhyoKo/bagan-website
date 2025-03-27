export default function Culture (){
    return (
        <>
            <section className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/assets/background/culture-bg.jpg')"}}>
                <div className="w-3/4 sm:w-[60%] md:w-[50%] lg:w-[40%] flex flex-wrap justify-center bg-black rounded-xl p-2 md:p-5 border-2 border-white items-center">
                    <img src="/assets/svg/construction-worker.svg" alt="worker" className='w-12 h-12 mx-2' />
                    <img src="/assets/svg/hammer.svg" alt="hammer" className='w-8 h-8 animate-hammering mb-4' />
                    <img src="/assets/svg/setting.svg" alt="setting" className='w-11 h-11 animate-spin-slow mt-5'/>
                    <div className='flex flex-col items-center justify-around mt-2'>
                        <h1 className='font-semibold text-yellow-200 text-sm sm:text-lg md:text-xl'>This page is still under construction.</h1>
                        <p className='font-semibold text-yellow-200 text-sm sm:text-base md:text-lg'>Thank you for coming....</p>
                    </div>
                </div>
            </section>
        </>
    )
}