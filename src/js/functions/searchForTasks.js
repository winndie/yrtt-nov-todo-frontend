import { includes } from './scrubParam'

export function searchForTasks(tasks, filter) {

    return tasks
        .filter(v => {
            return (
                v.tags.some(t => includes(filter, t)) ||
                includes(filter, v.guest) ||
                v.task.split(': ').some(t => includes(filter, t))
            )
        })
}
