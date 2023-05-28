import React, { useEffect, useState } from "react"

import FilterTable from "./Components/FilterTable";

import { Grid, TextField, Autocomplete } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

import { useDispatch, useSelector } from "react-redux";
// import { getAllReports } from "../../store/reducers/mainSlice";
import { AppDispatch, RootState } from "../../store/store";

import { getReport } from "../../store/reducers/mainSlice";

import { useParams } from "react-router-dom"


const FilterBlock = () => {
    const [dateRange, setDateRange] = useState<[string | null, string | null]>([null, null])

    const dispatch = useDispatch()
    const { reports } = useSelector((state: RootState) => state.main);
    const { fileId } = useParams()

    let report = reports.filter(report => report.fileId === fileId)
    console.log(report)

    useEffect(() => {
        //@ts-ignore
        dispatch(getReport({doctor: "врач-кардиолог", fileId: "faf0ce4219ae66874e6842cb7b92889c"}))
    }, [dispatch])

    

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid 
                container
                gap={2}
                justifyContent={'space-evenly'} 
                alignItems={'center'}  
                sx={{backgroundColor: '#fff', paddingY: '1rem'}}
            >
                <Grid item md={3} xs={10}>
                    <TextField 
                        fullWidth
                        id="search" 
                        label="Поиск" 
                        variant="outlined"
                        size="small" 
                    />
                </Grid>
                <Grid item md={3} xs={10}>
                    <Autocomplete
                        disablePortal
                        size="small"
                        id="department"
                        options={report ? report[0]?.filters[0]?.diagnosis : ['Нет значений']} 
                        renderInput={(params) => <TextField {...params} label="Отделение" />}
                    />
                </Grid>
                <Grid item md={3} xs={10}>
                <DemoContainer sx={{paddingTop: '0'}} components={['DateRangePicker']}>
                    <DateRangePicker
                        calendars={1}
                        format="DD-MM-YYYY"
                        slots={{ field: SingleInputDateRangeField }}
                        slotProps={{ textField: { size: "small" } }} 
                        value={dateRange} 
                        onChange={(newDate) => setDateRange(newDate)}  
                        localeText={{ start: 'Начало периода', end: 'Конец периода' }} 
                    />
                </DemoContainer>
                </Grid>
                <Grid item xs={12}>
                    <FilterTable />
                </Grid>
            </Grid>
        </LocalizationProvider>
        
    )
}

export default FilterBlock;