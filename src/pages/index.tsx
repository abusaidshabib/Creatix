import Link from "next/link";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";


export default function Home() {
  return (
    <div>
      {/* <Link href="/check" className="bg-primary-700 py-2 px-5 text-white">Check</Link> */}
      <Price></Price>
      <Portfolio></Portfolio>
    </div>
  )
}