import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import GridItem from "../src/components/GridItem/GridItem";

afterEach(cleanup);

describe('GridItem', function() {
    it('Renders the GridItem', function () {
        render(<GridItem/>);
    });

    it('Renders the value passed down as text', function() {
        render(<GridItem value={2} />)
        screen.getByText('2')

        render(<GridItem value={12} />)
        screen.getByText('12')

        render(<GridItem value={100} />)
        screen.getByText('100')
    })
})
