import { WaitApi } from 'Api';
import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { getCookie, setCookie } from 'utils';
import { Main, NotFound, Notice, Settings, Video } from './pages';
const Routes = () => {
  /* Router */
  const history = useHistory();
  const { pathname } = useLocation();
  const [, company_id] = pathname.split('/');
  /* State */
  /* Hooks */
  useEffect(() => {
    checkCompany();
    // eslint-disable-next-line
  }, []);
  /* Functions */
  /**
   * 병원 정보 점검
   * --
   */
  const checkCompany = async () => {
    const check = checkCookie();
    if (check) {
      history.push('/did');
      return;
    }
    if (company_id) {
      const result = await WaitApi.checkCompany(company_id);
      if (result) {
        setCookie('company_id', company_id);
        history.push('/did');
      } else {
        // console.log('비정상적인 접근');
        history.push('404');
      }
    }
  };

  const checkCookie = () => {
    const company_id = getCookie('company_id');
    if (company_id) {
      return true;
    } else {
      return false;
    }
  };

  /* Render */
  return (
    <div>
      <Switch>
        <Route path="/did" exact>
          <Main />
        </Route>
        <Route path="/setting" component={Settings} />
        <Route path="/notice" component={Notice} />
        <Route path="/video" component={Video} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
