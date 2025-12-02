"use client";
import Image from "next/image";
import Link from "next/link";
import vultureIcon from "@/assets/vulture.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 w-full sm:max-w-5xl sm:mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <Image src={vultureIcon} alt="Vulture icon" width={20} />
        <h2 className="font-bold text-xl">John lira</h2>
      </Link>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 border border-yellow-500/20">
        <span className="text-sm">🚧</span>
        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
          In development
        </span>
      </div>
      {/*For now, just git link, in the future i add pages*/}
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link
              className="font-medium"
              href={"https://github.com/johnliradev"}
              target="_blank"
            >
              <p>Github</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
