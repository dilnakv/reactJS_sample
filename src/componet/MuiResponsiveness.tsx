import styled from "@emotion/styled"
import { Box } from "@mui/material"

const StyledBox = styled(Box)(({theme}) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.status.danger
}))
export const MuiResponsiveness = () =>{
    return(
        <>
        <Box sx={{
            height:'300px',
            width: {
                xs: 100, // 0
                xm: 200, // 600
                sm: 300, // 900
                lg: 400, // 1200
                xl: 500, // 1536
            },
            bgcolor: 'secondary.dark'
        }}>
           

        </Box>
         <StyledBox/>
        </>
    )
}