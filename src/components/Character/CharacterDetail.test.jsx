import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Detail page Test', () => {
    it('should show detail of selected character', async () => {
        render(
        <MemoryRouter initialEntries={['/17']}>
            <App />
        </MemoryRouter>
    );

    const img = await screen.findByAltText('Image of character');
    expect(img).toBeInTheDocument();
    
    const name = await screen.findByText('Annie');
    expect(name).toBeInTheDocument();


    screen.debug();
  });

});
