import React from 'react';
import {cleanup, render, fireEvent, screen} from '@testing-library/react';
import NumberGrid from "../src/components/NumberGrid/NumberGrid";

afterEach(cleanup);

describe('NumberGrid', function() {
    it('Renders the number grid', function() {
        render(<NumberGrid />);
    });

    it('Renders all 144 grid items', function() {
        const {container, getAllByText} = render(<NumberGrid />);
        const items = getAllByText((container, /^\d+$/))
        expect(items.length).toBe(144)
    });

    it('Sets all multiples of 2 to be active when number 2 item is clicked', function() {
        const {container} = render(<NumberGrid />);
        const secondItem = screen.getByTestId('item-2');

        fireEvent(secondItem, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const activeElements = Array.from(container.querySelectorAll('.active'));
        const inActiveElements = Array.from(container.querySelectorAll('.inactive'));
        expect(activeElements.length).toBe(72)
        expect(inActiveElements.length).toBe(72);
    });

    it('There should be no extra active items when number 100 is clicked', function() {
        const {container} = render(<NumberGrid />);
        const secondItem = screen.getByTestId('item-100');

        fireEvent(secondItem, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const activeElements = Array.from(container.querySelectorAll('.active'));
        const inActiveElements = Array.from(container.querySelectorAll('.inactive'));
        expect(activeElements.length).toBe(1);
        expect(inActiveElements.length).toBe(143);
    });
});
