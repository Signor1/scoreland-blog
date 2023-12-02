import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../utils/Client";
import { Chats, Clock } from "@phosphor-icons/react";
import Loader from "../../loader/Loader";

const TransferDetails = () => {
  const [eachTransfer, setEachTransfer] = useState([]);
  const [transfer, setTransfer] = useState([]);
  const [isTransferLoading, setIsTransferLoading] = useState(false);
  const { id } = useParams();
  const string = id.toString();
  const related = transfer.filter((each) => each.sys.id !== string);

  useEffect(() => {
    const getEntriesById = async () => {
      try {
        const entry = await client.getEntry(id);
        console.log(entry);
        setEachTransfer(entry || []);
        setIsTransferLoading(true);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getEntriesById();
  }, [id]);
  console.log(eachTransfer);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "scoreBlog",
        });
        console.log(entries);
        setTransfer(entries.items || []);
        setIsTransferLoading(true);
        console.log(entries.items);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <section className="w-full h-auto flex flex-col gap-8 lg:px-28 md:px-8 px-6 md:mt-16 mt-12">
      <Link
        to={"/Transfers"}
        className="font-bold md:text-4xl text-2xl capitalize text-gray-100"
      >
        Transfers
      </Link>
      {isTransferLoading ? (
        <>
          <div className=" w-full h-auto lg:flex justify-between align-middle gap-6">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16 lg:h-8">
              <main className="flex flex-col h-auto gap-2 bg-gray-900">
                <div className="w-full h-[250px]">
                  <img
                    src={eachTransfer?.fields?.image?.fields?.file?.url}
                    className="w-full h-full object-cover object-top"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-4 px-5 pt-4 pb-6">
                  <div className="flex gap-2">
                    <span className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100">
                      {eachTransfer?.fields?.tag?.content[0]?.content[0]?.value}
                    </span>
                  </div>
                  <Link to={`/transfers/`} className="text-gray-100">
                    {eachTransfer?.fields?.title?.content[0]?.content[0]?.value}
                  </Link>
                  <div className="flex flex-col gap-4 ">
                    <div className="text-gray-100 text-3xl capitalize">
                      {eachTransfer?.fields?.newsHeader} ?
                    </div>
                    <div className="text-gray-100">
                      {" "}
                      {eachTransfer?.fields?.newsDetails}{" "}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex gap-1 text-gray-300 text-xs items-center">
                      <Clock size={18} weight="light" />
                      {eachTransfer?.fields?.time}
                    </span>
                    <span className="flex gap-1 text-gray-300 text-xs items-center">
                      <Chats size={18} weight="light" />
                      {eachTransfer?.fields?.comment}
                    </span>
                  </div>
                </div>
              </main>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="font-bold md:text-3xl text-xl capitalize text-gray-100">
                Related Posts
              </h1>
              {related.map((post) => (
                <main
                  key={post.sys.id}
                  className="flex flex-col h-auto gap-2 bg-gray-900"
                >
                  <div className="w-full h-[250px]">
                    <img
                      src={post.fields.image.fields.file.url}
                      className="w-full h-full object-cover object-top"
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-5 pt-4 pb-6">
                    <div className="flex gap-2">
                      <span className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100">
                        {post.fields.tag &&
                          post.fields.tag.content &&
                          post.fields.tag.content[0].content[0].value}
                      </span>
                    </div>
                    <Link
                      to={`/transferDetails/${post.sys.id}`}
                      className="text-gray-100"
                    >
                      {post.fields.title &&
                        post.fields.title.content &&
                        post.fields.title.content[0].content[0].value}
                    </Link>
                    <div>
                      <p>
                        {post.fields.description &&
                          post.fields.description.content &&
                          post.fields.description.content[0].value}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex gap-1 text-gray-300 text-xs items-center">
                        <Clock size={18} weight="light" />
                        {post.fields.time}
                      </span>
                      <span className="flex gap-1 text-gray-300 text-xs items-center">
                        <Chats size={18} weight="light" />
                        {post.fields.comment}
                      </span>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default TransferDetails;
