import { SvgSymbolsIDs } from '../../styles/components/svgSymbolsIDs.type'
import CustomTooltip from './CustomTooltip'

export type IconWithTooltipProps = {
    text: string,
    style: string,
    iconID: SvgSymbolsIDs[keyof SvgSymbolsIDs]
}

export default function IconWithTooltip({text, style, iconID} : IconWithTooltipProps): React.JSX.Element {
  return (
    <CustomTooltip title={text} placement="top">
        <span className={`header-icon-wrapper ${style}`}>
            <svg className={`header-icon`}><use href={`#${iconID}`} /></svg>
        </span>
    </CustomTooltip>
  )
}
