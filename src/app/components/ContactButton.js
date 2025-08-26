"use client";

import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactButton() {
  const router = useRouter();

  return (
    <button
      className="group flex items-center gap-3 border border-white text-white px-6 py-2.5 rounded-full text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-black hover:cursor-pointer mx-auto mt-10 lg:mt-15 mb-5"
      onClick={() => router.push("/contact-us")}
    >
      Contact Us
      <span className="bg-white text-black rounded-full p-1 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
        <FiArrowUpRight size={14} />
      </span>
    </button>
  );
}
