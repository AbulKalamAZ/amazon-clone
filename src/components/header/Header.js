import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img
                    className="header__logo__img"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="app logo"
                />
            </div>
            <div className="header__search">
                <input className="header__search__input" type="text" />
                {/* Logo */}
            </div>
            <div className="header__nav">
                <div className="header__nav__links">
                    <span className="header__nav__links__lineOne">Hello</span>
                    <span className="header__nav__links__lineTwo">Sign in</span>
                </div>
                <div className="header__nav__links">
                    <span className="header__nav__links__lineOne">Returns</span>
                    <span className="header__nav__links__lineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__nav__links">
                    <span className="header__nav__links__lineOne">Your</span>
                    <span className="header__nav__links__lineTwo">Prime</span>
                </div>
                <div className="header__nav__links"></div>
            </div>
        </div>
    );
}

export default Header;
