import './index.scss'
import {useState, useRef, useEffect, useLayoutEffect} from 'react'
import gsap from 'gsap'


import Icono from '../img/icono+.svg'
import Logo from '../img/logo.svg'
import LogoP from '../img/LogoP.svg'
import Red from '../img/red.svg'
import RedP from '../img/RedP.svg'
import Posicion from '../img/posicion.svg'
import FaceP from '../img/FaceP.svg'
import InstaP from '../img/InstaP.svg'


const Home = () =>{
    const[statusBoton,setEstatusBoton] = useState(true)
    const[statusBotonDos,setEstatusBotonDos] = useState(true)
    const[estadoPop, setEstadoPop] =useState("static")
    const[estadoPopEscritorio, setEstadoPopEscritorio] =useState("static")


    const[textoSeleccionado, setTextoSeleccionado] =useState("")
    const[textoSeleccionadoEscritorio, setTextoSeleccionadoEscritorio] =useState("")


    const[vistaUno,setVistaUno]= useState('none')
    const[vistaDos,setVistaDos]= useState('none')

    const tl = gsap.timeline()
    const botonMas = useRef(null);
    const refVistaUno = useRef(null);
    const refVistaUnoVentanaUno = useRef(null);
    const refVistaUnoVentanaDos = useRef(null);
    const refVistaUnoVentanaTres = useRef(null);
    const refVistaUnoVentanaDosText = useRef(null);
    const refVistaUnoVentanaDosTexto = useRef(null);
    const cambiarSegundoBoton = useRef(null);
    const cambiarSegundoBotonLineaUno = useRef(null);
    const cambiarSegundoBotonLineaDos = useRef(null);
    const refVistaUnoVentanaDosSeleccion = useRef(null);
    
    const refVistaUnoVentanaDosEscritorio = useRef(null);
    const refVistaUnoVentanaTresEscritorio = useRef(null);
    const refVistaUnoVentanaDosTextEscritorio = useRef(null);
    const refVistaUnoVentanaDosTextoEscritorio = useRef(null);
    const refVistaUnoVentanaDosSeleccionEscritorio = useRef(null);
    const cambiarSegundoBotonEscritorio = useRef(null);
    const cambiarSegundoBotonLineaUnoEscritorio = useRef(null);
    const cambiarSegundoBotonLineaDosEscritorio = useRef(null);
    
    const OpacidadEscritorio= useRef(null)
    const contenedorEscritorio= useRef(null)
    const girarBoton= useRef(null)
    const textoEscritorio= useRef(null)
    const altoEscritorio= useRef(null)
    const lineaUno= useRef(null)
    const lineaDos= useRef(null)


    let duracion = 0.8

function actionButton(){
    if(statusBoton===true){
        setVistaUno('flex')
        tl.add('openbutton')
        tl.to(botonMas.current, { rotate:180 , scale:1.1 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .from(refVistaUno.current, { opacity:0 , ease: 'circ.out'}, 'openbutton')
            .to(refVistaUno.current, { opacity:1 , ease: 'circ.out'}, 'openbutton')
            .from(refVistaUnoVentanaUno.current, { opacity:0 , x:-200, ease: 'circ.out'}, 'openbutton')
            .to(refVistaUnoVentanaUno.current, { opacity:1 , x:0, ease: 'circ.out'}, 'openbutton')            
            .from(refVistaUnoVentanaDos.current, { opacity:0 , x:-300, ease: 'circ.out'}, 'openbutton')
            .to(refVistaUnoVentanaDos.current, { opacity:1 , x:0,  ease: 'circ.out'}, 'openbutton')
            .to(refVistaUnoVentanaDosSeleccion.current, { minHeight:"0px", paddingTop:"0px" ,  paddingBottom:"0px" , duration:duracion , ease: 'circ.out'}, 'openbutton')
        
      
        setEstatusBoton(false)
    }else{
        tl.add('openbutton')
        tl.to(botonMas.current, { rotate:180 , scale:1.1 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .from(refVistaUno.current, { opacity:0 , ease: 'circ.out'}, 'openbutton')
            .to(refVistaUno.current, { opacity:1 , ease: 'circ.out'}, 'openbutton')
            .from(refVistaUnoVentanaUno.current, { opacity:0 , x:200, ease: 'circ.out'}, 'openbutton')
            .to(refVistaUnoVentanaUno.current, { opacity:1 , x:200, ease: 'circ.out'}, 'openbutton')            
            .from(refVistaUnoVentanaDos.current, { opacity:0 , x:0, ease: 'circ.out'}, 'openbutton')
            .to(refVistaUnoVentanaDos.current, { opacity:1 , x:300,  ease: 'circ.out'}, 'openbutton')
        
        setVistaUno('none')
        setEstatusBoton(true)
    }
}
    
function buttonDos(){
    if(statusBotonDos===true){
        setEstadoPop('absolute')

        tl.add('openbutton')
        tl.to(refVistaUnoVentanaTres.current, { position:"absolute", duration:duracion , ease: 'circ.out'}, 'openbutton')        
        tl.to(refVistaUnoVentanaDosText.current, { minHeight:"70vh", duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosTexto.current, { display:"flex", opacity:1, duration:duracion, delay:0.7 , ease: 'circ.out'}, 'openbutton')       
        tl.to(cambiarSegundoBoton.current, { borderRadius:"2px", duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaUno.current, { rotate:45, scaleX:0.70,x:2, duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaDos.current, { rotate:-45, scaleX:0.7,x:-3, duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosSeleccion.current, { display:"none", paddingTop:"10px" , paddingBottom:"10px" , duration:duracion , ease: 'circ.out'}, 'openbutton')
          
        // setVistaDos('flex')
        setEstatusBotonDos(false)
    }else{
        let del= 0.4;
        tl.add('openbutton')
        tl.to(refVistaUnoVentanaDosTexto.current, { display:"none", opacity: 0, duration:del, ease: 'none' } )       
        tl.to(refVistaUnoVentanaDosText.current, { minHeight:"0vh", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaTres.current, { position:"static",duration:duracion , delay:del,  ease: 'circ.out'}, 'openbutton')        
        tl.to(cambiarSegundoBoton.current, { borderRadius:"7.5px", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaUno.current, { rotate:0, scaleX:1,x:0, duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaDos.current, { rotate:-90, scaleX:1,x:0, duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosSeleccion.current, {paddingTop:"0px" , paddingBottom:"0px" , duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        
        
        setEstadoPop('flex')
        setEstatusBotonDos(true)
        
    }
}


window.addEventListener('resize', start);

function start(){
  let valorPantalla = document.documentElement.clientWidth;
  if(valorPantalla <= 750){
    setVistaUno('flex')
  }else{
    setVistaUno('none')
  }
}

useLayoutEffect(() => {
    let valorPantalla = document.documentElement.clientWidth;
    if(valorPantalla <= 750){
      setVistaUno('flex')
    }else{
      setVistaUno('none')
    }
}, []);


function buttonDosEscritorio(){
    if(statusBotonDos===true){
        setEstadoPopEscritorio('absolute')
        tl.add('openbutton')
        tl.to(refVistaUnoVentanaTresEscritorio.current, { position:"absolute", duration:duracion , ease: 'circ.out'}, 'openbutton')        
        tl.to(refVistaUnoVentanaDosTextEscritorio.current, { minHeight:"70vh", duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosTextoEscritorio.current, { display:"flex", opacity:1, duration:duracion, delay:0.7 , ease: 'circ.out'}, 'openbutton')       
        tl.to(cambiarSegundoBotonEscritorio.current, { borderRadius:"8px", duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaUnoEscritorio.current, { rotate:45, scaleX:0.70, x:4, duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaDosEscritorio.current, { rotate:-45, scaleX:0.7, x:-5, duration:duracion , ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosSeleccionEscritorio.current, { display:"none", paddingTop:"10px" , paddingBottom:"15px" , duration:duracion , ease: 'circ.out'}, 'openbutton')
          
        .from(OpacidadEscritorio.current, { display:"none" , duration:duracion , ease: 'circ.out'}, 'openbutton')
        .to(OpacidadEscritorio.current, { display:"flex", duration:duracion , ease: 'circ.out'}, 'openbutton')


        // setVistaDos('flex')
        setEstatusBotonDos(false)
    }else{
        let del= 0.4;
        tl.add('openbutton')
        tl.to(refVistaUnoVentanaDosTextoEscritorio.current, { display:"none", opacity: 0, duration:del, ease: 'none' } )       
        tl.to(refVistaUnoVentanaDosTextEscritorio.current, { minHeight:"0vh", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaTresEscritorio.current, { position:"static",duration:duracion , delay:del,  ease: 'circ.out'}, 'openbutton')        
        tl.to(cambiarSegundoBotonEscritorio.current, { borderRadius:"15px", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaUnoEscritorio.current, { rotate:0, scaleX:1,x:0, duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(cambiarSegundoBotonLineaDosEscritorio.current, { rotate:-90, scaleX:1,x:0, duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
        tl.to(refVistaUnoVentanaDosSeleccionEscritorio.current, {paddingTop:"0px" , paddingBottom:"0px" , duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
                
   
        .from(OpacidadEscritorio.current, { display:"flex" , duration:duracion , ease: 'circ.out'}, 'openbutton')
        .to(OpacidadEscritorio.current, { display:"none", duration:duracion , ease: 'circ.out'}, 'openbutton')



        setEstadoPopEscritorio('flex')
        setEstatusBotonDos(true)
        
    }
}
function seleccionTextoEscritorio(valor){
    let del= 0.4;
    tl.add('openbutton')
    tl.to(refVistaUnoVentanaDosTextoEscritorio.current, { display:"none", opacity: 0, duration:del, ease: 'none' } )       
    tl.to(refVistaUnoVentanaDosTextEscritorio.current, { minHeight:"0vh", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(refVistaUnoVentanaTresEscritorio.current, { position:"static",duration:duracion ,delay:del,  ease: 'circ.out'}, 'openbutton')        
    tl.to(cambiarSegundoBotonEscritorio.current, { borderRadius:"15px", duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(cambiarSegundoBotonLineaUnoEscritorio.current, { rotate:0, scaleX:1,x:0, duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(cambiarSegundoBotonLineaDosEscritorio.current, { rotate:-90, scaleX:1,x:0, duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')    
    tl.to(refVistaUnoVentanaDosSeleccionEscritorio.current, { display:"flex", paddingBottom:"20px" , duration:duracion , delay:del,ease: 'circ.out'}, 'openbutton')
    .from(OpacidadEscritorio.current, { display:"flex" , duration:duracion , ease: 'circ.out'}, 'openbutton')
    .to(OpacidadEscritorio.current, { display:"none", duration:duracion , ease: 'circ.out'}, 'openbutton')
   

    setEstadoPopEscritorio('flex')
    setEstatusBotonDos(true)
    setTextoSeleccionadoEscritorio(valor)
}

function seleccionTexto(valor){
    let del= 0.4;
    tl.add('openbutton')
    tl.to(refVistaUnoVentanaDosTexto.current, { display:"none", opacity: 0, duration:del, ease: 'none' } )       
    tl.to(refVistaUnoVentanaDosText.current, { minHeight:"0vh", duration:duracion , delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(refVistaUnoVentanaTres.current, { position:"static",duration:duracion ,delay:del,  ease: 'circ.out'}, 'openbutton')        
    tl.to(cambiarSegundoBoton.current, { borderRadius:"7.5px", duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(cambiarSegundoBotonLineaUno.current, { rotate:0, scaleX:1,x:0, duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')
    tl.to(cambiarSegundoBotonLineaDos.current, { rotate:-90, scaleX:1,x:0, duration:duracion ,delay:del, ease: 'circ.out'}, 'openbutton')    
    tl.to(refVistaUnoVentanaDosSeleccion.current, { display:"flex", paddingBottom:"10px" , duration:duracion , delay:del,ease: 'circ.out'}, 'openbutton')
    


    setEstadoPop('flex')
    setEstatusBotonDos(true)
    setTextoSeleccionado(valor)
}


function Enviar (){
    window.location.replace('https://resvera.com.mx/thk-aparatos-nov/');
}


    return(
        <div className="containerHome" id="Pantalla">
            <div className="filtroContainer"></div>
            <div className="filtroDosContainer" ></div>
            
            <div className="logoContainer">
                <img src={Logo}></img>
                <text><label>¡Regístrate y obtén</label>  <br/> <label>esta  promo exclusiva</label> <br /> y comienza a cuidarte! </text>
            </div>
            <div className="contentContainer">
                <img ref={botonMas} src={Icono} alt="Mostrar mas" onClick={()=> actionButton()}></img>
            </div>
            <div className="contentContainerDesktop" >
            <div className="filtroDosContainerEscritorio" ref={OpacidadEscritorio}></div>
                <div className="sectionOne"   >

                    <div className="contentSectionOne" ref={contenedorEscritorio}>
                        <div className="botonactivador" ref={girarBoton}>
                            <div className="lineaUno" ref={lineaUno}></div>
                            <div className="lineaDos" ref={lineaDos}></div>
                        </div>
                        <div className="botonactivadorcuadrado" ref={girarBoton}>
                            <div className="lineaUno" ref={lineaUno}></div>
                            <div className="lineaDos" ref={lineaDos}></div>
                        </div>
                        <div className="tituloActivado" id="Hover" >
                            <text><strong>¡30% OFF! </strong>     <br />Disfruta el lujo <br/><strong>de cuidarte </strong> </text>
                            <div className="textoMostrar" ref={altoEscritorio}>
                                <ul ref={textoEscritorio} >

                                 
                                    <li><div /><label>Tecnología  de última generación que </label><label className='dos'>potencia tus resultados</label>  </li>
                                    <li><div /><label>Especialistas certificados  </label><label className='dos'></label></li>
                                    <li><div /><label>Aparatología de alta gama:</label><label className='dos'> Venus Versa, Venus Glow, Ultraformer III...</label></li>
                                    <li><div /><label>Cabinas de lujo</label><label className='dos'></label></li>
                                </ul>
                            </div>
                            <text className='TextoEscondido'><label> * </label> Promo exclusiva en tu primera visita</text>
                        </div>
                        
                    </div>

                </div>
                <div className="sectionTwo">
                    <div className="cuestionario" >
                        <input type="text"  placeholder='Nombre' ref={refVistaUnoVentanaDosEscritorio}></input>
                        <input type="text" placeholder='Teléfono' ref={refVistaUnoVentanaDosEscritorio}></input>
                        <input type="text" placeholder='Correo electrónico' ref={refVistaUnoVentanaDosEscritorio}></input>

                        <div className="submenuContainer" ref={refVistaUnoVentanaTresEscritorio} style={{ position:{estadoPopEscritorio} }}>
                            <label>
                                ¿Qué te gustaría hacer hoy por ti?
                            </label>
                            <div>
                                <text ref={refVistaUnoVentanaDosTextEscritorio}>
                                    <label ref={refVistaUnoVentanaDosSeleccionEscritorio}>{textoSeleccionadoEscritorio}</label>
                                
                                    <ul  ref={refVistaUnoVentanaDosTextoEscritorio}> 
                                        <li onClick={()=> seleccionTextoEscritorio('Ultrasonido Focalizado') }><text className=''><strong>Ultrasonido Focalizado: </strong> <label>(Ultraformer III)</label>Papada, ojeras, arrugas, flacidez, grasa localizada. </text></li>
                                        <li className='negro' onClick={()=> seleccionTextoEscritorio('Tribella')}><text ><strong> Tribella: </strong> <label>(Venus Versa) </label> Acné, poros dilatados, cicatrices, manchas, arrugas, flacidez, colágeno y elastina. </text></li>
                                        <li onClick={()=> seleccionTextoEscritorio('Luz Pulsada Intensa IPL')}><text><strong> Luz Pulsada Intensa IPL:</strong> <label>(Venus Versa)</label>  Manchas, líneas de expresión, acné, cicatrices, rosácea y dermatitis. </text></li>
                                    </ul>
                                </text>
                               
                                <div className='butonSubmenu' ref={cambiarSegundoBotonEscritorio} onClick={()=> buttonDosEscritorio()}>
                                    <div  className='lineaUno'ref={cambiarSegundoBotonLineaUnoEscritorio} />                                
                                    <div  className='lineaDos' ref={cambiarSegundoBotonLineaDosEscritorio}/>
                                </div>

                                
                            </div>    
                            
                                                   
                        </div>
                        
                    </div>
                    
                    {
                        textoSeleccionadoEscritorio.length===0?
                        ""
                        :
                        <div className="botonEnvioEscritorio" onClick={()=>Enviar()}>     
                            <div>
                                Agenda tu cita
                            </div>
                        </div>           
                    }
                </div>
            </div>
            <div className="footerContainer">                                    
                <div className='visitaNuestra'>                
                    <img src={Red}></img><a href='https://resvera.com.mx/Faciales/faciales.html' target="_blank">Visita nuestra <label> Wellness Beauty Clinic</label></a> 
                </div>                
                <div className="espacio">ssadas</div>
                <img src={Posicion}></img>
                <text className='direccion'><a  href='https://www.google.com/maps/place/Resvera/@19.4365009,-99.1908462,17z/data=!3m1!4b1!4m5!3m4!1s0x85d203e876d74693:0xb8518d1d3d37b8b!8m2!3d19.4364943!4d-99.1907841' target="_blank">Arquimides 198, Polanco, CDMX</a></text>
                <div className="espacio">ssadas</div>
                <text><label className='division'><a href='https://www.facebook.com/resveramx' target="_blank">Facebook</a></label><label className='insta'><a href='https://www.instagram.com/resveramx/' target="_blank">Instagram</a></label></text>
            </div>







            <div className="vistaUno" ref={refVistaUnoVentanaUno} style={{ display:vistaUno}}>
                <div className="filtro2" ref={refVistaUnoVentanaUno}></div>
                <div className="fondo" ref={refVistaUnoVentanaUno}></div>   
                <div className="contenteVistaUno" style={{display:vistaUno}} >
                    <div className="logo">                    
                     
                                <div className='LogosPequeños'>
                                    <div className='LogoPequeño'>
                                        <img src={LogoP} className='logoPequeño'></img>  
                                    </div>
                                    <div className='logosDerechos'>
                                        <a href='https://resvera.com.mx/' target="_blank">
                                            <img src={RedP}></img>  
                                        </a>
                                        <a href='https://www.facebook.com/resveramx' target="_blank">
                                            <img src={FaceP}></img>  
                                        </a>
                                        <a href='https://www.instagram.com/resveramx/' target="_blank">
                                            <img src={InstaP}></img>  
                                        </a>                                        
                                    </div>
                                </div>
                                
       
                        <div className='butonClose' onClick={()=>actionButton()} >
                            <div  className='lineaUno' />                                
                            <div  className='lineaDos' />
                        </div>
                        <label>¡30% OFF! Disfruta el lujo de cuidarte</label>
                    </div>
                    <div className="cuestionario" >
                        <input type="text"  placeholder='Nombre' ref={refVistaUnoVentanaDos}></input>
                        <input type="text" placeholder='Teléfono' ref={refVistaUnoVentanaDos}></input>
                        <input type="text" placeholder='Correo electrónico' ref={refVistaUnoVentanaDos}></input>

                        <div className="submenuContainer" ref={refVistaUnoVentanaTres} style={{ position:{estadoPop} }}>
                            <label>
                                ¿Qué te gustaría hacer hoy por ti?
                            </label>
                            <div>
                                <text ref={refVistaUnoVentanaDosText}>
                                    <label ref={refVistaUnoVentanaDosSeleccion}>{textoSeleccionado}</label>
                                
                                    <ul  ref={refVistaUnoVentanaDosTexto}> 
                                        <li onClick={()=> seleccionTexto('Ultrasonido Focalizado') }><text className=''><strong  className='color'> Ultrasonido Focalizado: </strong> <br/> <label>(Ultraformer III)</label> <br/> Papada, ojeras, arrugas, flacidez, grasa localizada. </text></li>
                                        <li className='negro' onClick={()=> seleccionTexto('Tribella')}><text ><strong > Tribella:</strong>  <br /> <label> (Venus Versa)  </label><br/>Acné, poros dilatados, cicatrices, manchas, arrugas, flacidez, colágeno y elastina. </text></li>
                                        <li onClick={()=> seleccionTexto('Luz Pulsada Intensa IPL')}><text><strong  className='color'> Luz Pulsada Intensa IPL: </strong>   <br/> <label>  (Venus Versa) </label> <br/>Manchas, líneas de expresión, acné, cicatrices, rosácea y dermatitis. </text></li>
                                    </ul>
                                </text>
                               
                                <div className='butonSubmenu' ref={cambiarSegundoBoton} onClick={()=> buttonDos()}>
                                    <div  className='lineaUno'ref={cambiarSegundoBotonLineaUno} />                                
                                    <div  className='lineaDos' ref={cambiarSegundoBotonLineaDos}/>
                                </div>
                            </div>                           
                        </div>
                    </div>
                        {
                        textoSeleccionado.length===0?
                            ""
                        :
                        <div className="botonEnvio" onClick={()=>Enviar()}>     
                                         
                            <div>
                                Agenda tu cita
                            </div>
                        </div>                                            
                        }

                    <div className="footer">
                    
                            <div className='visitaNuestra'>
                                {textoSeleccionado.length===0?
                                    <><img src={Red}></img>
                                        <a href='https://resvera.com.mx/Faciales/faciales.html' target="_blank">
                                            Visita nuestra <label> Wellness Beauty Clinic</label>
                                        </a> 
                                    </>
                                    :""
                                }
                            </div>                
                      
                        <div className="espacio" />
                        <img src={Posicion} className='posicion'></img>
                        <text className='direccion'>
                            <a href='https://www.google.com/maps/place/Resvera/@19.4365009,-99.1908462,17z/data=!3m1!4b1!4m5!3m4!1s0x85d203e876d74693:0xb8518d1d3d37b8b!8m2!3d19.4364943!4d-99.1907841' target="_blank">Arquimides 198, Polanco, CDMX
                            </a>
                        </text>
                        <br />  
                        {textoSeleccionado.length===0?
                            <><text>
                                    <label className='division'><a href='https://www.facebook.com/resveramx' target="_blank">Facebook</a></label>
                                    <label className='insta'><a href='https://www.instagram.com/resveramx/' target="_blank">Instagram</a></label>
                                </text></>
                            :""
                        }
                        


                    </div>
                </div>               
            </div>
        </div>
    )
}
export default Home;
