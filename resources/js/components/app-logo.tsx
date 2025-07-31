import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-15 items-center justify-center rounded-md text-sidebar-primary-foreground">
                <AppLogoIcon/>
            </div>
             <div className="ml-1 grid flex-1 text-center text-lg">
                <span className="mb-0.5 truncate leading-tight font-medium font-sans">TawjihiBot</span>
            </div>
        </>
    );
}
