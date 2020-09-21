import React from 'react';
import web from "../src/images/roundstopper.jpg";
import {NavLink} from "react-router-dom";
import { Modal, Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        style={{width:'72%', marginLeft:'14%', minHeight:'200px'}}
        aria-labelledby="contained-modal-title-vcenter"
        centered

        
      >
        <Modal.Header style={{backgroundColor: '#f0f0f0'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row gy-4" style={{verticalAlign: 'middle', marginTop: 'auto', marginBottom: 'auto'}}>
        <div className="col-md-6 col-10 ">
          <div><img src={props.imgsrc}  style={{height: '150px', width: '200px', marginLeft: 'auto', marginRight: 'auto'}} /></div>
          
          </div>
          <div className="col-md-6 col-10 "  style={{verticalAlign:'middle'}}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>{props.detail}</div></div>
          </div></div>
          </div></div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: '#f0f0f0'}}>
          <Button onClick={props.onHide} className="btn btn-light justify-content-center btn-sm" style={{border: '1px solid lightgrey', backgroundColor: 'darkgrey', color:'white'}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Card = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (<> 
        <div className="col-md-3 col-10 ">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" style={{height: '140px', width: '200px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}} alt={props.title} />
                <div className="card-body">
                    <p className="card-title font-weight-bold justify-content-center" style={{fontSize: "12px",}}>{props.title}</p>
                    {/* <div>{props.detail}</div> */}
                    <Button onClick={() => setModalShow(true)} className="btn btn-light justify-content-center btn-sm" style={{border: '1px solid lightgrey', backgroundColor: 'darkgrey', color:'white'}}>More info</Button>
                </div>
            </div>
        </div>  
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgsrc={props.imgsrc}
        detail={props.detail}
        title={props.title}
      />            
    </>);
}

export default Card;