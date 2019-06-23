import React from 'react';
import './App.css';
import Railu from './Railu.jpg';
import Modal from './Modal/Modal';
 

class NameForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
          value:'',
          isShowing:false
        };
      
        this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
      this.setState({value:event.target.value});
  }

  handleSubmit(event){
      alert('A name was submitted :' + this.state.value);
      event.preventDefault();

  }

  openModalHandler=()=>{
      this.setState({isShowing:true});
  }

  closeModalHandler=()=>{
      this.setState({isShowing:false});
  }



render() {
      return (

        <div>
        { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
        <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
        <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
                Maybe aircrafts fly very high because they don't want to be seen in plane sight?
        </Modal>    
        <section className="one-fourth" id="html">
            <img src={Railu} alt="A railu"/>
            <form onSubmit={this.handleSubmit}>
              <label>
                  Pick your favorite quote :
                  <select value={this.state.value} onChange={this.handleChange}>
                      <option value="ISIS">If I had surgery like MS ,I would have taken a week off - P</option>
                      <option value="ISIS">How can you find the sweetspot b/w JAVA and workflow - B</option>
                      <option value="ISIS">Maaan...i Love Automation - M</option>
                      <option value="ISIS">You bring laaawt of vaaalue - Hijda</option>
                  </select>
              </label>

              <input type="submit" value="submit"/>
          </form>

          
        </section>
        
       </div>
          
      );
  }
}

export default NameForm;
