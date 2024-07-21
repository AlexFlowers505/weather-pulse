import { spriteSvgStyle as tw } from '../../styles/components/SpriteSvg.style'

export default function SpriteSvg({id, extraSVGstyle}) {
  return (
    <svg className={`${tw.icon}`} style={extraSVGstyle}><use href={`#${id}`} /></svg>
  )
}
