
import './index.scss'
import Red from '../img/red.svg'
import Posicion from '../img/posicion.svg'
import Logo from '../img/send/logo.svg'

const Send = () => {
    return(
        <div className="containerSend">
            <div className="filtro"></div>
            <div className="logo">
                <img src={Logo} ></img>
            </div>
        
            <div className="titleHeader">
                ¡El nacer de tu <br /> belleza empieza hoy!
            </div>
            <div className="subtitleHeader">
                <text>
                Tu Concierge te contactará <br />
                para tu <strong>Experiencia Resvera</strong>
                </text>
            </div>
            <div className="botonesContact">
                <a  href='https://api.whatsapp.com/send?phone=525589469744&text=Quiero%20agendar%20mi%20cita&fbclid=IwAR0sjuJhgR4K9S8quNy4SngJelWOyQ3XAZGdZJZgkiO-Z06KqBnF-VbauCA' target="_blank">
                    <button>Contactar ahora</button>
                </a>
                <a href='https://resvera.com.mx/Faciales/faciales.html' target="_blank">
                    <button>Quiero saber más</button>
                </a>
            </div>
            <div className="footer">
                <div className='visitaNuestra'>                
                <img src={Red}></img><a href='https://resvera.com.mx/Faciales/faciales.html' target="_blank">Visita nuestra <label> Wellness Beauty Clinic</label></a> 
                <br/>
                </div>                
                <img src={Posicion}></img>
                <text className='direccion'><a  href='https://www.google.com/maps/place/Resvera/@19.4365009,-99.1908462,17z/data=!3m1!4b1!4m5!3m4!1s0x85d203e876d74693:0xb8518d1d3d37b8b!8m2!3d19.4364943!4d-99.1907841' target="_blank">Arquimides 198, Polanco, CDMX</a></text>
                <br/>
                <text><label className='division'><a href='https://www.facebook.com/resveramx' target="_blank">Facebook</a></label><label className='insta'><a href='https://www.instagram.com/resveramx/' target="_blank">Instagram</a></label></text>
            </div>
        </div>
    )
}

export default Send