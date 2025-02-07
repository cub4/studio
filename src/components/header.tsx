import {useAuth} from "@/context/AuthContext";
import {NavigationMenu} from "@/components/ui/navigation-menu";

export default function Header() {
    const {logout, user} = useAuth();
    return (
        <NavigationMenu className="h-12">

        </NavigationMenu>
    )
}