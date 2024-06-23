import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return <div className="flex flex-row justify-between w-full px-12 xl:px-64 lg:px-44 md:px-30 py-8">
    <div className="flex items-center">
      <Image src="" alt="" className="h-8 w-8" />
      <span className="ml-2 font-bold text-xl">Parjanya Modi</span>
    </div>
    <div className="flex items-center space-x-8">
      <Link href="/" className="text-xl">Home</Link>
      <Link href="/blogs" className="text-xl">Blogs</Link>
      <Link href="/#contact-me" className="text-xl">Contact Me</Link>
    </div>
  </div>
}
