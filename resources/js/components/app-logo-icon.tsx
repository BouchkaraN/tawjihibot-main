import { ImgHTMLAttributes } from 'react';
export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/images/tawjihi_logo.png"
            alt="App Logo"
        />
    );
}
