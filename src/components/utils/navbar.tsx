export default function Navbar() {
  return <div className="flex flex-row justify-between w-full px-24 py-12">
    <div className="flex items-center">
      <img src="/logo.svg" alt="" className="h-8" />
      <span className="ml-2 font-bold text-xl">Parjanya Modi</span>
    </div>
    <div className="flex items-center space-x-8">
      <a href="" className="text-xl">Home</a>
      <a href="" className="text-xl">Blogs</a>
      <a href="" className="text-xl">Contact Me</a>
    </div>
  </div>
}
