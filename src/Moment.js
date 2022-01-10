import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Moment extends React.Component {
  constructor(props) {
    super(props);
             
  }

  render() {
    
    const data =this.props.content;
    console.log("asd", data);
    return (
      <div className="w-250 h-296 bg-white flex flex-col justify-center rounded-12 shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
        <div className="px-5 pt-5 flex flex-col items-center">
          <div className="w-136 h-136 mt-26 mb-16">
            <img className="w-full h-full  rounded-[50%]" src={data.url}/>
          </div>
          <span className="text-16 font-['Nunito'] text-bold">{data.content}</span>
          <span className="text-12 font-['Nunito'] text-[#9fa6ba] mb-16">{data.date}</span>
          <ul className="flex flex-wrap justify-center mb-28 sm:mb-0 -space-x-10">
              { data.friends.map(friend => { return <li>
                   <img className="w-32 h-32 rounded-[50%]" src={friend} />
              </li>})}  
          </ul>
        </div>
      </div>
    );

    
  }
}


export default Moment;