import React from 'react';
import ReactDOM from 'react-dom';
// Type Import
import './designGuide/typography.scss';
// NavBar
import Navbar from './components/navbar/Navbar';

class Main extends React.Component {
    render() {
        return (
            <>
                <Navbar />
            </>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));