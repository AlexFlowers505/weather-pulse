
import svgSymbolsIDs from "../../constants/svgSymbolsIDs"
import { weatherHeaderRowStyle as tw } from "../../styles/components/WeatherHeaderRow.style"
import CustomTooltip from "./CustomTooltip"

export default function WeatherHeaderRow() {
  return (
    <div className={`weather-header-row ${tw.wrapper}`}>
        <CustomTooltip title={'Дата'} placement="top">
            <span className={`header-icon-wrapper ${tw.headerIconWrapper}`}>
                <svg className={`header-icon ${tw.headerIcon}`}><use href={`#${svgSymbolsIDs.iconCalendar}`} /></svg>
            </span>
        </CustomTooltip>
        <CustomTooltip title={'Средняя погода днем'} placement="top">
            <span className={`header-icon-wrapper ${tw.headerIconWrapper}`}>
                <svg className={`header-icon ${tw.headerIcon}`}><use href={`#${svgSymbolsIDs.iconSun}`} /></svg>
            </span>
        </CustomTooltip>
        <CustomTooltip title={'Средняя погода ночью'} placement="top">
            <span className={`header-icon-wrapper ${tw.headerIconWrapper}`}>        
                <svg className={`header-icon ${tw.headerIcon}`}><use href={`#${svgSymbolsIDs.iconMoon}`} /></svg>
            </span>        
        </CustomTooltip>

    </div>
  )
}
