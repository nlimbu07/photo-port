// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

afterEach(cleanup);

describe('Model component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />)
    })

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        // Assert the match
        const {asFragment} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', ()=> {
    it('calls onclose handler', () => {
        const {getByText} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />)
        fireEvent.click(getByText('Close this modal'))

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})