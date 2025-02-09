"use client"

import {NavigationMenu} from "@/components/ui/navigation-menu";
import Avatar from "@/components/profile/Avatar";
import Image from "next/image";
import logo from "../../public/logo.png"

export default function Header() {
    return (
        <NavigationMenu className="h-[69px] max-w-none w-full p-[1rem]">
            <div className="flex flex-row grid-rows-3 w-full justify-between items-center">
                <div className="h-[49px] flex grid-row items-center">
                    <a className="h-[49px] flex grid-row items-center">
                        <Image className="h-full max-h-full w-auto" src={logo} alt="Logo" />
                        <div>
                            Studio
                        </div>
                    </a>
                </div>
                <div className="h-[49px] flex grid-row items-center">

                </div>
                <div className="h-[49px] flex grid-row items-center">
                    <Avatar />
                </div>
            </div>
        </NavigationMenu>
    )
}