"use client";

import { useAccount } from "wagmi";
import Image from "next/image";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center bg-white">
      <header className="w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://github.com/thebidsbot/thebid/blob/e0435f7b8c34ad798441f424cf4814e4f48e0159/thebid.png" 
            alt="icon"
            width={50} // Set the desired width
            height={50} // Set the desired height
          />
          <div className="hidden sm:inline text-xl font-bold">the bid app</div>
        </div>
        <div className="flex items-center">
          <w3m-button />
        </div>
      </header>
    </main>
  );
}
