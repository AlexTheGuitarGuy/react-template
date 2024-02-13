import { render } from '@testing-library/react'
import Testable from 'components/Testable'
import { describe, expect, test } from 'vitest'

describe('Testable', () => {
  test('should render', () => {
    const { container } = render(<Testable />)

    expect(container).toBeDefined()
  })
})
