"use client"

import {NavigationMenu} from "@/components/ui/navigation-menu";
import Avatar from "@/components/profile/Avatar";

export default function Header() {
    return (
        <NavigationMenu className="h-[69px] max-w-none w-full p-[1rem]">
            <div className="flex flex-row grid-rows-3 w-full justify-between items-center">
                <div className="h-[49px] flex grid-row items-center">
                    <a href="/" className="h-[49px] flex grid-row items-center">
                        <div className="font-[Teko] text-2xl">
                            W/S Studio
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