import { Button, styled } from '@mui/material';
import * as color from './basic/color';
import * as font from './basic/font';

export const Button_Contained = styled(Button)({
    minWidth: '115px',
    height: '45px',
    textTransform: 'none',
    padding: '0 10px',
    borderRadius: '28px',
    backgroundColor: color.accent,
    fontFamily: font.muliFont,
    fontSize: '18px',
    fontWeight: '400px',
    lineHeight: '18px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: color.heading,
    '&:hover': {
        backgroundColor: color.hover,
    },
    '&:focus': {
        outline: 'none',
    },
});

export const Button_Outlined = styled(Button)({
    minWidth: '115px',
    height: '45px',
    textTransform: 'none',
    padding: '0 10px',
    borderRadius: '28px',
    fontFamily: font.muliFont,
    fontSize: '18px',
    fontWeight: '400px',
    lineHeight: '18px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: color.heading,
    border: '2px solid',
    borderColor: color.accent,
    backgroundColor: 'transparent',
    '&:hover': {
        border: '2px solid',
        borderColor: 'transparent',
        backgroundColor: color.hover,
    },
    '&:focus': {
        outline: 'none',
    },
});