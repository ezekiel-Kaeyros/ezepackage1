import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io, Socket } from 'socket.io-client';
import { RootState } from '../store';
import { setSocket } from '../store/auth';
import config from './config';

const useSocket = (): Socket => {
  const dispatch = useDispatch();
  const { socket, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (socket || !user) {
      return;
    }

    const socketInstance = io(config.apiUrl, {
      withCredentials: true,
    });
    dispatch(setSocket(socketInstance));

    socketInstance.onAny((event, ...args) => {
      console.log(event, args);
    });
  }, [user, dispatch, socket]);

  return socket;
};

export default useSocket;
