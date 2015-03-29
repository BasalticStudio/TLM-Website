/**
 * News Component
 */

import React from 'react'

import NewsItem from './NewsItem'
import NewsStore from '../stores/News'
import NewsAction from '../actions/News'

export default class News extends React.Component {
    constructor() {
        this.state = {
            news: NewsStore.getAll()
        }

        this._onNewsUpdate = () => {
            this.setState({
                news: NewsStore.getAll()
            })
        }

    }

    componentDidUpdate() {
        _jf.flush()
    }
    componentDidMount() {
        NewsStore.addChangeListener(this._onNewsUpdate)
        NewsAction.load()
    }
    componentWillUnmount() {
        NewsStore.removeChangeListener(this._onNewsUpdate);
    }
    _getNewsItems() {
        return this.state.news.map((item, key) => {
            return (
                <NewsItem key={key} news={item} />
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
