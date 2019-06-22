import React from 'react';
import './App.css';
import Railu from './Railu.jpg';


class NameForm extends React.Component{
  constructor(props){
      super(props);
      this.state={value:''};
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

  render() {
      return (
        <div>
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
