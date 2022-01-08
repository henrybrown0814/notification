import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    console.log('111', props.url);         
  }

  render() {
    
    const buttons =this.props.buttons.slice();
    
    return (
      <div className="w-460 h-460 bg-white pt-66 pb-40 rounded-10 mr-100 mb-66 shadow-[0_0_20px_0_rgba(0,0,0,0.1)] flex flex-col grid justify-items-center">
        <IMG URL={this.props.url}/>  
        <BoldText content={this.props.content} />
        <SpanText regularContent={this.props.span_text} />
        <div className="flex h-48 mt-59 space-x-12">
           {
            buttons.map(button => {
               return <Button label={button.label} selected={button.selected}/>
            })
           }
         </div>
      </div>
    )

    
  }
}

class IMG extends React.Component {
    
   
    render() {
      const url = this.props.URL;  
      console.log('url: ', url);
      return (
        <div className="w-120 h-120 bg-white ">
           
          <img className = "ml-1" src={url}></img>
        </div>
      )
  
      
    }
  }

class BoldText extends React.Component {

  render() {
    const content = this.props.content;
    return(
      <div className="text-18 text-center font-bold font-['Nunito'] w-332 h-57 mt-37 mb-14">
          {content}
      </div>
    )
  }
}

class SpanText extends React.Component {
    render(){
        const spanText=this.props.span_text;
        return(
            <div className="text-14 font-['Nunito']  text-center w-332 h-19">
                {spanText}
            </div>
        );
    }
}

class Button extends React.Component {
  render() {
    const label = this.props.label;
    const selected = this.props.selected;
    return(
        <div className={((selected) ? "bg-[#008b74] " :" ")+" rounded-50 border border-[#008b74] border-solid border-10 h-48 w-160 flex justify-items-center grid content-center"}>
            <span className={(selected) ? 'text-white' : 'text-black'}>{label}</span>
        </div>
    );
  }
}

export default Rectangle;