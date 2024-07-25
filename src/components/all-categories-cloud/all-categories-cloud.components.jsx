import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container , Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllCategoriesCloud = () =>{

    const[categories, setCategories] = useState([]);


    useEffect( () => {

        const getCategories = async() =>{

            axios.get("https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/categories")
            .then(response => setCategories(response.data.categories.sort()));
        }

        getCategories();

    }, []);

    return(
        
        <Container fluid className='mx-3 mx-md-0 px-0 px-md-5 mt-3 mt-5'>
            <h2> Categorías </h2>
            {
                categories.length > 0 ?
                
                <div className="d-flex flex-column flex-nowrap flex-md-wrap" style={{"max-height":"30em","width":"100%"}}>
                    {
                        categories.map( (category, index) => (

                           
                                <Link key={index} to={`categoria/${category.slug}`} className='mx-3 my-1 p-2'>{category.name}</Link>
                                    
                        ))
                    }
                        
                    
                </div>
                :
                <></>
           
                
            }
        </Container>
       
    );
}

export default AllCategoriesCloud;