import { NextResponse } from 'next/server';
import { userAgent } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl
    const { device, browser, engine, os, cpu } = userAgent(request)

    const deviceType = device.type === 'mobile' ? 'mobile' : 'desktop'
    const deviceModel = device.type === 'mobile' ? device.model : 'desktop'
    const operatingSystem = os.name + ' ' + os.version
    const browserInfo = browser.name + ' ' + browser.version

    url.searchParams.set('deviceType', deviceType)
    url.searchParams.set('deviceModel', deviceModel)
    url.searchParams.set('operatingSystem', operatingSystem)
    url.searchParams.set('browserInfo', browserInfo)
    return NextResponse.rewrite(url)
}
