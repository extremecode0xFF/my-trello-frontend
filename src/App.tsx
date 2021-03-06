import React, { ReactElement } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import EditCard from './components/Modal/EditCard/EditCard';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Registration } from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute/ProtectedRoute';
import { getToken } from './api/request';

const getAuthorizedProps = (): ProtectedRouteProps => ({
  redirectPath: '/login',
  isAuthenticated: !getToken(),
});

const getUnauthorizedProps = (): ProtectedRouteProps => ({
  redirectPath: '/',
  isAuthenticated: !!getToken(),
});

export default function App(): ReactElement {
  const { state } = useLocation<{ cardID: number }>();
  const boardState = useTypedSelector((value) => value.board.board);

  return (
    <div className="container">
      <ReactNotification />
      <Switch>
        <ProtectedRoute path="/signup" {...getUnauthorizedProps()} component={Registration} />
        <ProtectedRoute path="/login" {...getUnauthorizedProps()} component={Authorization} />
        <ProtectedRoute path="/board/:id" {...getAuthorizedProps()} component={Board} />
        <ProtectedRoute path="/" {...getAuthorizedProps()} component={Home} />
      </Switch>
      {state?.cardID && boardState?.title ? <Route exact path="/board/:id/card/:cardID" component={EditCard} /> : null}
    </div>
  );
}
