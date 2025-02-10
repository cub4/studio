"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {FiLogOut, FiSettings, FiUser} from "react-icons/fi";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {useAuth} from "@/context/AuthContext";

export default function StudioSidebar() {
    const {logout, loading, user} = useAuth();
    if(loading) return (
        <div></div>
    )
    return (
       <SidebarProvider>
           <Sidebar>
               <SidebarContent>

               </SidebarContent>
               <SidebarFooter>
                   <SidebarMenu>
                       <SidebarMenuItem>
                           <AlertDialog>
                               <DropdownMenu>
                                   <DropdownMenuTrigger asChild>
                                       <SidebarMenuButton size="lg">
                                           <div className="flex flex-row gap-3">
                                               <Avatar className="cursor-pointer">
                                                   <AvatarImage src={user?.photoURL??""} />
                                                   <AvatarFallback>U</AvatarFallback>
                                               </Avatar>
                                               <div className="w-auto">
                                                   <div className="font-medium">
                                                       <div className="text-xm text-nowrap overflow-hidden">{user?.displayName}</div>
                                                       <div
                                                           className="text-muted-foreground text-xs overflow-hidden">{user?.email}</div>
                                                   </div>
                                               </div>
                                           </div>
                                       </SidebarMenuButton>
                                   </DropdownMenuTrigger>
                                   <DropdownMenuContent className="w-52">
                                       <DropdownMenuLabel>
                                           <div className="font-medium">
                                               <div className="text-xm text-nowrap overflow-hidden">{user?.displayName}</div>
                                               <div className="text-muted-foreground text-xs text-nowrap overflow-hidden">{user?.email}</div>
                                           </div>
                                       </DropdownMenuLabel>
                                       <DropdownMenuSeparator />
                                       <DropdownMenuGroup>
                                           <DropdownMenuItem>
                                               <FiUser />Profile
                                           </DropdownMenuItem>
                                           <DropdownMenuItem>
                                               <FiSettings />Settings
                                           </DropdownMenuItem>
                                       </DropdownMenuGroup>
                                       <DropdownMenuSeparator />
                                       <AlertDialogTrigger asChild>
                                           <DropdownMenuItem><FiLogOut />Logout</DropdownMenuItem>
                                       </AlertDialogTrigger>
                                   </DropdownMenuContent>
                               </DropdownMenu>
                               <AlertDialogContent>
                                   <AlertDialogHeader>
                                       <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                                       <AlertDialogDescription>
                                           Are you sure you want to logout?<br />
                                           You will be redirected to the login page.
                                       </AlertDialogDescription>
                                   </AlertDialogHeader>
                                   <AlertDialogFooter>
                                       <AlertDialogCancel>Cancel</AlertDialogCancel>
                                       <AlertDialogAction onClick={logout}>
                                           Logout
                                       </AlertDialogAction>
                                   </AlertDialogFooter>
                               </AlertDialogContent>
                           </AlertDialog>
                       </SidebarMenuItem>
                   </SidebarMenu>
               </SidebarFooter>
           </Sidebar>
       </SidebarProvider>
    )
}
