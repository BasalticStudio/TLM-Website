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
                        <h3>試玩版下載分流</h3>
                        <p>
                            <a className="link-icon" href="https://mega.co.nz/#!T4JRED7B!lxnjKW13eOdEuPEaDGMMBrTiK-g19My39PTezy8B4ag" target="_blank">
                                <img src="/images/ICONs/mega.svg" width="64" />
                            </a>
                            <a className="link-icon" href="http://www.mediafire.com/download/1u9ve2fuz6fkadv/The_Lost_Mythologies_-_Preview_150403.zip" target="_blank">
                                <img src="/images/ICONs/mediafile.svg" width="64"/>
                            </a>
                        </p>
                        <p>
                            目前試玩版仍存在許多問題，如果有任何問題可以在我們的粉絲專頁上留言建議。
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
