import { FunctionComponent } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { TopNav } from './components';
import { SideNav } from './components/partials/SideNav';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Outlet />
    </div>
  );
};
