import React from "react";
import { Text } from "../../atoms/text/text";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Header } from "../../atoms/Header/Header";
import { SchoolLogo } from "../../atoms/schoolLogo/SchoolLogo";
import { Actions } from "../Actions/Actions";

const title= 'English Teacher';
const description = 'We have a vacancy to head up the english department at our fantastic school';
const salary = '£30,000';
const applicationDate = 'Apply by 8th August, 2022'

export const JobCard = () => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardContent >
                <Header header={title} subheader={applicationDate} />
                <SchoolLogo />
                <Text text={description} />
                <Text text={salary} />
            </CardContent>
            <Actions />
        </Card>
    )
}