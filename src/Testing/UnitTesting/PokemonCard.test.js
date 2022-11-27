import PokemonCard from "../../components/Pokemon/PokemonCard";
import { render, screen } from '@testing-library/react';

describe("Pokemon Grid component", () => {
    it('renders the Pokemon Grid component properly', () => {
        render(<PokemonCard />);
    });

    it('should receive Pokemon Grid props correctly', () => {

        render(<PokemonCard name={'Bulbasaur'} id={1} />);
        screen.getByText("Bulbasaur");
    });

    it('displays Pokemon Grid image', () => {
        render(<PokemonCard />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    })

    it('displays Pokemon Grid text', () => {
        render(<PokemonCard />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    })

});