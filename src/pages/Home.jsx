import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>

      <div className='page-title'>
        <h2>Bienvenidos a Volunteer</h2>
      </div>


      <div className='home-cards'>
        <div id='hexGrid'>

          <div className="home-complete-card">
            <div className="cat-type-card-comunitario">
              <div className='type-card-image'>

                <div className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://votingaccessforall.org/wp-content/uploads/2022/02/volunteer.jpg" alt="ambiental" />
                      <h1>Ambiental</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </div>

              </div>

              <div className='type-card-info'>

                  <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                  <p>¿Te interesa la protección y recuperación de especies o espacios naturales? ¿El cuidado de los animales? ¿El desarrollo de una conciencia medioambiental? Con el voluntariado ambiental puedes implicarte directamente en la conservación del medio ambiente y la sensibilización de la población respecto a la naturaleza, la sostenibilidad y el equilibrio ecológico del planeta. En este campo hay proyectos de acción local y proyectos globales de ámbito internacional.
                  </p>

              </div>
            </div>
          </div>
          
          <div className="home-complete-card">
            <div className="cat-type-card-comunitario">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://au.res.keymedia.com/files/image/Human%20Capital/volunteers.jpg" alt="" />
                      <h1>Comunitario</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> COMIDA A ANCIANOS</h1>
                <p>Mediante el voluntariado comunitario se promueven y se participa en movimientos cívicos, vecinales, colectivos y de participación ciudadana para el desarrollo y la cohesión de la comunidad. Participando en proyectos de voluntariado comunitario puedes incidir en tu propia comunidad mediante actividades educativas, de ocio y tiempo libre, recreativas, deportivas, culturales,…
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-cultural">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://www.hkyaf.com/images/events/events-633-thumb-1.jpg" alt="" />
                      <h1>Cultural</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>En le marco del voluntariado cultural puedes participar en proyectos muy diversos relacionados con trabajos de recuperación, conservación o difusión de la identidad cultural e histórica, la promoción de la creatividad y la difusión de los bienes culturales y el patrimonio histórico. En este contexto, puedes ser voluntario/a en un museo, en actos festivos de la comunidad, en una excavación arqueológica, en una biblioteca, en un monumento histórico,…
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-deportivo">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://britishwheelchairbasketball.co.uk/wp-content/uploads/2019/05/Volunteer-Photo-.jpg" alt="" />
                      <h1>Deportivo</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>¿Te gustaría participar en la organización de eventos deportivos? ¿O colaborar en un club deportivo en sus actividades periódicas? El voluntariado deportivo favorece la integración social de las personas de una comunidad y te ofrece, como voluntario/a, la posibilidad de vincularte con el deporte mediante tu acción altruista. ¿Te animas?
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-educativos">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://www.crhopefoundation.org/wp-content/uploads/2021/10/cr-hope-foundation-volunteer-zanzibar-024-1.jpg" alt="" />
                      <h1>Educativo</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>Si te gusta la educación, embárcate en la aventura del voluntariado educativo. Puedes participar en la educación de niños y niñas, jóvenes y adultos mediante programas de apoyo a la lectura, apoyo escolar, alfabetización, educación inclusiva, educación en el tiempo libre, actividades de la comunidad escolar, asociaciones de padres y madres de alumnos…. ¿Te atreves?
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-international">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://www.volunteerhq.org/images/pages/posts/2020/2020-07-23-best-programs/best-volunteer-abroad-programs-ivhq-social.png" alt="" />
                      <h1>Internacional</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>Una manera de hacer voluntariado internacional es la cooperación al desarrollo, que favorece la promoción socioeconómica o desarrollo comunitario para luchar contra la pobreza y mejorar las condiciones de vida de una comunidad o un sector social concreto. Como voluntario/a o cooperante puedes trabajar en la sede de la organización o te puedes plantear una estancia corta o de larga duración sobre el terreno. Las organizaciones que desarrollan programas de voluntariado internacional o cooperación al desarrollo tienen cursos y formaciones específicas.
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-ocio">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://govolunteerafrica.org/wp-content/uploads/2017/10/volunteer-workers-678x381.jpg" alt="" />
                      <h1>Ocio y Tiempo Libre</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>
              
              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>¿Te gustaría acompañar a los niños y niños de colonias? ¿Promover actividades de ocio para la integración social de personas con riesgo de exclusión? Las entidades que desarrollan programas de voluntariado en el ocio y el tiempo libre promueven actividades socio-educativas, culturales, deportivas e incluso actividades relacionadas con el medio ambiente con el fin de potenciar la educación y el desarrollo comunitario.
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-civil">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://www.spek.fi/wp-content/uploads/2019/12/vapaaehtoiset_WP.jpg" alt="" />
                      <h1>Protección Civil</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>El voluntariado de protección civil y ayuda humanitaria da respuesta y socorro en situaciones de emergencia como son catástrofes naturales, guerras, atentados, accidentes,… Las tareas que pueden realizarse en un contexto de emergencia son muy variadas; desde asistencia y apoyo básico inmediato hasta actuaciones médicas, apoyo psicológico, reparto de alimentos, reconstrucción de viviendas,…
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-sanitario">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://nation-media-assets.storage.googleapis.com/wp-content/uploads/2021/10/07230215/doctors-1.jpg" alt="" />
                      <h1>Socio-Sanitario</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>Hay muchas organizaciones de voluntariado que trabajan para mejorar la calidad de vida de las personas afectadas por una enfermedad, ya sea aguda o crónica, así como para dar apoyo a los familiares de enfermos, promover la donación y trasplantes de sangre y de órganos, participar en la asistencia domiciliaria y hospitalaria, ejecutar programas de sensibilización, promoción de la salud y hábitos de vida saludables… ¿Te animas a probar esta experiencia?
                </p>

              </div>
            </div>
          </div>

          <div className="home-complete-card">
            <div className="cat-type-card-social">
              <div className='type-card-image'>

                <li className="hex">
                  <div className="hexIn">
                    <Link className="hexLink" to={'/proposals'}>
                      <img src="https://spanishinstitute.net/wp-content/uploads/2021/03/March-26-volunteering-abroad-in-Spain-.jpg" alt="" />
                      <h1>Social</h1>
                      <p>Luchamos por replantar zonas maltratadas por los incendios.</p>
                    </Link>
                  </div>
                </li>

              </div>

              <div className='type-card-info'>

                <h1> PROGRAMA DE WWF PARA LA CONSERVACIÓN DE LOS BOSQUES</h1>
                <p>El voluntariado social es uno de los más desarrollados en nuestra sociedad. Es un tipo de voluntariado muy cercano a las personas destinatarias de los proyectos: personas con adicciones, personas discapacitadas, niños y niñas, jóvenes, familias, inmigrantes y refugiados/as, reclusos/as y ex-reclusos/as, personas sin hogar, personas mayores,…
                </p>

              </div>
            </div>
          </div>


        </div>
      </div>
    
    </div>
  )
}

export default Home