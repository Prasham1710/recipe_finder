import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 bg-slate-300'>
        <div>
            <Link href="/">
                <h1 className=' text-purple text-blue-700 font-bold text-5xl text-center">'> Foode </h1>
            </Link>
        </div>
    </div>
  )
}

export default Header