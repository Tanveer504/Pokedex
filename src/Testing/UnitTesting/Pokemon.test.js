import { fireEvent, render, screen } from "@testing-library/react";
import Pokemon from "../../components/Pokemon/Pokemon";

describe("renders pokemon component", () => {
    it('renders the pokemon component properly', () => {
        render(<Pokemon />);
    });

    it('display home page -Searchbar', () => {
        render(<Pokemon />);
        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
    });

    it('home page- write in input', () => {
        render(<Pokemon />);
        const input = screen.getByPlaceholderText('Name or Number');
        fireEvent.click(input);
        fireEvent.change(input, { target: { value: "Bulbasaur" } })
        expect(input.value).toBe("Bulbasaur");
    })

    it('home page - displays dropdown', () => {
        render(<Pokemon />);
        const item = screen.getByTestId('dropdown');
        expect(item).toBeInTheDocument();
    })

});
