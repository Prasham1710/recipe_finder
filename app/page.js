import Link from "next/link"
export default function Home() {
  return (
  <div className="h-screen w-full ">
    <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1> Explore the food around the world</h1>
      <Link
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
          href="/types"
        >
          List of Cuisines
        </Link>
    </div>
  </div>
  )
}
