// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GateChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GateChain/i);
    expect(titleElement).toBeInTheDocument();
});
