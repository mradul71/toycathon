import React from 'react';

function Home(){
    return (
        <div>
            <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
            <img src="assets/img/first.gif"></img>
    <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">

      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Toy and Animation Hackathon</span></h2>
          <p class="animate__animated fanimate__adeInUp">Every idea is worth a try, no big ones got it in single go.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">A Challenge</h2>
          <p class="animate__animated animate__fadeInUp">For coding enthusiast and budding developers to push their limits and enhance their tech skills</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Providing Opportunity</h2>
          <p class="animate__animated animate__fadeInUp">to gain knowledge on developer technologies, experience of building real world applications.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">The Technical Skills</h2>
          <p class="animate__animated animate__fadeInUp">To build innovative minds that encourage students in making prototypes,real-time projects and to provide solutions for any real-time problem</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>
      

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section>
        </div>
  )}

export default Home;
