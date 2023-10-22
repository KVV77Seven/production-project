import { lazy } from 'react'

export const AsyncAboutPage = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./AboutPage')) }, 5000)
}))
