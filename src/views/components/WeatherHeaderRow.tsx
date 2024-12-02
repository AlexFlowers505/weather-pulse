
import { iconWithTooltipConfig as config } from "../../config/components/iconWithTooltip"
import { weatherHeaderRowStyle as tw } from "../../styles/components/WeatherHeaderRow.style"
import IconWithTooltip from "./IconWithTooltip"

export default function WeatherHeaderRow() {
  return (
    <div className={`weather-header-row ${tw.wrapper}`}>
        <IconWithTooltip text={config.date.text} style={tw.headerIconWrapper} iconID={config.date.iconID} />
        <IconWithTooltip text={config.dayWeather.text} style={tw.headerIconWrapper} iconID={config.dayWeather.iconID} />
        <IconWithTooltip text={config.nightWeather.text} style={tw.headerIconWrapper} iconID={config.nightWeather.iconID} />
    </div>
  )
}
