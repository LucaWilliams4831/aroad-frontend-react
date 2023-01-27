import { useState } from 'react';
import { Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import * as color from './basic/color';

const CheckBox_Circle = () => {
    const [selected, setSelected] = useState(true);

    return (
        <Box
            onClick={() => { setSelected(!selected) }}
            sx={{
                width: '23px',
                height: '23px',
                borderRadius: '12px',
                border: '2px solid',
                backgroundColor: selected ? color.accent : 'white',
                borderColor: color.gray,
                cursor: 'pointer',
            }}>
            {
                selected &&
                <DoneIcon />
            }
        </Box>
    );
}

export default CheckBox_Circle;