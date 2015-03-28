/**
 * Download
 */

import React from 'react'

export default class Download extends React.Component {
    render() {
        return (
            <section id="download" className="container">
                <h1 className="section-title small">下載遊戲</h1>
                <div className="landing-hero-image">
                    <img src="/images/Screenshots/download.jpg" />
                    <div className="landing-hero-entry text-center">
                        <img src="/images/icons/download.svg" width="64"/>
                        <p>試玩版即將開放</p>
                    </div>
                </div>
            </section>
        )
    }
}
