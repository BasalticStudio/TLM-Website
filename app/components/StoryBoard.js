/**
 * Story Board Component
 */

import React from 'react'

export default class StoryBoard extends React.Component {
    getImage() {
        return `images/CGs/${this.props.image}`
    }
    getBoardClass() {
        return this.props.right ? "story-board right" : "story-board"
    }
    render() {
        return (
            <article className={this.getBoardClass()}>
                <div className="story-image">
                    <img src={this.getImage()} />
                </div>
                <div className="story-entry">
                    <div className="story-entry-overlay">
                        {this.props.children}
                    </div>
                </div>
            </article>
        )
    }
}
