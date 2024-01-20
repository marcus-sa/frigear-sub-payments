import GitHub from "@/components/icons/GitHub";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span>FRIGEAR</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Hjem
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Info
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Historie
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
                Jura
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                GDPR
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Brugerpolitik
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/s1xp4c/frigear-sub-payments"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-zinc-900">
        <div>
          <span>&copy; {new Date().getFullYear()} Foreningen Frigear</span>
        </div>
        <div className="flex items-center">
          <span className="text-white">App udviklet af</span>
          <a
            href="https://block-folio.netlify.app/"
            aria-label="Portfolio link Link"
          >
            <Image
              src="/six_logo.png"
              width={25}
              height={25}
              alt="Blockstarter Logo"
              className="inline-block mx-3 text-white"
            />
          </a>
          <span className="text-white">Morten Six</span>
        </div>
      </div>
    </footer>
  );
}
