import { Chats, Clock } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { LaLiga } from "../utils/Laliga"


const Laliga = () => {
    return (
        <section className="w-full h-auto flex flex-col gap-8 md:px-6 px-28 mt-16">
            <h1 className="font-bold text-4xl capitalize text-gray-100">La Liga</h1>
            <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    LaLiga.map(trends => (
                        <div key={trends.id} className="flex flex-col h-auto gap-2 bg-gray-900">
                            <div className="w-full h-[250px]">
                                <img src={trends.img} className="w-full h-full object-cover object-top" alt="image" />
                            </div>
                            <div className="flex flex-col gap-4 px-5 pt-4 pb-6">
                                <div className="flex gap-2">
                                    {
                                        trends.tag.map((tg, index) => (
                                            <span key={index} className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100">
                                                {tg}
                                            </span>
                                        ))
                                    }
                                </div>
                                <Link to={`/laliga/${trends.id}`} className="text-gray-100">{trends.title}</Link>

                                <div className="flex gap-3">
                                    <span className="flex gap-1 text-gray-300 text-xs items-center">
                                        <Clock size={18} weight="light" />
                                        {trends.time}
                                    </span>
                                    <span className="flex gap-1 text-gray-300 text-xs items-center">
                                        <Chats size={18} weight="light" />
                                        {trends.comment}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </main>
        </section>
    )
}

export default Laliga