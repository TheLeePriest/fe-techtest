import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import NumberGrid from "../src/components/NumberGrid/NumberGrid";

afterEach(cleanup);

describe('NumberGrid', function() {
    it('Renders the number grid', function() {
        render(<NumberGrid />);
    })
});
