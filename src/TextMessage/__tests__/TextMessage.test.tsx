import * as React from 'react'
import { render } from 'react-native-testing-library'
import { message, size, user } from '../../fixtures'
import { TextMessage } from '../TextMessage'

test('it renders text', () => {
  const text = 'text'
  const { getByText } = render(
    <TextMessage message={message} parentComponentSize={size} user={user} />
  )
  const textComponent = getByText(text)
  expect(textComponent).toBeDefined()
})
