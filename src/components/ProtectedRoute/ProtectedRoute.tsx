import React, { CSSProperties, ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { getToken } from '../../api/request';
import '../../common/constants/style.scss';
import { RootState } from '../../store/rootReducer';
import { UserState } from '../../store/types/user';
import { logout } from '../../store/modules/user/actions';
import { asyncDispatch } from '../../store/store';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  redirectPath: string;
}

const wrapperLogOut: CSSProperties = {
  marginTop: '5px',
  display: 'flex',
  justifyContent: 'flex-end',
};

class ProtectedRoute extends Route<ProtectedRouteProps & PropsFromRedux> {
  render(): ReactElement {
    let redirectPath = '';
    if (this.props.isAuthenticated) {
      redirectPath = this.props.redirectPath;
    }

    const onClickLogOut = (): void => {
      asyncDispatch(logout());
      // deleteToken();
      // history.push('/login');
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

const mapState = (state: RootState): Omit<UserState, 'isLoading'> => ({
  isAuthorized: state.user.isAuthorized,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProtectedRoute);
