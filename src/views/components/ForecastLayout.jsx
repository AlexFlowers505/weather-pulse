import ForecastItems from '../components/ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style.tsx'

export default function ForecastLayout({heading, layout}) {
  return (
    <section className={`forecast container-visuals ${tw.wrapper}`}>
        <h6 className={tw.header}>{heading}</h6>
        <ForecastItems layout={layout} />
    </section>
  )
}
