/**
 * News Store
 */

import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import * as NewsConstant from '../constants/News'

const CHANGE_EVENT = 'CHANGE'

var _news = []

class News extends EventEmitter {
    constructor() {
        this.dispatcherIndex = Dispatcher.register((payload) => {
            let action = payload.action

            switch(action.actionType) {
                case NewsConstant.LOADED:
                    _news = action.news
                    this.emitChange()
                    break
            }

            return true
        })
    }

    getAll() {
        return _news;
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
}

export default new News;
