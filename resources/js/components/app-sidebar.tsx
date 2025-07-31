import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
  LayoutGrid,
  MessageCircle,
  GraduationCap,
  ListChecks,
  BookOpen,
  UserCheck,
  Briefcase,
  Layers
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Mon Plan de Réussite',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'ChatBot',
        href: '/chatbot',
        icon: MessageCircle,
    },
    {
        title: 'Ecoles et Universités',
        href: '/ecoles-universites',
        icon: GraduationCap,
    },
    {
        title: 'Secteur de métier',
        href: '/secteurs',
        icon: Briefcase,
    },
];

//const footerNavItems: NavItem[] = [
//    {
//        title: 'Repository',
//        href: 'https://github.com/laravel/react-starter-kit',
//        icon: Folder,
//    },
//    {
//        title: 'Documentation',
//        href: 'https://laravel.com/docs/starter-kits#react',
//        icon: BookOpen,
//    },
//];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/*<NavFooter items={footerNavItems} className="mt-auto" />*/}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
