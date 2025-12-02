import Link from "next/link";
import { Badge } from "../ui/badge";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 w-full sm:max-w-5xl sm:mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <h2 className="font-mono text-xl bg-zinc-800 text-white px-2">J</h2>
      </Link>

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
