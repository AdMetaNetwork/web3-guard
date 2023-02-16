/**
 * @file
 * This file is part of Web3 Guard Browser Extension (https://github.com/AdMetaNetwork/web3-guard).
 */

import React from 'react';
import { observer } from 'mobx-react';

import './header.pcss';

export const Header = observer(() => {
    return (
        <div className="popup-header">
            <div className="popup-header__logo">
                <div>Web3-Guard</div>
            </div>
            <div className="earn">Your Earn</div>
        </div>
    );
});
