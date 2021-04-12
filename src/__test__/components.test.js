/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Tasks from '../components/Tasks/Tasks'
import data from './todo.json'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import each from 'jest-each'
import axios from 'axios'

const texts = [
  ["Challenge: Work"],
]

const clicks = [
  ['Refresh', ''],
  ['Search For Tasks', '^&*^eVeaaa%%. &$'],
  ['Get Top Rated Tasks For Tags', '555  engaGiNg123'],
  ['Search For Tasks', '^&*^chaLleNge%%. &$'],
  ['Search For Tasks', 'excitingmoving'],
  ['Get Top Rated Tasks For Tags', 'excitingmoving'],
  [],
]

const suits = [
  [
    ['onLoad', 'input', 1, [], []],
    ['onLoad', 'button', 3, [], []],
    ['onLoad', 'videoIndex', 999, [], []],
    ['onLoad', 'videoTitle', 999, [], []],
    ['onLoad', 'teacherName', 999, [], []],
    ['onLoad', 'tag', 2600, [], []],
    ['onClick', 'videoTitle', 1, clicks.slice(1, 4), texts.slice(0)],
    ['onClick', 'videoIndex', 446, clicks.slice(4, 5), []],
  ],
]

let input, buttons
beforeEach(async () => {
  jest.mock('axios')
  axios.get = jest.fn().mockResolvedValue({ data })
  render(<Tasks />)
  input = await screen.findByLabelText('Search Tasks')
  buttons = await screen.findAllByRole('button')
  buttons = new Map(buttons.map(v => [v.textContent, v]))
})

afterEach(() => {
  jest.resetAllMocks()
  cleanup
})

describe('Test for components - Tasks', () => {

  for (let i = 0; i < suits.length; i++) {

    each(suits[i]).it('%s: no. of %s(s) = %d',
      async (event, resultElement, expected, clicks, texts) => {

        let result

        switch (event) {
          case 'onLoad':
            switch (resultElement) {
              case 'input': result = [input]; break
              case 'button': result = buttons; break
              default: result = await screen.findAllByTestId(resultElement); break
            }
            break
          case 'onClick':
            clicks.map(v => {
              fireEvent.change(input,
                { target: { value: v[1] } })
              fireEvent.click(buttons.get(v[0]))
            })
            result = await screen.findAllByTestId(resultElement)
            break
        }
        isNaN(expected) ?
          expect(JSON.stringify(result.map(v => v.textContent)))
            .toBe(JSON.stringify(texts)) :
          expect(result instanceof Map ?
            result.size : result.length).toBe(expected)
      })
  }

})