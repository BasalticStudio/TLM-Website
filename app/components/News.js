/**
 * News Component
 */

import React from 'react'

import NewsItem from './NewsItem'

var news = [
    { content: '遊戲官網正式上線', time: new Date(), label: '公告' }
]

export default class News extends React.Component {
    _getNewsItems() {
        return news.map((item, key) => {
            return (
                <NewsItem key={key} {...item} />
            )
        })
    }
    render() {
        return (
            <section id="news" className="container news section">
                {this._getNewsItems()}
            </section>
        )
    }
}
