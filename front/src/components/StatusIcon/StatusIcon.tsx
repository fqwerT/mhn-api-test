import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import { memo } from 'react';

interface StatusProps {
status:string
}

export const StatusIcon:React.FC<StatusProps> = memo(({status}) => {

     if (status === 'pending') {
        return  <CircularProgress size={'25px'}/>
     }
     if (status === 'success') {
        return  <DoneIcon sx={{color:"lightgreen",fill:"lightgreen"}}/>
     }
     if (status === 'reject') {
        return  <ErrorIcon sx={{color:"red",fill:"red"}}/>
     }
})