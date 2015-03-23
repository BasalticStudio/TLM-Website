/**
 * News Action
 */

import Dispatcher from '../dispatcher'
import NewsConstant from '../constants/News'

const News = Parse.Object.extend('News')

export default {
    load: () => {
        let query = new Parse.Query(News)
        query.limit(5).descending("createdAt")

        query.find({
            success: (results) => {
                Dispatcher.handleViewAction({
                    actionType: NewsConstant.LOAD,
                    news: results
                })
            }
        })
    }
}
