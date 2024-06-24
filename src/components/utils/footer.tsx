export default function Footer() {
  return <div className="flex flex-row w-full h-full items-center px-8 xl:px-64 lg:px-44 md:px-30 py-4">
    <p className="text-gray-500">© {(new Date()).getFullYear()} Parjanya Modi. All rights reserved.</p>
  </div>
}