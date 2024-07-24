import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import "./single-post.style.scss"

const SinglePost =() =>{
   const params = useParams();
   const [post,setPost] = useState({})

    useEffect(()=>{
        const fetch = async()=>{
        axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/posts/slug:${params.slug}`)
        .then((response) => {try {setPost(response.data)} catch(error){console.log(error)}});
        
        }

        fetch();
    }, [params.slug])
   
    return(
        
        <>
    
            {
                post.content ?
                    
                    <Row className='pt-5 mt-5 w-100' >
                        <Col className='col-sm-3 col-md-2 mt-5 pt-3 mx-2 d-flex flex-column justify-content-start align-items-center'>
                            <img src={post.author.avatar_URL} className="w-50 rounded-circle" alt="" />
                            <p className='mt-3 text-center'>{post.author.name}</p>
                            
                        </Col>
                        <Col className='col-sm-9 col-md-6 my-5 ms-5 contenido' style={{"lineHeight" : "1.8em"}}>
                            <h2 className='display-3 mb-5'>{post.title}</h2>  
                            <div className='d-flex my-3'>
                                <div>
                                    {
                                        Object.keys(post.categories).map(element =>(
                                            <Badge className='mx-1 p-2'>{element}</Badge>
                                        ))
                                    }
                                </div>
                                <div className="w-50"></div>
                                <p className='mt-3 text-end lh-1'>
                                {moment(post.date).locale('es').format("DD MMMM YYYY")}
                                
                                </p>
                                
                            </div>
                            
                                
                            {parse(post.content)}
                        </Col>
                        
                    </Row>

                    :

                    <LoadingSpinner></LoadingSpinner>
            }
        </>
        
    );
}

export default SinglePost;