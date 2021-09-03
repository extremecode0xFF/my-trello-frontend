import React, { CSSProperties, ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { deleteToken, getToken } from '../../api/request';
import history from '../../common/history/history';
import '../../common/constants/style.scss';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  redirectPath: string;
}

const wrapperLogOut: CSSProperties = {
  marginTop: '5px',
  display: 'flex',
  justifyContent: 'flex-end',
};

export class ProtectedRoute extends Route<ProtectedRouteProps> {
  render(): ReactElement {
    let redirectPath = '';
    if (this.props.isAuthenticated) {
      redirectPath = this.props.redirectPath;
    }

    const onClickLogOut = (): void => {
      deleteToken();
      history.push('/login');
    };

    if (redirectPath) {
      const renderComponent = (): ReactElement => <Redirect to={{ pathname: redirectPath }} />;
      return <Route {...this.props} component={renderComponent} render={undefined} />;
    }

    return (
      <>
        {getToken() && (
          <div style={wrapperLogOut}>
            <button className="primaryButton" onClick={onClickLogOut}>
              Выйти
            </button>
          </div>
        )}
        <Route {...this.props} />
      </>
    );
  }
}
