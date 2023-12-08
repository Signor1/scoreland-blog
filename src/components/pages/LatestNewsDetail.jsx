import { Link, useParams } from "react-router-dom";
import { Blogs } from "../utils/Data";
import { Chats, Clock } from "@phosphor-icons/react";

const LatestNewsDetail = () => {
  const { id } = useParams();
  const num = parseInt(id);

  const filtered = Blogs.filter((blog) => blog.id === num);

  const related = Blogs.filter((blog) => blog.id !== num);

  const [
    {
      title,
      img,
      tag,
      time,
      newsOne,
      newsTwo,
      newsThree,
      newsFour,
      newsFive,
      img2,
      title2,
      img3,
      title3,
      newsSix,
      comment,
    },
  ] = filtered;

  return (
    <section className="w-full h-auto flex flex-col gap-8 lg:px-20 md:px-8 px-6 md:mt-16 mt-12">
      <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="flex flex-col col-span-2 h-auto gap-2 ">
          <h1 className="font-bold md:text-4xl text-2xl capitalize text-gray-100">
            {title}
          </h1>
          <div className="w-full h-[250px]">
            <img
              src={img}
              className="w-full h-full object-cover object-top"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-4 px-5 bg-gray-900 pt-4 pb-6">
            <div className="flex gap-2">
              {tag.map((tg, index) => (
                <span
                  key={index}
                  className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100"
                >
                  {tg}
                </span>
              ))}
            </div>

            <h4 className="text-gray-100">{newsOne}</h4>
            <div className="w-full h-[250px]">
              <img
                src={img2}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
            <h1 className="font-bold md:text-4xl text-2xl capitalize text-gray-100">
              {title2}
            </h1>
            <div className="text-gray-100">{newsTwo}</div>
            <div className="text-gray-100">{newsThree}</div>
            <div className="text-gray-100">{newsFour}</div>
            <div className="text-gray-100">{newsFive}</div>

            <div className="w-full h-[250px]">
              <img
                src={img3}
                className="w-full h-full object-cover object-top"
                alt="image"
              />
            </div>
            <h1 className="font-bold md:text-4xl text-2xl capitalize text-gray-100">
              {title3}
            </h1>
            <div className="text-gray-100">{newsSix}</div>

            <div className="flex gap-3">
              <span className="flex gap-1 text-gray-300 text-xs items-center">
                <Clock size={18} weight="light" />
                {time}
              </span>
              <span className="flex gap-1 text-gray-300 text-xs items-center">
                <Chats size={18} weight="light" />
                {comment}
              </span>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold md:text-3xl text-xl capitalize text-gray-100">
            Related Posts
          </h1>
          {related.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col h-auto gap-2 bg-gray-900"
            >
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
        </div>
      </main>
    </section>
  );
};

export default LatestNewsDetail;
