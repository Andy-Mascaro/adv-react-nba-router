import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event";
import App from "./src/App"


describe('Testing Character', () => {
    it('Should render Alan Rails', async () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );

        screen.getByText('...loading');



        const info = await screen.findByText('Alan Rails');
        expect(info).toBeInTheDocument();
        userEvent.click(info);
        const img = await screen.findByAltText('Image of character');
        expect(img).toBeInTheDocument();
        screen.debug();
    });
});