import { includes } from './scrubParam'

const size = 20

export function getTopRatedTasksForTags(data, param) {

    return data
        .filter(v => v.tags.some(t => includes(param, t)))
        .sort((a, b) => { return b.averageUserRating - a.averageUserRating })
        .slice(0, size)
}
