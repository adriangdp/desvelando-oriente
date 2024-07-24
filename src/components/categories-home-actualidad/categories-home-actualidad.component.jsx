import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';

import CategoriesImageLink from '../categories-imagelink/categories-imagelink.component';

const CategoriesHomeActualidad = () =>{

    return(
        <Container fluid className='mx-0 px-0 px-md-5 mt-3 mt-md-5'>
            <h2 className='display-5 pb-0'>Actualidad</h2>
            <Row className='g-3 g-md-0 pt-5'>
                <CategoriesImageLink 
                    title="Preguntas y respuestas" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-preguntas-y-respuestas.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/preguntas-y-respuestas'
                    alt='Acceder'
                  
                />
                <CategoriesImageLink 
                    title="Movimientos sociales" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-movimientos-sociales.jpg"
                    linkMsg="Acceder"
                    linkRef='#'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Migraciones y fronteras" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-migraciones.jpg"
                    linkMsg="Acceder"
                    linkRef='#'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Opinion" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-opinion.jpg"
                    linkMsg="Acceder"
                    linkRef='#'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Luces y sombras de Qatar" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-luces-sombras-qatar.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/qatar'
                    alt='Acceder'
                />
                <CategoriesImageLink 
                    title="Guerra Civil Siria" 
                    img="https://adriangdp.github.io/desvelando-oriente/media/categories/cat-afganistan.jpg"
                    linkMsg="Acceder"
                    linkRef='/categoria/guerra-civil-siria'
                    alt='Acceder'
                />
                
         
            </Row>
            
        </Container>
    );
}

export default CategoriesHomeActualidad