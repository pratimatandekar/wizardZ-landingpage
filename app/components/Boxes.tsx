import React from "react";
import { ArrowRight } from "lucide-react"; // using lucide icons

function Boxes() {
  return (
    <div className="mx-20 mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Box 1 */}
      <div className="border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold bg-[#BEFD68] px-3 py-2 rounded-md inline-block mb-4">
          Search Engine <br /> Optimization
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
          harum ullam commodi provident in quis maiores, reprehenderit ea fugit,
          expedita libero deserunt eius atque incidunt explicabo cupiditate
          voluptatem quam adipisci consequatur totam excepturi. Aliquam quod
          dolorem delectus odit at.
        </p>
        <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          Learn more <ArrowRight size={18} />
        </button>
      </div>

      {/* Box 2 */}
      <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold bg-white text-black px-3 py-2 rounded-md inline-block mb-4">
          Content Marketing
        </h3>
        <p className="text-white leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
          harum ullam commodi provident in quis maiores, reprehenderit ea fugit,
          expedita libero deserunt eius atque incidunt explicabo cupiditate
          voluptatem quam adipisci consequatur totam excepturi. Aliquam quod
          dolorem delectus odit at.
        </p>
        <button className="bg-white text-black flex items-center gap-2 px-5 py-2 bg-black  rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          Learn more <ArrowRight size={18} />
        </button>
      </div>
       {/* Box 2 */}
      <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold bg-white text-black px-3 py-2 rounded-md inline-block mb-4">
          Content Marketing
        </h3>
        <p className="text-white leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
          harum ullam commodi provident in quis maiores, reprehenderit ea fugit,
          expedita libero deserunt eius atque incidunt explicabo cupiditate
          voluptatem quam adipisci consequatur totam excepturi. Aliquam quod
          dolorem delectus odit at.
        </p>
        <button className="bg-white text-black flex items-center gap-2 px-5 py-2 bg-black  rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          Learn more <ArrowRight size={18} />
        </button>
      </div>
       {/* Box 1 */}
      <div className="border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold bg-[#BEFD68] px-3 py-2 rounded-md inline-block mb-4">
          Search Engine <br /> Optimization
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
          harum ullam commodi provident in quis maiores, reprehenderit ea fugit,
          expedita libero deserunt eius atque incidunt explicabo cupiditate
          voluptatem quam adipisci consequatur totam excepturi. Aliquam quod
          dolorem delectus odit at.
        </p>
        <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          Learn more <ArrowRight size={18} />
        </button>
      </div>

      {/* Box single */}
      <div className="bg-[#F3F3F3]  col-span-1 md:col-span-2 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row justify-between gap-6">
        <div className="" >
            <p className="text-2xl">Let's make thigs happen</p>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Repudiandae atque inventore nam dolores sapiente libero eius <br />
              voluptate amet quia sequi ipsa molestiae, et quasi eos totam <br />
               dignissimos nulla facere in! Consequuntur praesentium tenetur ipsa debitis, <br />
                consectetur sit nulla doloremque nihil.</p>
            <button className='bg-black mt-4 cursor-pointer text-white py-4 px-4 rounded-md'>Book a consectetur</button>
       
        </div>
        <div>
        
        </div>
      </div>
    
    </div>
    
  );
}

export default Boxes;
