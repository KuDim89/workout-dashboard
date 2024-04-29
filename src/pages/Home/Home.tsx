import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchHomeData } from '../../store/slices/home/homeActionCreators';
import { fetchStreet } from '../../store/slices/street/streetActionCreators';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchHomeData());
    void dispatch(fetchStreet());
  }, []);

  return <div>Home</div>;
};
