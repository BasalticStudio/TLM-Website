/**
 * Navigation
 */

import React from 'react'

const MenuItem = [
    { name: '最新消息', note: 'News', href: '#news' },
    { name: '故事大綱', note: 'Story', href: '#story' },
    { name: '遊戲系統', note: 'System', href: '#system' },
    { name: '製作團隊', note: 'Team', href: '#team' },
    { name: '下載遊戲', note: 'Download', href: '#download' }
]


export default class Navigation extends React.Component {
    _NavigationItems() {
        return MenuItem.map((item, key) => {
            return (
                <li key={key} className="nav-item">
                    <a href={item.href} title={item.name}>
                        {item.name}
                        <span className="note">{item.note}</span>
                    </a>
                </li>
            )
        })
    }
    render() {
        return (
            <nav id="navigation" className="container">
                <ul className="navbar block-navbar">
                    {this._NavigationItems()}
                </ul>
            </nav>
        )
    }
}
