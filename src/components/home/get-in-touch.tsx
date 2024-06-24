export default function GetInTouch() {
  return <div className="flex flex-col px-8 xl:px-64 lg:px-44 md:px-30 py-32 gap-8" id="contact-me">
    <div className="flex flex-row w-full h-full">
      <p className="text-4xl font-bold text-average-yellow">Get in touch</p>
    </div>
    <div className="flex flex-col md:flex-row w-full h-full gap-8">
      <input type="text" placeholder="Your Name" className="w-full py-4 outline-none rounded-none  border-b-2 bg-transparent" />
      <input type="email" placeholder="Your Email" className="w-full py-4 outline-none rounded-none  border-b-2 bg-transparent" />
      <input type="tel" placeholder="Your Phone Number" className="w-full py-4 outline-none rounded-none  border-b-2 bg-transparent" />
    </div>
    <div className="flex flex-row w-full h-full gap-8">
      <textarea placeholder="Your Message" className="w-full py-4 outline-none rounded-none  border-b-2 bg-transparent" />
    </div>
    <div className="flex flex-row w-full h-full gap-8">
      <button className="bg-average-yellow text-black font-bold text-lg py-4 px-8 hover:border-r-4 hover:border-b-4  border-gray-500 active:border-0 active:border-l-4 active:border-t-4 ">Shoot It!</button>
    </div>
  </div>
}