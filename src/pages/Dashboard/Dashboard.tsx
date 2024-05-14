import React, { type FC, useEffect } from 'react';
import { useAppDispatch, useGoogleSheets } from '../../hooks/redux';
import { useTheme } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';

import { type SheetTitleType } from '../../services/googleSheets/googleSheets.service';
import { googleSheetsAssets } from '../../store/slices/googleSheetsAssets/actionCreator';
import { useStyles } from './styles';
import { LoadingDataStatus } from '../../models/IGoogleSheet';
import { Loader } from '../../components/Loader';
import { type ITransformedGoogleSheetsData } from '../../models/ITransformedGoogleSheetsData';

interface IProp {
  type: SheetTitleType;
}

interface IRenderSheetsData {
  sheetData: ITransformedGoogleSheetsData[] | undefined;
}

export const Dashboard: FC<IProp> = ({ type }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const { status, sheets /*, error */ } = useGoogleSheets();
  const sheet = sheets.find((item) => item.title === type);
  let initial = false;

  useEffect(() => {
    if (sheet === undefined && !initial) {
      initial = true;
      void dispatch(googleSheetsAssets(type));
    }
  }, [type]);

  const RenderSheetsData: FC<IRenderSheetsData> = ({ sheetData }) => {
    function calculateTotalAmount(exerciseName: string): number | undefined {
      if (sheetData != null) {
        return sheetData.reduce((total, entry) => {
          const exercise = entry.exercises.find(
            (ex) => ex.name === exerciseName,
          );
          if (exercise?.amount != null) {
            const amounts = exercise.amount.split(',').map(Number);
            return total + amounts.reduce((sum, amount) => sum + amount, 0);
          }
          return total;
        }, 0);
      }
    }

    return (
      <>
        {sheetData?.at(0)?.exercises.map((item) => (
          <Grid item key={item.name} xs={12} sm={6}>
            <Box className={classes.topChartItem}>
              <Typography variant="h6" className={classes.chartTitle}>
                {item.name}
              </Typography>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.info}
                  >{`Total number: ${calculateTotalAmount(
                    item.name,
                  )} times`}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Chart</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Box className={classes.root}>
      {status === LoadingDataStatus.LOADING ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          <RenderSheetsData sheetData={sheet?.data} />
        </Grid>
      )}
    </Box>
  );
};
