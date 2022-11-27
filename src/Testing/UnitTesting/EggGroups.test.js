import { render, screen } from "@testing-library/react";
import EggGroup from '../../components/PokemonDetails/EggGroup';

describe("renders pokemon feature- eggGroup component", () => {
    it('renders the pokemon feature- eggGroup component properly', () => {
        render(<EggGroup />);
    });

    it('display  pokemon feature-eggGroup id', () => {
        render(<EggGroup />);
        const search = screen.getByTestId('PokemonDetail__eggGroup');
        expect(search).toBeInTheDocument();
    });

});