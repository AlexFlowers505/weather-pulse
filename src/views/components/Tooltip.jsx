import { Tooltip } from '@mui/material'
import { styled } from '@mui/system'

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .MuiTooltip-tooltip`]: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '12px', 
      fontWeight: 300,
      backgroundColor: 'rgba(0,0,0,.4)',
      backdropFilter: 'blur(6px)',
      maxWidth: '200px',
      color: '#fff',
      textAlign: 'center',
      borderRadius: '8px',
      paddingBottom: '5px',
    }
  })

  export default CustomTooltip