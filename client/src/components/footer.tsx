import Link from "next/link"

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between md:items-start
    bg-gray-800 p-8 rounded-lg'>
        <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="Logo" width={36} height={36} className="
        w-6 h-6"/>
        <p className="hidden md:block text-md font-medium tracking-wider">Ecomm</p>
        </Link> 
        <p className="text-sm text-gray-400">© 2026 Ecomm</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">HomePage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Produts</p>
            <Link href="/">All products</Link>
            <Link href="/">New Arrival</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Sale</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">HomePage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer