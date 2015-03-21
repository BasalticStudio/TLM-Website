/**
 * Header Component
 */

import React from 'react'

import Navigation from './Navigation'

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="text-center container">
                    <img src="/images/logo-black-min.png" />
                </div>
                <Navigation />
            </header>
        )
    }
}
