import {NavigationMenu} from "@/components/ui/navigation-menu";
import Avatar from "@/components/profile/Avatar";

export default function Header() {
    return (
        <NavigationMenu className="h-[69px] max-w-none w-full p-[1rem]">
            <div className="flex flex-row grid-rows-3 w-full justify-between items-center">
                <div>
                    <p>test</p>
                </div>
                <div>

                </div>
                <div>
                    <Avatar />
                </div>
            </div>
        </NavigationMenu>
    )
}