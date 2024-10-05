import React from "react";

const Make = () => {
  return (
    <div>
      <center>
        <div className="pt-28 leading-10">
          {" "}
          <p className="text-5xl w-11/12 font-medium ">
            Make your photos more stylish
          </p>
          <p className="text-4xl text-zinc-600 mt-10 leading-relaxed w-9/12">
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do
            eiumod tempor incididunt ut labore
          </p>
        </div>
      </center>

      <div className="flex justify-evenly">
        <div className="border w-3/12">
          <img src="././public/images/image1.png" alt="" />
          <div className="p-12">
            <p className="text-2xl  font-bold ">Sed ut perspiciatis</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do
              eiumod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div className="border w-3/12">
          <img src=" ././public/images/image2.png" alt="" />
          <div className="p-12">
            <p className="text-2xl  font-bold ">Lorem ipsum dolor</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Amet, consectetur adipiscing elit, sed do eiusmod tempor
              incidedunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="border w-3/12">
          <img src=" ././public/images/image3.png" alt="" />
          <div className="p-12">
            <p className="text-2xl font-bold ">Nemo enim ipsam</p>
            <p className="text-md text-zinc-600 mt-8 leading-relaxed w-11/12">
              Consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro Quisquam est, qui dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Make;
