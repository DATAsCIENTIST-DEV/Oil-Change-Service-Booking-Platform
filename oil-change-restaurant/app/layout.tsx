import type { Metadata } from 'next'; import './globals.css'; import {Sidebar,MobileNav} from '@/components/sidebar'; import {Header} from '@/components/header';
export const metadata:Metadata={title:'OilFlow | Restaurant Oil Change Management',description:'Book, track and manage restaurant fryer oil change services.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><Sidebar/><Header/><main className='min-h-screen'>{children}</main><MobileNav/></body></html>}
