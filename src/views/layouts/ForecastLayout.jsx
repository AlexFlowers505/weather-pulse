import React from 'react'
import ForecastItems from '../components/ForecastItems'

const className = {
    wrapper: `
        w-full
        h-fit
        flex
        flex-col
        justify-start
        gap-baseSM
    `,
    header: `
        text-xl
        font-medium
        text-text
    `,
}
const {wrapper, header} = className

export default function ForecastLayout({heading, layout}) {
  return (
    <section className={`forecast container-visuals ${wrapper}`}>
        <h6 className={header}>{heading}</h6>
        <ForecastItems layout={layout} />
    </section>
  )
}
