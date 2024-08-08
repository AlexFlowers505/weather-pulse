 type BrowserIconsData = {
    path: string
    ext: string
    prefix: string
    icons: {
        chrome: string
        edge: string
        firefox: string
        safari: string
    }
}

const browserIconsData: BrowserIconsData = {
    path: '/assets/images/browser-icons/',
    ext: '.png',
    prefix: 'icon-',
    icons: {
        chrome: 'chrome',
        edge: 'edge',
        firefox: 'firefox',
        safari: 'safari',
    }
} as const

export default browserIconsData