"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navlinks = ({link}) => {
    const pathname = usePathname();
    return (
        <Link href={link.path} className={`rounded p-1 ${pathname===link.path} && "bg-black text-white"`}>
            {link.name}
        </Link>
    )
}
