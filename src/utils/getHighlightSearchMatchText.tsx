import { searchResultStyle as tw } from '../styles/components/SearchResult.style'

export function getHighlightSearchMatchText(textWithMatch: string = '', request: string): string | React.JSX.Element {
    if (request.length) {
      const regex = new RegExp(`(${request})`, 'gi')
      const parts = textWithMatch.split(regex)
  
      return (
        <>
          {parts.map((part: string, i: number): React.JSX.Element | string => {
            if (part.toLowerCase() === request.toLowerCase()) {
              return <span key={i} className={`location-name ${tw.name} ${tw.nameMatch}`}>{part}</span>
            }
            return part
          })}
        </>
      )
    }
    return textWithMatch
  }