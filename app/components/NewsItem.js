/**
 * News Item Component
 */

import React from 'react'

export default class NewsItem extends React.Component {
    _formatedTime() {
        let time = this.props.news.createdAt
        let year = time.getFullYear()
        let month = time.toLocaleString("en-us", {month: "short"})
        let day = time.getDate()
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
                    {this.props.news.get('entry')}
                </div>
                <div className="news-label">
                    {this.props.news.get('label')}
                </div>
            </article>
        )
    }
}
