import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, H4_Desktop, H5_Desktop, Body_Text_Desktop, Description_Text_Desktop, H3_Desktop } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import { Button_Contained } from '../../style/button';

function DrivingTest() {
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
                backgroundColor: 'white',
            }
        }}>
            <Box sx={{
                ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
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
                        width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(50% - 15px)' : 'calc(100% - 20px)',
                        margin: windowWidth > SCREEN_SMALL_WIDTH ? '0 15px 0 0' : '0',
                    }
                }}>
                    <img alt='' src='./images/schedule-ico.png'
                        d style={{
                            width: '66px',
                            height: '66px',
                            marginBottom: '20px',
                        }} />
                    <H2_Desktop style={{
                        marginBottom: '20px',
                    }}>Get Access to Driving Test Dates in London</H2_Desktop>
                    <Description_Text_Desktop style={{
                        marginBottom: '20px',
                    }}>Anyone in London knows how highly sought-after driving test dates are in the city. The good news is that A-Road School Of Motoring offers you easy access to the most up-to-date driving test schedules so you can plan your schedule around them. We’ll let you know what days and times are available, so you can choose which day works best for your schedule giving you more time to prepare yourself for the test, as well as more time to get to the testing centre.</Description_Text_Desktop>
                    <Box>
                        <Button_Contained>Read More</Button_Contained>
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(50% - 15px)' : 'calc(100% - 15px)',
                            margin: windowWidth > SCREEN_SMALL_WIDTH ? '0 0 0 15px' : '30px 0 0 0',
                            padding: '30px 0',
                            borderRadius: '30px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                    <H3_Desktop>Available Car Test Dates</H3_Desktop>
                    <H4_Desktop style={{
                        color: '#545F70',
                    }}>Manual & Auto</H4_Desktop>
                    <Grid container sx={{
                        margin: '20px',
                    }}>
                        <Grid item xs={2}
                            sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>
                            <img alt='' src='./images/flow-bar-vertical.png'
                                style={{
                                    width: '28px',
                                }} />
                        </Grid>
                        <Grid item xs={8}
                            sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '10px',
                                    }}>Modern Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>28/11/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Thu, 14:22</Description_Text_Desktop>
                                        </Box>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }} >
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>20/11/23</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Fri, 08:57</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '10px',
                                    }}>Tolworth Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>18/11/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Fri, 10:04</Description_Text_Desktop>
                                        </Box>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }} >
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>11/01/23</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Wed, 07:03</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '10px',
                                    }}>Isleworth Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>31/12/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Sat, 12:05</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}
                            sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>
                            <img alt='' src='./images/flow-bar-vertical.png'
                                style={{
                                    width: '28px',
                                    transform: 'rotate(180deg)',
                                }} />
                        </Grid>
                    </Grid>
                    <Box>
                        <Button_Contained>More Dates/Book</Button_Contained>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default DrivingTest;