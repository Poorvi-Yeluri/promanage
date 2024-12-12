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
    SidebarSeparator,
} from "@/components/ui/sidebar";

import { 
    Collapsible, 
    CollapsibleTrigger, 
    CollapsibleContent 
} from "@radix-ui/react-collapsible";

import { Badge } from "@/components/ui/badge"


export function AppSidebar() {
    return (
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

                    <div className="text-center">
                        <h4 className="text-md font-medium">Poorvi Yeluri</h4>
                        <p className="text-sm text-muted-foreground">Admin</p>
                        <p className="text-sm text-muted-foreground">Location: Corporate</p>
                    </div>
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
            {
                title: "Hire a Teacher",
                icon: Users,
                url: "#",
                badge: null,
            },
        ]
    },
    {
        title: "Admissions",
        icon: GraduationCap,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Students",
                icon: Users,
                url: "#",
                badge: null,
            },
            {
                title: "Enrollments",
                icon: Calendar,
                url: "#",
                badge: null,
            },
            {
                title: "Courses",
                icon: Book,
                url: "#",
                badge: null,
            },
            {
                title: "Curriculum",
                icon: FileText,
                url: "#",
                badge: null,
            },
            {
                title: "Attendance",
                icon: Calendar,
                url: "#",
                badge: null,
            },
        ]
    },
    {
        title: "Assessments",
        icon: ClipboardCheck,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Muzigal",
                icon: BookOpenCheck,
                url: "#",
                badge: null,
            },
            {
                title: "RSL",
                icon: BookOpenCheck,
                url: "#",
                badge: null,
            },
        ]
    },
    {
        title: "Retail",
        icon: Guitar,
        url: "#",
        badge: null,
        subItems: [
            {
                title: "Instruments",
                icon: Guitar,
                url: "#",
                badge: null,
            },
            {
                title: "Books",
                icon: Book,
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
                title: "Sales Champ",
                icon: BarChart,
                url: "#",
                badge: null,
            },
            {
                title: "Trade Champ",
                icon: BarChart,
                url: "#",
                badge: null,
            },
            {
                title: "Thunderbolt Champ",
                icon: BarChart,
                url: "#",
                badge: null,
            },
            {
                title: "Certification Champ",
                icon: BarChart,
                url: "#",
                badge: null,
            },
            {
                title: "OE Champ",
                icon: BarChart,
                url: "#",
                badge: null,
            },
        ]
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