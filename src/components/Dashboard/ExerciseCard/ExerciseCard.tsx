import React, { type FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { type ITransformedGoogleSheetsData } from '../../../models/ITransformedGoogleSheetsData';
import { calculateTotalAmount } from '../utils/calculateTotalAmount';
import { useTheme } from '@mui/styles';
import { useStyles } from './styles';
import Chart from './Chart/Chart';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type ExerciseRecord = Record<string, number>;

interface IMount {
  date: string;
  exercises: ExerciseRecord;
}

interface IProps {
  cardName: string;
  data: ITransformedGoogleSheetsData[];
}

export interface IChart {
  series: number[];
  xAxis: string[];
}

export const ExerciseCard: FC<IProps> = ({ cardName, data }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  // const [year, setYear] = useState<number>(dayjs().year());

  function getExerciseDataByYearAndName(
    data: IMount[],
    period: number | string,
    exerciseName: string,
  ): IChart {
    const monthsName: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const totalByMonths: number[] = Array(12).fill(0);

    data.forEach((monthItem) => {
      const date = dayjs(monthItem.date, 'MM/YYYY');

      if (date.year() === period) {
        const month = date.month();
        if (monthItem.exercises[exerciseName] !== undefined) {
          totalByMonths[month] = monthItem.exercises[exerciseName];
        }
      }
    });
    return {
      xAxis: monthsName,
      series: totalByMonths,
    };
  }

  const calculateTotalAmountByMonth = (
    exerciseName: string,
    data: ITransformedGoogleSheetsData[],
    period: number,
  ): IChart => {
    if (data == null) return { series: [], xAxis: [] };

    const monthsTotalData: IMount[] = [];

    data.forEach((day) => {
      dayjs.extend(customParseFormat);
      const parsedDate = dayjs(day.date, 'DD.MM.YYYY');

      if (parsedDate.isValid()) {
        const monthYear = parsedDate.format('MM/YYYY');

        let month = monthsTotalData.find((month) => month.date === monthYear);

        if (month == null) {
          month = { date: monthYear, exercises: {} };
          monthsTotalData.push(month);
        }

        day.exercises.forEach((exercise) => {
          if (exercise.name !== '' && exercise.amount != null) {
            const amounts = exercise.amount
              .split(',')
              .map((amount) => parseInt(amount));
            const total = amounts.reduce((acc, curr) => acc + curr, 0);

            if (month != null && month.exercises[exercise.name] == null) {
              month.exercises[exercise.name] = 0;
            }

            if (month != null) {
              month.exercises[exercise.name] += total;
            }
          }
        });
      }
    });
    return getExerciseDataByYearAndName(monthsTotalData, period, exerciseName);
  };

  const totalAmountByMonth = calculateTotalAmountByMonth(cardName, data, 2023);

  // todo: I should add MUI selector and manage sheet data depends on year or show all data which I have in the sheet.
  // todo: I should move data calculation logic in the other place throw from the component

  return (
    <>
      <Grid item key={cardName} xs={12} sm={6}>
        <Box className={classes.root}>
          <Typography variant="h6" className={classes.chartTitle}>
            {cardName}
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
              <Typography sx={{ marginBottom: 3 }}>General info</Typography>
              <Typography
                className={classes.info}
              >{`Total number: ${calculateTotalAmount(
                cardName,
                data,
              )}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Chart chartData={totalAmountByMonth} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
