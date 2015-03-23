/**
 * Application
 */

import React from 'react'

import Header from './Header'
import LandingHero from './LandingHero'
import News from './News'

export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <LandingHero/>
                <News/>
            </div>
        )
    }
}
