import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "../router"


export const AppRoute = ({ component: Component, layout: Layout, compProp: props2, ...rest }) => (
  <Route {...rest} historyProps={props2.history} render={props => (
    <Layout>
      <Component {...props} historyProps={props2.history} />
    </Layout>
  )} />
)

class AppRoutes extends Component {
  componentDidMount() { }
  render() {
    return (
      <>
        <Switch>
          {routes.map((route, index) => {
            return (
              <AppRoute
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                layout={route.layout}
                component={route.component}
                compProp={this.props}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}
export default AppRoutes