import React, { type FC, useEffect } from 'react';
import { useAppDispatch, useGoogleSheets } from '../../hooks/redux';
import { useTheme } from '@mui/styles';
import { Box, Grid } from '@mui/material';

import { type SheetTitleType } from '../../services/googleSheets/googleSheets.service';
import { googleSheetsAssets } from '../../store/slices/googleSheetsAssets/actionCreator';
import { LoadingDataStatus } from '../../models/IGoogleSheet';
import { useStyles } from './styles';
import { Loader } from '../Loader';
import { ExerciseCard } from './ExerciseCard';

interface IProp {
  type: SheetTitleType;
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

  return (
    <Box className={classes.root}>
      {status === LoadingDataStatus.LOADING ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {sheet?.data
            .at(0)
            ?.exercises.map((item) => (
              <ExerciseCard
                key={item.name}
                cardName={item.name}
                data={sheet.data}
              />
            ))}
        </Grid>
      )}
    </Box>
  );
};
