export interface ITransformedGoogleSheetsData {
  date: string;
  exercises: IExercisesData[];
}

export interface IExercisesData {
  name: string;
  amount: string | null;
}
