/* eslint-disable no-undef */
import { getTopRatedTasksForTags } from '../functions/getTopRatedTasksForTags'
import { searchForTasks } from '../functions/searchForTasks'
import data from './todo.json'
import each from 'jest-each'

let state = data
const suits = [
    [
        ['Refresh', '', 999],
        ['Search For Tasks', '', 0],
        ['Get Top Rated Tasks For Tags', '', 0],
    ],
    [
        ['Refresh', '', 999],
        ['Search For Tasks', '^&*^eVeaaa%%. &$', 46],
        ['Get Top Rated Tasks For Tags', '555  engaGiNg123', 16],
        ['Search For Tasks', '^&*^chaLleNge%%. &$', 1],
    ],
    [
        ['Refresh', '', 999],
        ['Search For Tasks', 'excitingmoving', 446],
        ['Get Top Rated Tasks For Tags', 'excitingmoving', 20],
    ],
]

describe('Test for functions - no UI', () => {

    for (let i = 0; i < suits.length; i++) {

        each(suits[i]).test('%s: %s = %d', (func, param, expected) => {

            switch (func) {
                case 'Refresh':
                    state = data
                    break
                case 'Search For Tasks':
                    state = searchForTasks(state, param)
                    break
                case 'Get Top Rated Tasks For Tags':
                    state = getTopRatedTasksForTags(state, param)
                    break
            }
            isNaN(expected) ? null :
                expect(state.length).toBe(expected)
        })
    }

})
