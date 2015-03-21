/**
 * Application
 */

import React from 'react'

import Header from './Header'

export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div id="landing-hero" className="container">
                    <div className="landing-hero-image">
                        <img src="/images/CGs/Hero.jpg" />
                        <div className="landing-hero-entry">
                            <p>
                            在一個充滿法術與仙魔的遙遠過去中，曾經發生了一場足以毀滅文明的慘烈戰爭。幾個世紀過去了，人們早已忘記那輝煌一時的偉大國度。而這些過去若是在這個時代重演，又會造成怎樣的影響⋯⋯
                            </p>
                            <p className="text-small">
                            Thousand years ago, a world once full of magic and celestials has fallen after a great war. The civilization was almost completely wiped out, Century had passed, almost no one remembers the once glorious empire. But, what will happen if the history repeats itself all over again...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
