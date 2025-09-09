import { ArrowRight,Heart  } from "lucide-react";
import Logo from "./components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* Navbar */}
      <div className="flex cursor-pointer flex-col md:flex-row justify-between items-center mx-auto max-w-7xl px-6 py-6 text-lg font-medium">
        <Logo />
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <h1>About us</h1>
          <h1>Services</h1>
          <h1>Use Case</h1>
          <h1>Pricing</h1>
          <h1>Blog</h1>
        </div>
        <div className="mt-4 md:mt-0 bg-[#F3F3F3] px-5 py-2 border-2 rounded-lg cursor-pointer">
          <h1 >Request a demo</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 mt-16 gap-10">
        <div className="flex flex-col space-y-6 text-left">
          <p className="text-4xl font-medium">
            Nagivate the <br /> digital landspace <br /> for success
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptatibus eum laboriosam velit minus fugit voluptas nam dicta
            alias, corrupti minima amet soluta a exercitationem voluptate, fuga
            nihil. Reiciendis, ducimus adipisci!
          </p>
          <button className="bg-black cursor-pointer text-white py-3 px-6 rounded-md w-fit">
            Book a consectetur
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/image.png" alt="hero" width={392} height={308} />
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 px-6 mt-20">
        <Image src="/amazon.png" alt="amazon" width={160} height={80} className="mt-4" />
        <Image src="/dribbble.jpg" alt="dribbble" width={160} height={80} className="mb-4" />
        <Image src="/hub-spot.png" alt="hubspot" width={160} height={80} />
        <Image src="/notion.png" alt="notion" width={160} height={80} />
        <Image src="/netflix-1.png" alt="netflix" width={160} height={80} />
        <Image src="/zoom.png" alt="zoom" width={160} height={80} />
      </div>

      {/* Services Header */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mt-20 px-6">
        <p className="bg-[#BEFD68] rounded-md px-4 text-2xl font-semibold w-fit">
          Services
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, <br />
          blanditiis quod! Veritatis beatae est delectus nobis qui et! Aut,
          cupiditate.
        </p>
      </div>

      {/* Services Boxes */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Box 1 */}
        <div className="border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold bg-[#BEFD68] px-3 py-2 rounded-md inline-block mb-4">
            Search Engine <br /> Optimization
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquid harum ullam commodi provident in quis maiores, reprehenderit
            ea fugit, expedita libero deserunt eius atque incidunt explicabo
            cupiditate voluptatem quam adipisci consequatur totam excepturi.
            Aliquam quod dolorem delectus odit at.
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
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquid harum ullam commodi provident in quis maiores, reprehenderit
            ea fugit, expedita libero deserunt eius atque incidunt explicabo
            cupiditate voluptatem quam adipisci consequatur totam excepturi.
            Aliquam quod dolorem delectus odit at.
          </p>
          <button className="bg-white text-black flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
            Learn more <ArrowRight size={18} />
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold bg-white text-black px-3 py-2 rounded-md inline-block mb-4">
            Content Marketing
          </h3>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquid harum ullam commodi provident in quis maiores, reprehenderit
            ea fugit, expedita libero deserunt eius atque incidunt explicabo
            cupiditate voluptatem quam adipisci consequatur totam excepturi.
            Aliquam quod dolorem delectus odit at.
          </p>
          <button className="bg-white text-black flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
            Learn more <ArrowRight size={18} />
          </button>
        </div>

        {/* Box 4 */}
        <div className="border-2 border-black rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold bg-[#BEFD68] px-3 py-2 rounded-md inline-block mb-4">
            Search Engine <br /> Optimization
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquid harum ullam commodi provident in quis maiores, reprehenderit
            ea fugit, expedita libero deserunt eius atque incidunt explicabo
            cupiditate voluptatem quam adipisci consequatur totam excepturi.
            Aliquam quod dolorem delectus odit at.
          </p>
          <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            Learn more <ArrowRight size={18} />
          </button>
        </div>

        {/* Box single full width */}
        <div className="bg-[#F3F3F3] col-span-1 md:col-span-2 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-2xl">Let's make thigs happen</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Repudiandae atque inventore nam dolores sapiente libero eius <br />
              voluptate amet quia sequi ipsa molestiae, et quasi eos totam <br />
              dignissimos nulla facere in! Consequuntur praesentium tenetur ipsa
              debitis, consectetur sit nulla doloremque nihil.
            </p>
            <button className="bg-black mt-4 cursor-pointer text-white py-4 px-6 rounded-md">
              Book a consectetur
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Header */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mt-20 px-6">
        <p className="bg-[#BEFD68] rounded-md px-4 text-2xl font-semibold w-fit">
          Case Study
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,{" "}
          <br />
          blanditiis quod! Veritatis beatae est delectus nobis qui et! Aut,
          cupiditate.
        </p>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-6 my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-black text-white flex flex-col gap-4 p-10 rounded-xl">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            facilis aliquid a consequuntur temporibus atque facere magni,
            dignissimos natus consectetur!
          </p>
          <p className="text-[#BEFD68] cursor-pointer">Learn more</p>
          <hr className="border-gray-600" />
        </div>

        <div className="bg-black text-white flex flex-col gap-4 p-10 rounded-xl">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            facilis aliquid a consequuntur temporibus atque facere magni,
            dignissimos natus consectetur!
          </p>
          <p className="text-[#BEFD68] cursor-pointer">Learn more</p>
          <hr className="border-gray-600" />
        </div>

        <div className="bg-black text-white flex flex-col gap-4 p-10 rounded-xl">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            facilis aliquid a consequuntur temporibus atque facere magni,
            dignissimos natus consectetur!
          </p>
          <p className="text-[#BEFD68] cursor-pointer">Learn more</p>
          <hr className="border-gray-600" />
        </div>
      </div>
       <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        
        {/* Left Side - Attribution */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://pratimatandekar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 hover:text-black transition-colors"
          >
            Pratima Tandekar
          </a>
          . Built with Next.js & Tailwind CSS.
        </p>

        {/* Right Side - Made with love */}
        <div className="flex items-center justify-center text-sm text-gray-600">
          <span className="mr-2">Made with</span>
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        </div>
      </div>
    </footer>
    </div>
  );
}
