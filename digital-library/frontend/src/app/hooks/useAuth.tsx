import { AppDispatch, RootState } from '@/redux/store';
import { ILoggedInUserReturnType } from '@/services/authService.d';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  // const user: ILoggedInUserReturnType | any = useSelector(
  //   (state: RootState) => state.AuthReducer.user
  // );
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.AuthReducer.isAuthenticad
  );
  const dispatch = useDispatch<AppDispatch>();

  return { dispatch, isAuthenticated };
};
