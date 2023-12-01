import Hero from "../../assets/hero.jpg";

const HeroSection = () => {
    return (
        <section className="w-full md:h-[450px] h-[300px] relative">
            <img src={Hero} alt="banner" className="w-full h-full object-cover object-top" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end md:pl-16 md:pb-10 pl-4 pb-4 bg-gray-950/60">
                <h1 className="md:text-5xl text-3xl uppercase font-bold text-gray-100">EPL Top Moments</h1>
            </div>
        </section>
    )
}

export default HeroSection