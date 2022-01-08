import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Rectangle from './Rectangle';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      Popups: [
        {
          url: '1.png',
          content: 'Are you sure you want to delete guest Barbara Harris?',
          span_content: 'Lorem ipsum dolor sit amet.',
          buttons : [
            {label: "No, cancel", selected: false}, 
            {label: "Yes,delete", selected: true}
          ] 
        },
        {
          url: '2.png',
          content: 'One more on the board!',
          span_content: 'Charlotte Davis was successfully added as a guest.',
          buttons : [
            {label: "Close", selected: true}
          ] 
        },
        {
          url: '2.png',
          content: 'One more on the board!',
          span_content: 'Charlotte Davis filled in your request form and was added as a guest.',
          buttons : [
            {label: "Close", selected: true}
          ]
        },
        {
          url: '4.png',
          content: 'Are you sure you want to delete guest Barbara Harris?',
          span_content: 'This action cannot be undone.',
          buttons : [
            {label: "No, cancel", selected: false}, 
            {label: "Yes,delete", selected: true}
          ] 
        },
        {
          url: '5.png',
          content: 'Invitations on the way!',
          span_content: '14 invitations were successfully sent to your guests.',
          buttons : [
            {label: "No, cancel", selected: false}, 
            {label: "Yes,delete", selected: true}
          ] 
        }
      ]
    };
         
  }

  render() {
    return (
      <div className="w-1440 h-2354 bg-[#f4f7f6] pt-141 pl-218 pb-701 flex flex-wrap">
        {
          this.state.Popups.map(Popup => {
            return <Rectangle url={Popup.url} content={Popup.content} span_content={Popup.span_content} buttons={Popup.buttons}/>
          })
        }
      </div>
    )

    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);