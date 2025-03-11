import {
    ChevronDown,
    Home,
    Users,
    Calendar,
    Search,
    Book,
    BarChart,
    DollarSign,
    FileText,
    HelpCircle,
    GraduationCap,
    ClipboardCheck,
    Guitar,
    BookOpenCheck
} from "lucide-react";


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSeparator,
} from "@/components/ui/sidebar";

import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from "@radix-ui/react-collapsible";

import { Badge } from "@/components/ui/badge"


export default function AppSidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <SidebarProvider open={isOpen}>
            <Sidebar collapsible="icon">
                <SidebarHeader className="relative">
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-4">
                            <img
                                src="https://muzigal.com/images/logo.svg"
                                alt="Muzigal Logo"
                                className="h-8"
                            />
                        </div>

                        {isOpen && (
                            <div className="text-center">
                                <h4 className="text-md font-medium">Poorvi Yeluri</h4>
                                <p className="text-sm text-muted-foreground">Admin</p>
                                <p className="text-sm text-muted-foreground">Location: Corporate</p>
                            </div>
                        )}
                    </div>
                </SidebarHeader>

                <SidebarSeparator className="mb-3" />

                <SidebarContent>
                    {menuItems.map((item) => (
                        <Collapsible defaultOpen className="group/collapsible">
                            <SidebarGroup key={item.title}>
                                <SidebarGroupLabel asChild>
                                    <CollapsibleTrigger>
                                        {item.title}
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>
                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {item.subItems &&
                                                item.subItems.map((subItem) => (
                                                    <SidebarMenuItem key={subItem.title}>
                                                        <SidebarMenuButton asChild>
                                                            <a href={subItem.url} className="flex items-center space-x-1">
                                                                <subItem.icon className="w-4 h-4" />
                                                                <span>{subItem.title}</span>
                                                                {subItem.badge && (<Badge> {subItem.badge} </Badge>)}
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>
                    ))}
                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    );
}


const menuItems = [
    {
        title: "General",
        icon: Home,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Dashboard",
                icon: Home,
                url: "#",
                badge: "Beta",
            },
            {
                title: "Leads",
                icon: Search,
                url: "#",
                badge: null,
            },
            {
                title: "Users",
                icon: Users,
                url: "#",
                badge: null,
            },
         
        ]
    },
    {
        title: "Financials",
        icon: DollarSign,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Settlements",
                icon: DollarSign,
                url: "#",
                badge: null,
            },
            {
                title: "Refunds",
                icon: DollarSign,
                url: "#",
                badge: null,
            },
        ]
    },
    {
        title: "Analytics",
        icon: BarChart,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Academy Sales",
                icon: BarChart,
                url: "#",
                badge: null,
            },

    {
        title: "Help",
        icon: HelpCircle,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Support",
                icon: HelpCircle,
                url: "#",
                badge: null,
            },
            {
                title: "Feedback",
                icon: FileText,
                url: "#",
                badge: null,
            },
        ]
    },
];
