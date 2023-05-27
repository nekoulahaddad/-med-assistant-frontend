import React, { useState } from "react"

import { Grid, TextField, Autocomplete } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';


const FilterBlock = () => {
    const [dateRange, setDateRange] = useState<[string | null, string | null]>([null, null])

    console.log(dateRange)

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
                        options={["Отделение №1", "Отделение №2", "Отделение №3"]} 
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
            </Grid>
        </LocalizationProvider>
        
    )
}

export default FilterBlock;