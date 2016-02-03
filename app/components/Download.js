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
                    <div className="landing-hero-entry">
                        <h3>遊戲已在 Steam 商店發布</h3>
                        <p>
                            <a className="link-icon" href="http://store.steampowered.com/app/372540" target="_blank">
                                <img src="/images/ICONs/steam.svg" width="64" />
                            </a>
                        </p>
                        <p>
                            遊戲將會持續更新，若有任何建議歡迎透過 Steam 討論區提出建議。
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
