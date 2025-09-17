import localFont from 'next/font/local';

export const nunitoSans = localFont({
  src: [
    { path: './business/NunitoSans-Black.ttf',       weight: '100', style: 'normal' },
    { path: './business/NunitoSans-BlackItalic.ttf', weight: '900', style: 'italic' },
    { path: './business/NunitoSans-Bold.ttf',        weight: '700', style: 'normal' },
    { path: './business/NunitoSans-ExtraBold.ttf',   weight: '800', style: 'normal' },
    { path: './business/NunitoSans-Light.ttf',       weight: '400', style: 'normal' },
    { path: './business/NunitoSans-ExtraLight.ttf',  weight: '300', style: 'normal' },
    { path: './business/NunitoSans-Italic.ttf',      weight: '400', style: 'italic' },
    { path: './business/NunitoSans-SemiBold.ttf',    weight: '600', style: 'normal' },
    { path: './business/NunitoSans-Regular.ttf',     weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-nunito-sans',
});
