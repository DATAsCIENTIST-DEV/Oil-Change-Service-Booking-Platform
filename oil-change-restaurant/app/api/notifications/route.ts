import {NextResponse} from 'next/server'; import {seedNotifications} from '@/lib/data'; export async function GET(){return NextResponse.json({notifications:seedNotifications})}
