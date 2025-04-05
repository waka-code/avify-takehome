import { FuelItem } from "../../ui/components/molecules/FuelItem";
import { render, screen, } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('FuelItem', () => {
  it('renders fuel name and percentage', () => {
    render(<FuelItem fuel="wind" percentage={25} />);
    expect(screen.getByText('wind')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
  });
});