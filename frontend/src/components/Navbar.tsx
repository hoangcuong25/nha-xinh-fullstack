"use client"

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { CiSearch } from "react-icons/ci";

const col1: { title: string; href: string; }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
    },
]

const Navbar = () => {
    return (
        <div className='mx-3.5 sm:mx-7 mt-5 flex justify-between items-center border-b border-gray-200 pb-3.5'>
            <div className='flex gap-5'>
                <div className='flex items-center gap-3.5'>
                    <IoMenu className='text-3xl' />
                    <Image src='/logo-nhaxinh-25nam-final.png' width='150' height='100' alt="logo" />
                </div>

                <NavigationMenu className='text-sm'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='hover:text-yellow-400'>SẢN PHẨM</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='hover:text-yellow-400'>PHÒNG</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {col1.map((col1) => (
                                        <NavigationMenuLink className='flex gap-2 items-center'
                                            key={col1.title}
                                            title={col1.title}
                                            href={col1.href}
                                        >
                                        </NavigationMenuLink>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className='hover:text-yellow-400 mx-2'>
                                    BỘ SƯU TẬP
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className='hover:text-yellow-400 mx-2'>
                                    THIẾT KẾ NỘI THẤT
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className='hover:text-yellow-400 mx-2'>
                                    CỬA HÀNG 360 ĐỘ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className='hover:text-yellow-400 mx-2'>
                                    GÓC CẢM HỨNG
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className='relative flex items-center '>
                <input type="text" placeholder="Tìm sản phẩm" className='w-60 h-11 pl-3 pr-9 border border-gray-300 bg-gray-100 rounded-3xl focus:outline-none' />
                <CiSearch className='text-2xl absolute top-2.5 right-2' />
            </div>
        </div>
    )
}

export default Navbar
