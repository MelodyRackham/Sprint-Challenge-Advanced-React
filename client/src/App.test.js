import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import NavBar from './components/NavBar';
import Player from './components/PlayerCard';
import UseDarkMode from './components/hooks/UseDarkMode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(rtl.cleanup);

test('renders NavBar component', () => {
  const wrapper = rtl.render(<NavBar />);
  console.log(wrapper.debug());
});

test('renders Player component', () => {
  const wrapper = rtl.render(<Player />);
  console.log(wrapper.debug());
});

it('contains Marta', () => {
  const wrapper = rtl.render(<App />);
  const saysMarta = wrapper.queryAllByText('Marta');
});

test('renders DarkMode Hook', () => {
  const wrapper = rtl.render(<UseDarkMode />);
  console.log(wrapper.debug());
});
