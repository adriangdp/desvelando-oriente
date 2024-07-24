import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody} from 'react-bootstrap';

import parser from 'html-react-parser/lib/index';


const CategoryToast = ({post={}}) =>{


    return(
        
        <Card className='h-100' style={{"height":"100%"}}>
            <Card.Header>
                <Card.Title>{parser(post.title)}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className='d-flex ' style={{"max-height":"10em"}}>
                    {
                        post.featured_image !== "" ?
                            <img 
                                src={post.featured_image} 
                                alt="Imagen representativa del artículo" 
                                style={{"max-height":"10em","width":"auto"}}
                                className='me-5'
                            />

                        :
                            <></>
                    }
                    <div>
                        {parser(post.excerpt)}
                        
                        <a href={`/posts/${post.slug}`}>Leer más...</a>
                    </div>
                </div>
                
                
            </Card.Body>
        </Card>
    );
}

export default CategoryToast;