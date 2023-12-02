import { Chats, Clock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Blogs } from "../utils/Data";

const TopStory = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-8 lg:px-28 md:px-8 px-6 md:mt-16 mt-12">
      <h1 className="font-bold md:text-4xl text-2xl capitalize text-gray-100">
        Top Stories
      </h1>

      <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {Blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col h-auto gap-2 bg-gray-900">
            <div className="w-full h-[250px]">
              <img
                src={blog.img}
                className="w-full h-full object-cover object-top"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-4 px-5 pt-4 pb-6">
              <div className="flex gap-2">
                {blog.tag.map((tg, index) => (
                  <span
                    key={index}
                    className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100"
                  >
                    {tg}
                  </span>
                ))}
              </div>
              <Link to={`/latestnews/${blog.id}`} className="text-gray-100">
                {blog.title}
              </Link>

              <div className="flex gap-3">
                <span className="flex gap-1 text-gray-300 text-xs items-center">
                  <Clock size={18} weight="light" />
                  {blog.time}
                </span>
                <span className="flex gap-1 text-gray-300 text-xs items-center">
                  <Chats size={18} weight="light" />
                  {blog.comment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default TopStory;
