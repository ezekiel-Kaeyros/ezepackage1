import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useToggleSidebar = () => {
  const isSidebarToggled: boolean = useSelector(
    (state: RootState) => state.AuthReducer.open
  );
   const isToggled: boolean = useSelector(
     (state: RootState) => state.AuthReducer.toggle
   );
  const dispatch = useDispatch<AppDispatch>();

  return { isSidebarToggled, dispatch,isToggled };
};
