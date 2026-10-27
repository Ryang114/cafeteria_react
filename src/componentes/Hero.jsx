import '../componentes/Hero.css';
import graos_cafe from '../assets/home-img.jpg'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container py-5" >
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6" >
                        <span className="hero-eyebrow text-uppercase fw-semibold">
                            Café especial da região
                        </span>
                        <h1 className="hero-title fw-bold mt-4 mb-4">
                            O melhor café da região, {" "}

                            <span className="text-gold">
                                no seu ritmok
                            </span>
                        </h1>

                        <p className="hero-text mb-4">
                            Grãos selecionados, torra artesanal e ambiente acolhedor
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <a href="#menu" className="btn btn-gold px-4 py-2">Ver cardápio</a>
                            <a href="#about" className="btn btn-outline-gold px-4 py-2">
                                Conheça a Cafena
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                       <div className='ratio ratio-4x3 hero-photo rounded-5'>
                             <img src={graos_cafe} alt='graos_cafe' />
                       </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;