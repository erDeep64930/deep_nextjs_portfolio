"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: 'portfolio' },
  { name: 'Contact', path: '/contact' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-42'>
      {/* logo */}
      <div className='hidden md:flex gap-6'>
        {links.map(({ name, path }) => {
          return (
            <Link key={name} href={path} >
              <span className='text-white'>{name}</span>
            </Link>
          )
        })

        }
      </div>
      {/* this is for social media  */}
      <div>
        <Link href="#">
          <Image src="/github.png" width={24} height={24} />
        </Link>
      </div>
      <div className='md:hidden'>
        <Link href="/" className='text-sm bg-black rounded-md  font-semibold mr-1 flex items-center px-2 py-1'>
          <span className='text-white'>Deepak</span>
          <span className=' rounded bg-white text-black font-semibold ml-1 p-1'>Kumar</span>
        </Link>

      </div>
      {/* responsive button */}
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(() => setOpen((prev) => !prev))}>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-8 h-1 bg-white rounded'></div>
          <div className='w-6 h-1 bg-white rounded'></div>
        </button>
        {/* menu list  */}
        {open && (<div className='absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map(({ name, path }) => {
            return (
              <Link key={name} href={path}>
                <span className='text-white'>{name}</span>
              </Link>
            )
          }
          )}
        </div>)}


      </div>
      {/* right part */}
      <div>2</div>
    </div>
  )
}
