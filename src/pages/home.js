import React from 'react';
import { Box } from '@mui/material';
import Banner from '../component/home/banner';
import FindVehicle from '../component/home/findVehicle';
import DrivingCourse from '../component/home/drivingCourse';
import DrivingTest from '../component/home/driveTest';
import TakeTest from '../component/home/takeTest';
import GetCarLicense from '../component/home/getCarLicense';

function Home() {
    return (
        <>
            <Box>
                <Banner />
                <FindVehicle />
                <DrivingCourse />
                <DrivingTest />
                <TakeTest />
                <GetCarLicense />
            </Box>
        </>
    );
}

export default Home;