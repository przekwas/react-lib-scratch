const Hawaiian = function () {
    return React.createElement('div', null, 'Sweet and Salty are awesome, don\'t @ me');
}

// const pepperoni = React.createElement('div', null, 'I am a lesser pizza compared to hawaiian');
// const ham = React.createElement(Hawaiian, null, null);
// const ham2 = React.createElement(Hawaiian, null, null);

// const parent = React.createElement('div', null, 
//     pepperoni,
//     ham,
//     ham2,
//     'wtf'
// );

class OmgPlz {
    render() {
        return React.createElement('div', null, 'Nooooooooooo!');
    }
}

const noWay = React.createElement(OmgPlz, null, null);
const test = React.createElement(Hawaiian, null, null);

ReactDOM.render(noWay, document.getElementById('root'));