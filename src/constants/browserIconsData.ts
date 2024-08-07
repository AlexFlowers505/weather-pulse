import { type BrowserIconsData } from "../types/constants/browserIconsData"

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