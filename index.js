const React = require('react')
const ReactDom = requre('reactdom')
const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className:'oldercoaster'}, [React.createElement('p', {}, 'Two grannies having the time of their life!'),
    React.createElement('p', {}, 'Passengers:'), React.createElement('ul', {}, [React.createElement('li', {}, 'Agnes'), React.createElement('li', {}, 'Muriel')]) ]);
  }
})

const InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [React.createElement('p', {}, 'You shouldn't look too far.'),
    React.createElement('p', {}, 'Sometimes, the solution is '  )
    ]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
