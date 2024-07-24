import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';

import CategoriesImageLink from '../categories-imagelink/categories-imagelink.component';

const CategoriesHome = () =>{

    return(
        <Container fluid className='mx-0 px-0 px-md-5 mt-3 mt-md-5'>
            <h2 className='display-5 pb-0'>Historia</h2>
            <Row className='g-3 g-md-0 pt-5'>
                <CategoriesImageLink 
                    title="Breve historia de Oriente Medio" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-breve-historia-oriente-medio.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/breve-historia-de-oriente-medio'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Personajes" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-personajes.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/personajes'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Irán" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-iran.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/iran'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Arabia Saudí" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-arabia-saudi.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/arabia-saudi'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="España y el rif" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-espana-y-rif.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/espana-en-el-rif'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Afganistan" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-afganistan.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/afganistan'
                    alt='Acceder'
                />
                
         
            </Row>
            
        </Container>
    );
}

export default CategoriesHome