import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
// import CharacterCard from './CharacterCard';



describe('Detail page Test', () => {
    it('should show detail of selected character', async () => {
        render(
        <MemoryRouter initialEntries={['/character/17']}>
            <App />
        </MemoryRouter>
    );
    
    //   screen.getByText(/...loading/i);
    
    

   

    const img = await screen.findByAltText('Image of character');
    expect(img).toBeInTheDocument();
     screen.debug();

  });

});
