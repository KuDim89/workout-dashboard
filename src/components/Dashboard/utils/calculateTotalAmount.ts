import { type ITransformedGoogleSheetsData } from '../../../models/ITransformedGoogleSheetsData';

export function calculateTotalAmount(
  exerciseName: string,
  data: ITransformedGoogleSheetsData[] | undefined,
): string {
  if (data != null) {
    return data
      .reduce((total, entry) => {
        const exercise = entry.exercises.find((ex) => ex.name === exerciseName);
        if (exercise?.amount != null) {
          const amounts = exercise.amount.split(',').map(Number);
          return total + amounts.reduce((sum, amount) => sum + amount, 0);
        }
        return total;
      }, 0)
      .toString();
  } else {
    return 'No data';
  }
}
