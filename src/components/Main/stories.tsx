import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  component: Main,
  decorators: [withKnobs],
  title: 'Main'
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
