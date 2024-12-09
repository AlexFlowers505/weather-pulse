import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { URL_PARAMS, URL_SYMBOLS } from "../constants/paths"

export const useGetCurrentAreaForecastURL = () => {
    const currentArea = useSelector((state: RootState) => ({
        id: state.currentArea.id,
        isSpecific: state.currentArea.isSpecific
    }))

    if (isNaN(currentArea.id)) {
        return ''
    } else {
        const isSpecificLocationParam =`${URL_PARAMS.IS_SPECIFIC_LOCATION}`
        const isSpecificLocationVal = currentArea.isSpecific ? '1' : '0'
        return `${URL_SYMBOLS.QUESTION_MARK}${URL_PARAMS.ID}${currentArea.id}${isSpecificLocationParam}${isSpecificLocationVal}`
    }
    
}