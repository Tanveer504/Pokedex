import { render, screen } from '@testing-library/react';
import Header from '../../components/Pokemon/Header/Header';

describe("Pokemon Home Page - Header component", () => {
    it('renders the component properly', () => {
        render(<Header />);
    });
    it('displays Pokemon Home Page - heading', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    });
    it('displays Pokemon Home Page - text', () => {
        render(<Header />);
        const text = screen.getByText('Pokédex');
        expect(text).toBeInTheDocument();
    })
});
