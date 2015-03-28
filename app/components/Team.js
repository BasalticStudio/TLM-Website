/**
 * Team Component
 */

import React from 'react'

import TeamMember from './TeamMember'
import DiamondGroup from './DiamondGroup'
import Diamond from './Diamond'

export default class Team extends React.Component {
    render() {
        return (
            <section id="team" className="section">
                <div className="container">
                    <h1 className="section-title small">團隊成員</h1>
                </div>
                <DiamondGroup size={200} eachRow={5} spacing={5}>
                    <Diamond className="color-diamond"/>
                    <Diamond fillImage="/images/Members/richard.jpg">
                        <div className="diamond-hover color1">
                            <div className="diamond-center">
                                <h3>湯睿誠</h3>
                                <span>主美術</span>
                            </div>
                        </div>
                    </Diamond>
                    <Diamond fillImage="/images/Members/sgfreeman.jpg">
                        <div className="diamond-hover color1">
                            <div className="diamond-center">
                                <h3>林育弘</h3>
                                <span>副美術</span>
                            </div>
                        </div>
                    </Diamond>
                    <Diamond className="color-diamond"/>
                    <Diamond className="color-diamond"/>
                    <Diamond className="color-diamond"/>
                    <Diamond fillImage="/images/Members/aotoki.jpg">
                        <div className="diamond-hover color1">
                            <div className="diamond-center">
                                <h3>邱政憲</h3>
                                <span>程式、網站</span>
                            </div>
                        </div>
                    </Diamond>
                    <Diamond className="color-diamond"/>
                    <Diamond className="color-diamond"/>
                    <Diamond className="color-diamond"/>
                    <Diamond fillImage="/images/Members/cookie.jpg">
                        <div className="diamond-hover color1">
                            <div className="diamond-center">
                                <h3>陳昱睿</h3>
                                <span>介面</span>
                            </div>
                        </div>
                    </Diamond>
                    <Diamond fillImage="/images/Members/jimmy.jpg">
                        <div className="diamond-hover color1">
                            <div className="diamond-center">
                                <h3>吳俊明</h3>
                                <span>動畫</span>
                            </div>
                        </div>
                    </Diamond>
                    <Diamond className="color-diamond"/>
                </DiamondGroup>
            </section>
        )
    }
}
