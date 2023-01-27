import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Text_Desktop } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';

function DrivingCourse() {
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
                backgroundColor: '#F6F6F6',
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
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        justifyContent: 'center',
                    }
                }}>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H2_Desktop style={{
                            width: '100%',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Why Take a Driving Course with A-Road School Of Motoring?</H2_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H2_Mobile style={{
                            width: '100%',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Why Take a Driving Course with A-Road School Of Motoring?</H2_Mobile>
                    }
                </Box>
                <Grid container spacing={3}
                    sx={{
                        marginTop: '60px',
                    }}>
                    <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: '100%',
                                justifyContent: windowWidth > SCREEN_SMALL_WIDTH ? 'left' : 'center',
                            }
                        }}>
                            <img alt='' src='./images/driving-course-1.png'
                                style={{
                                    width: '128px',
                                    height: '128px',
                                    marginBottom: '20px',
                                }} />
                        </Box>
                        <Body_Text_Desktop>Our instructors can help you practice your skills in a controlled environment and learn new things such as how to parallel park and drive in bad weather conditions.</Body_Text_Desktop>
                    </Grid>
                    <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: '100%',
                                justifyContent: windowWidth > SCREEN_SMALL_WIDTH ? 'left' : 'center',
                            }
                        }}>
                            <img alt='' src='./images/driving-course-2.png'
                                style={{
                                    width: '128px',
                                    height: '128px',
                                    marginBottom: '20px',
                                }} />
                        </Box>
                        <Body_Text_Desktop>You're more likely to pass your road test with our high-quality driving courses to prepare you.</Body_Text_Desktop>
                    </Grid>
                    <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: '100%',
                                justifyContent: windowWidth > SCREEN_SMALL_WIDTH ? 'left' : 'center',
                            }
                        }}>
                            <img alt='' src='./images/driving-course-3.png'
                                style={{
                                    width: '128px',
                                    height: '128px',
                                    marginBottom: '20px',
                                }} />
                        </Box>
                        <Body_Text_Desktop>You’ll learn how to drive safely and defensively so that you can reduce the risk of accidents on public roads.</Body_Text_Desktop>
                    </Grid>
                    <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: '100%',
                                justifyContent: windowWidth > SCREEN_SMALL_WIDTH ? 'left' : 'center',
                            }
                        }}>
                            <img alt='' src='./images/driving-course-4.png'
                                style={{
                                    width: '128px',
                                    height: '128px',
                                    marginBottom: '20px',
                                }} />
                        </Box>
                        <Body_Text_Desktop>You’ll increase your chances of getting a career in driving such as being a personal driver, bus driver, or truck driver.</Body_Text_Desktop>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default DrivingCourse;