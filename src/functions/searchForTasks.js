import { includes } from './scrubParam'

export function searchForTasks(data, param) {

    return data
        .filter(v => {
            return (
                v.tags.some(t => includes(param, t)) ||
                includes(param, v.guest) ||
                v.task.split(': ').some(t => includes(param, t))
            )
        })
}
