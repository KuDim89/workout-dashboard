import { useMemo } from 'react';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { type AppDispatch, type RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* export const useHome = () => {
  const { isLoading } = useAppSelector((state) => state.home);
  return isLoading;
}; */

/* export const useHome = () => {
  const {isLoading, error }  = useAppSelector((state) => state.home);
  return useMemo(() => [isLoading, error] as const, [isLoading, error]);
} */

export const useUserCredentials = () => {
  const email = useAppSelector((state) => state.user.userData?.email);
  const password = useAppSelector((state) => state.user.userData?.password);

  return useMemo(() => ({ email, password }), [email, password]);
};
