import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingSpinner = () =>{

    return(
        <Container fluid className='p-0 bg-white d-flex flex-column justify-content-center align-items-center' style={{"width": "100vw", "height":"100vh"}}>
            <div className="spinner-border mb-2" role="status" style={{"width":"3em", "height": "3em"}}>
                
            </div>
            <span className="sr-only display-6 mt-5">Desvelando Oriente...</span>
        </Container>
    

    )
        
    
}

export default LoadingSpinner;