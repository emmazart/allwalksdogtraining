import * as React from 'react';
import Nav from '../../components/Nav';

// marginBottom property being used to prevent the header hiding content at top of page
function Header () {

    return (
        <header style={{ marginBottom: '90px' }}>
            <Nav />
        </header>
    )
}

export default Header;