/**
 * Team Member
 */

import React from 'react'

export default class TeamMember extends React.Component {
    render() {
        return (
            <article className="team-member">
                <div className="team-member-avatar">
                    <img src="/images/Members/default.jpg"/>
                </div>
                <div className="team-member-meta">
                    <div className="team-member-meta-inner">
                        <h2 className="team-member-name">
                            {this.props.name}
                            <span className="team-member-title">{this.props.title}</span>
                        </h2>
                        {this.props.children}
                    </div>
                </div>
            </article>
        )
    }
}
