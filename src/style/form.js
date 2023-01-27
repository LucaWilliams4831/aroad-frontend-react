import { Box, Input, Typography } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import * as color from './basic/color';
import * as font from './basic/font';

const ICON_STYLE = {
    position: 'absolute',
    width: '19px',
    height: '19px',
    top: '14px',
    right: '20px',
    cursor: 'pointer',
}

const TextEdit_Custom = ({ placeholder, label, icon, text, style }) => {
    return (
        <Box sx={{
            ...style,
            ...{
                // width: 'fit-content',
                // height: '47px',
                position: 'relative',
            }
        }}>
            <Input
                placeholder={placeholder}
                value={text}
                sx={{
                    minHeight: '47px',
                    borderRadius: '8px',
                    backgroundColor: color.lightGray,
                    padding: '0 20px',
                    '&::before': {
                        display: 'none',
                    },
                    '&::after': {
                        display: 'none',
                    },
                }} />
            <Typography sx={{
                position: 'absolute',
                top: '-2px',
                left: '5px',
                fontFamily: font.muliFont,
                fontSize: '14px',
                fontWeight: 'bold',
                fontStyle: 'normal',
                textAlign: 'left',
                color: color.heading,
            }}>{label}</Typography>
            {
                icon === 1 &&
                <CalendarMonthOutlinedIcon sx={ICON_STYLE} />
            }
            {
                icon === 2 &&
                <ScheduleOutlinedIcon sx={ICON_STYLE} />
            }
            {
                icon === 3 &&
                <ExpandMoreOutlinedIcon sx={ICON_STYLE} />
            }
            {
                icon === 4 &&
                <LocationOnOutlinedIcon sx={ICON_STYLE} />
            }
            {
                icon === 5 &&
                <SearchOutlinedIcon sx={ICON_STYLE} />
            }
        </Box>
    );
}

export default TextEdit_Custom;