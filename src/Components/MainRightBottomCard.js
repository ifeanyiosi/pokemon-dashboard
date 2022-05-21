import React, { useState } from "react";
import ReactModal from "react-modal";
import {coaches} from './Constants/'



ReactModal.setAppElement('#root')

function MainRightBottomCard() {

  const customStyles = {
    overlay:{
      backgroundColor:'transparent'
    },
    content:{
      top:'50%',
      left:'50%',
      width:'350px',
      backgroundColor: '#f1f1f1',
      border: 'none',
      color: '#19162c'
      
    }   
  }

  const modalButton ={
    textDecoration: 'none',
    fontSize: '14px',
    color: '#fff',
    background: 'linear-gradient(#ff21bc, #b21783)',
    padding: '5px 15px',
    borderRadius:' 10px',
    textTransform:' uppercase',
    fontEeight: '600',
    boxShadow: 'inset 2px 2px 2px rgb(255 255 255 / 40%), inset -5px -10px 10px #b1147d',
    marginRight:' 10px',
    cursor:' pointer'
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [modalIsOpen3, setModalIsOpen3] = useState(false)
  const [modalIsOpen4, setModalIsOpen4] = useState(false)
  const [modalIsOpen5, setModalIsOpen5] = useState(false)
  




  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Online</h2>
        <a href="#">View More</a>
      </div>

          <div className="topSeller" >
            <div className="topSellerImg">
              <img src={coaches.pep} alt="" />
            </div>
            <div className="topSellerName">
              <p> Josep Guadiola
                 <span>pep</span>
              </p>
            </div>
            <a href="#" className="button"
            onClick={() => setModalIsOpen(true)}
            >
              View
            </a>
          </div>

          <div className="topSeller" >
            <div className="topSellerImg">
              <img src={coaches.tuchel} alt="" />
            </div>
            <div className="topSellerName">
              <p> Thomas Tuchel
                 <span>tuchel</span>
              </p>
            </div>
            <a href="#" className="button"
            onClick={() => setModalIsOpen2(true)}
            >
              View
            </a>
          </div>

          <div className="topSeller" >
            <div className="topSellerImg">
              <img src={coaches.jose} alt="" />
            </div>
            <div className="topSellerName">
              <p> Jose Mourinho
                 <span>specia1</span>
              </p>
            </div>
            <a href="#" className="button"
            onClick={() => setModalIsOpen3(true)}
            >
              View
            </a>
          </div>

          <div className="topSeller" >
            <div className="topSellerImg">
              <img src={coaches.klop} alt="" />
            </div>
            <div className="topSellerName">
              <p> Jurgen Klopp
                 <span>klopp</span>
              </p>
            </div>
            <a href="#" className="button"
            onClick={() => setModalIsOpen4(true)}
            >
              View
            </a>
          </div>

          <div className="topSeller" >
            <div className="topSellerImg">
              <img src={coaches.don} alt="" />
            </div>
            <div className="topSellerName">
              <p> Carlo Ancelotti
                 <span>don</span>
              </p>
            </div>
            <a href="#" className="button"
            onClick={() => setModalIsOpen5(true)}
            >
              View
            </a>
          </div>

          {/* React Modal code */}

        <div>
          <ReactModal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={customStyles}>
           <div>
             <h1>Josep Guardiola</h1>
           </div>
           <div>
             <p>Josep "Pep" Guardiola Sala is a Spanish professional football manager and former player, who is the current manager of Premier League club Manchester City.</p>

           </div>

        <button onClick={() => setModalIsOpen(false)} style={modalButton}> Exit</button>
          </ReactModal>

          <ReactModal isOpen={modalIsOpen2} onRequestClose={()=> setModalIsOpen2(false)} style={customStyles}>
           <div>
             <h1>Thomas Tuchel</h1>
           </div>
           <div>
             <p>Thomas Tuchel is a German professional football manager and former player who is the current head coach of Premier League club Chelsea.</p>
           </div>

        <button onClick={() => setModalIsOpen2(false)} style={modalButton}> Exit</button>
          </ReactModal>
          
          <ReactModal isOpen={modalIsOpen3} onRequestClose={()=> setModalIsOpen3(false)} style={customStyles}>
           <div>
             <h1>Jose Mourinho</h1>
           </div>
           <p>José Mário dos Santos Mourinho Félix, GOIH, is a Portuguese professional football manager and former player who is the current head coach of Italian Serie A club Roma. Nicknamed "The Special One", he is widely considered to be one of the greatest managers of all time, and is one of the most decorated managers ever.</p>

        <button onClick={() => setModalIsOpen3(false)}style={modalButton}> Exit</button>
          </ReactModal>

          <ReactModal isOpen={modalIsOpen4} onRequestClose={()=> setModalIsOpen4(false)} style={customStyles}>
           <div>
             <h1>Jurgen Klopp</h1>
           </div>
           <div>
             <p>Jürgen Norbert Klopp is a German professional football manager and former player who is the manager of Premier League club Liverpool. He is widely regarded as one of the best managers in the world. Klopp spent most of his playing career at Mainz 05</p>
           </div>

        <button onClick={() => setModalIsOpen4(false)} style={modalButton}> Exit</button>
          </ReactModal>

          <ReactModal isOpen={modalIsOpen5} onRequestClose={()=> setModalIsOpen5(false)} style={customStyles}>
           <div>
             <h1>Carlo Ancelotti</h1>
           </div>
           <div>
             <p>Carlo Ancelotti Cavaliere OMRI, Ufficiale OSI is an Italian professional football manager and former player who is the manager of La Liga club Real Madrid. He is regarded as one of the greatest and most successful managers in history, and is the joint-top UEFA club winning manager.</p>
           </div>

        <button onClick={() => setModalIsOpen5(false)} style={modalButton}> Exit</button>
          </ReactModal>
          

        </div    >
        </div>

    
  );
}

export default MainRightBottomCard;
