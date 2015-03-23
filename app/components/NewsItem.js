/**
 * News Item Component
 */

import React from 'react'

export default class NewsItem extends React.Component {
    _formatedTime() {
        let year = this.props.time.getFullYear()
        let month = this.props.time.toLocaleString("en-us", {month: "short"})
        let day = this.props.time.getDate()
        return  [
            <span className="news-date-year" key={0}>{year}</span>,
            <span className="news-date-month" key={1}>{month}</span>,
            <span className="news-date-day" key={2}>{day}</span>
        ]
    }
    render() {
        return (
            <article className="news-item">
                <div className="news-date">
                    {this._formatedTime()}
                </div>
                <div className="news-entry">
                    {this.props.content}
                </div>
                <div className="news-label">
                    {this.props.label}
                </div>
            </article>
        )
    }
}
