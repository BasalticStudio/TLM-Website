/**
 * Dispatcher
 */

import React from 'react'
import Flux from 'flux'

class Dispatcher extends Flux.Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
}

export default new Dispatcher;
