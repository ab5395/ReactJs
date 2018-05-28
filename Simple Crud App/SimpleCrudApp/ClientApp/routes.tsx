import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchEmployee } from './components/FetchEmployee';
import { AddEmployee } from './components/AddEmployee';
import { NavigationTest } from './components/NavigationTest';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/fetchemployee' component={FetchEmployee} />
    <Route path='/addemployee' component={AddEmployee} />
    <Route path='/employee/edit/:empid' component={AddEmployee} />
    <Route path='/navigationpage' component={NavigationTest} />
</Layout>;
