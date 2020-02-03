import React, {
  // useState,
  // useEffect
} from 'react';
import {
  Admin,
  Resource
} from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './core/auth/authProvider';
import englishMessages from './static/i18n/en';
import themeReducer from './core/theme/themeReducer';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Layout from './components/Layout';
// import dataProviderFactory from './core/dataProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './pages/users/users';

const restProvider = simpleRestProvider('http://localhost:4000');

const i18nProvider = polyglotI18nProvider(locale => {
  return englishMessages
}, 'en');

const App = () => {
//   const [dataProvider, setDataProvider] = useState(null);

//   useEffect(() => {
//     // let restoreFetch;

//     const fetchDataProvider = async () => {
//         const dataProviderInstance = await dataProviderFactory();
//         setDataProvider(
//             // GOTCHA: dataProviderInstance can be a function
//             () => dataProviderInstance
//         );
//     };

//     fetchDataProvider();

//     // return restoreFetch;
// }, []);

  // if (!dataProvider) {
  //   return (
  //       <div className="loader-container">
  //           <div className="loader">Loading...</div>
  //       </div>
  //   );
  // }

  return (
    <Admin
        title="Some Title"
        dataProvider={restProvider}
        customReducers={{ theme: themeReducer }}
        // customRoutes={customRoutes}
        authProvider={authProvider}
        dashboard={Dashboard}
        loginPage={Login}
        layout={Layout}
        i18nProvider={i18nProvider}
    >
        {/* <Resource name="customers" {...visitors} /> */}
        {/* <Resource
            name="commands"
            {...orders}
            options={{ label: 'Orders' }}
        />
        <Resource name="invoices" {...invoices} />
        <Resource name="products" {...products} />
        <Resource name="categories" {...categories} />
        <Resource name="reviews" {...reviews} /> */}
        <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
  );
}

export default App;
