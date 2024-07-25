import {React} from "react";

import { useSelector } from "react-redux";

import { Container, Col, Row } from 'react-bootstrap';

import SocialMinBar from "../../components/social-min-bar/social-min-bar.component";
import Hero from "../../components/hero/hero.component";
import CategoriesHomeHistoria from '../../components/categories-home-historia/categories-home-historia.component';
import CategoriesHomeActualidad from '../../components/categories-home-actualidad/categories-home-actualidad.component';
import AllCategoriesCloud from '../../components/all-categories-cloud/all-categories-cloud.components';


const Home = () => {

  const lastPost = useSelector((state) => state.lastPost);

  return (
    
    <Container fluid className='p-0 mt-5'>
      {
        lastPost.loading === false ?

        <Hero
        title={ 
         lastPost.lastPostPublished.title}
        text={
          
          lastPost.lastPostPublished.excerpt 
        }
        bkg={
          
          lastPost.lastPostPublished.featured_image
        }

        slug={lastPost.lastPostPublished.slug}

        
        
      ></Hero>

      :

      <Hero
        title={ 
         "loading"}
        text={
          "loading preview..."
        }
        bkg={
          ""
        }
        
      ></Hero>

      }
      
      <SocialMinBar />
      <header className="mt-4 pb-3">
        <h2 className="display-5 mx-3 text-sm-start text-md-center">¡Bienvenido a Desvelando Oriente!</h2>
        <p className="fs-5  mx-3 text-sm-start text-md-center">
          Historia y actualidad sin sensacionalismos ni generalizaciones
          baratas.
        </p>
      </header>
      <CategoriesHomeHistoria />
      <CategoriesHomeActualidad />
      <AllCategoriesCloud />
      
      <Row className=' mx-0 pt-3 pb-0 g-0 mt-5 '>
        <Col className='col-md-12 col-lg-7 mt-5 px-5 py-5 align-content-center bg-secondary text-white'>
          <aside style={{"lineHeight": "1.85em"}}>
            El contenido de este blog ha sido creado exclusivamente por mí (Alejandro Salamanca Rodríguez), 
            salvo que se mencione lo contrario (algún artículo y la mayoría de las imágenes). Eres libre de citarlo y reproducirlo, 
            siempre sea sin fines lucrativos, que indiques el autor y la fuente (esta página) Y que me lo notifiques mediante comentario o email. 
            Por favor, no copies y pegues el contenido de la página sin avisarme. He dedicado mucho tiempo y esfuerzo no remunerado a esto, 
            así que no tengas morro. Los gastos del alojamiento y el dominio corren a mi cuenta. Si quieres contribuir (económicamente o de 
            cualquier otra forma), no dudes en escribirme un email y comprobar cómo &nbsp;
            <a 
              href="https://desvelandooriente.com/apoya-desvelando-oriente/" 
              className="
                link-info 
                link-offset-2 
                link-offset-2-hover 
                link-underline 
                link-underline-opacity-0 
                link-underline-opacity-100-hover
              ">
               apoyar a Desvelando Oriente
            </a>.
          </aside>
          
        </Col>
        <Col className='col-lg-5 d-none d-lg-flex bg-secondary justify-content-end mt-5 '>
          <img className="img-fluid" src="/media/galeria/pb-truck.jpg" alt="Camión de la empresa British Petroleum" />
        </Col>
      </Row>
      
      <Row className='px-5 mx-auto pt-0' style={{"backgroundColor":"#0a0905"}}>
        <a style={{"width":"fit-content"}} href='http://bloguerosdehistoria.blogspot.com.ar/2017/06/nuestros-blogs.html'>
          <img src="/media/galeria/bh1.jpg" alt="Banner de Blogueros de historia" href='http://bloguerosdehistoria.blogspot.com.ar/2017/06/nuestros-blogs.html'></img>
        </a>
      </Row>
    </Container>
  );
};

export default Home;
