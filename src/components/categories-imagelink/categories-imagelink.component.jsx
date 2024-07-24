import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './categories-imagelink.style.scss';

const CategoriesImageLink = ({title = "", linkMsg = "", linkRef = "#", img="", alt=""}) =>{

    return(
        <Col className="col-12 col-sm-6 col-md-4 col-xl-2">   
        <Link to={linkRef}>
            <div class="hovereffect">
                <img class="img-responsive" src={img} alt={alt} />
                    <div class="overlay">
                        <h2>{title}</h2>
                        <p>
                            {linkMsg}
                        </p>
                    </div>
            </div>
        </Link>   
            
        </Col>
    );
}

export default CategoriesImageLink