import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { Row, Col, Container } from 'react-bootstrap';

import CategoryToast from '../../components/categories-page/category-toast.component';
import Spinner from '../../components/loading-spinner/loading-spinner.component';

const CategoryRoute = () =>{
    const params = useParams();
    const [category, SetCategory] = useState({});
    const[postsCategory, setPostsCategoy] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const posts = `https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/posts?category=${params.category}`;
        const categoryInfo = `https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/categories/slug:${params.category}`;
        

        const getCategoryPosts = async() =>{

            const getCategoryInfo = axios.get(categoryInfo)
            .then( info => {try{SetCategory(info.data)} catch(error){console.log(error)}});

            const getCategoryElements = axios.get(posts)
            .then(returned => {try{setPostsCategoy(returned.data.posts)} catch(error){console.log(error)}})

        }

        getCategoryPosts();
    },[])

    return(
        <Container className='mt-10 px-10'>
            
            { category !== null ?
            <div className="my-4 py-3">
                <div className='d-flex align-items-center'>
                     <i className="lni lni-arrow-left me-3 fs-3" style={{"cursor":"pointer"}} onClick={() => navigate(-1)}></i>
                     <h2>{category.name}</h2>
                     
                </div>
                <p className='mt-3'>{category.description}</p>
            </div>
                
                
                :
                <></> 

            }
            <Row xs={2} md={4} className="g-5">
                {
                    postsCategory.length > 0?                  
                           
                            postsCategory.map( (nPost, index) => (
                            <Col key={index} className='col-12' style={{"minHeight":"fit-content"}}>
                                <CategoryToast post={nPost}></CategoryToast>
                            </Col>
                            
                        ))
                        
                    :
                        <Spinner />
                }
            </Row>
        </Container>
       
       
    );
}

export default CategoryRoute;