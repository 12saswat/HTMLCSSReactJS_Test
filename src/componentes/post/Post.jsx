import React from "react";

const Post = () => {
  return (
    <div className="post ">
      <center>
        <div className="pt-28 leading-10">
          {" "}
          <p className="text-5xl w-11/12 font-medium ">
            Have you ever posted any photo on social media?
          </p>
          <p className="text-4xl text-zinc-600 mt-10 leading-relaxed w-9/12">
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do
            eiumod tempor incididunt ut labore
          </p>
        </div>
      </center>
      <div className="mt-24 flex">
        <div className="left">
          <div className=" px-24  mt-14 ">
            <p className="text-2xl  font-bold ">Sed ut perspiciatis</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do
              eiumod tempor incididunt ut labore
            </p>
          </div>
          <div className="left px-24 mt-14 ">
            <p className="text-2xl  font-bold ">Lorem ipsum dolor</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Amet, consectetur adipiscing elit, sed do eiusmod tempor
              incidedunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="left px-24 mt-14 ">
            <p className="text-2xl font-bold ">Nemo enim ipsam</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro Quisquam est, qui dolorem.
            </p>
          </div>
        </div>
        <div className="right">
          <img src="././public/images/image.png" alt="" className="pr-24" />
        </div>
      </div>
    </div>
  );
};

export default Post;
