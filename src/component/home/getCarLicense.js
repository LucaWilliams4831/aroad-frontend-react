import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Title_Desktop } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import TextEdit_Custom from '../../style/form';

function GetCarLicense() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            console.log('Navbar handleResize log - 1 : ', window.innerWidth);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                width: '100vw',
            }
        }}>
            <Box sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                    maxWidth: '1440px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px 50px' : '50px 20px',
                    height: 'fit-content',
                }
            }}>
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        alignItems: 'center',
                    }
                }}>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H2_Desktop style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Learn With an Expert Now and Get Your Car License</H2_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H2_Mobile style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Learn With an Expert Now and Get Your Car License</H2_Mobile>
                    }
                    <Body_Title_Desktop style={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '850px',
                        textAlign: 'center',
                        marginTop: '30px',
                    }}>Let us help you find the right instructor for you! Fill out the form or get in touch with us to let us know what you need and we’ll match you with the right instructor in no time.</Body_Title_Desktop>
                    <Box sx={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '750px',
                        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                        padding: '25px',
                        borderRadius: '20px',
                    }}>
                        <TextEdit_Custom
                            placeholder={''}
                            label={'Name'}
                            icon={0}
                            text={''}
                            style={{
                                width: '700px',
                                marginTop: '20px',
                                '& input': {
                                    width: 'calc(100vw - 140px)',
                                    maxWidth: '700px',
                                },
                            }}
                        />
                        <TextEdit_Custom
                            placeholder={''}
                            label={'Email'}
                            icon={0}
                            text={''}
                            style={{
                                width: '730px',
                                marginTop: '20px',
                                '& input': {
                                    width: 'calc(100vw - 140px)',
                                    maxWidth: '700px',
                                },
                            }}
                        />
                        <TextEdit_Custom
                            placeholder={''}
                            label={'Message'}
                            icon={0}
                            text={''}
                            style={{
                                width: '730px',
                                marginTop: '20px',
                                '& input': {
                                    width: 'calc(100vw - 140px)',
                                    maxWidth: '700px',
                                    height: '200px',
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default GetCarLicense;