import { spriteSvgStyle as tw } from '../../styles/components/SpriteSvg.style'

export default function SpriteSvg({id, extraSVGstyle, extraSVGClass=``}) {
  return (
    <svg className={`${tw.icon} ${extraSVGClass}`} style={extraSVGstyle}><use href={`#${id}`} /></svg>
  )
}
