import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
//import AppLayoutTemplate from '@/layouts/app/app-header-layout'; 
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
        <Toaster 
        toastOptions={{
            classNames: {
                toast: '!bg-coral-500 dark:!bg-green-500 !text-white !border-none',

            },
        }}
        
        />
    </AppLayoutTemplate>
);
