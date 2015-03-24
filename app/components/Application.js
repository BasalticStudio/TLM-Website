/**
 * Application
 */

import React from 'react'

import Header from './Header'
import LandingHero from './LandingHero'
import News from './News'
import Story from './Story'
import System from './System'
import Team from './Team'
import Download from './Download'
import Footer from './Footer'

export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <LandingHero/>
                <News/>
                <Story/>
                <System/>
                <Team/>
                <Download/>
                <Footer/>
            </div>
        )
    }
}
