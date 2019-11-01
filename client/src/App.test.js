import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders NavBar component', () => {
  const wrapper = rtl.render(<NavBar />);
  console.log(wrapper.debug());
});

test('renders Player component', () => {
  const wrapper = rtl.render(<Player />);
  console.log(wrapper.debug());
});
