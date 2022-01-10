import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Rectangle from './Moment';
import './index.css';
import Moment from './Moment';
import NewMoment from './NewMoment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      Moments: [
        {
          url: './1.jfif',
          content: ' Our Wedding',
          date:"25 May 2020 • 26 May 2020",
          friends: ['1.jfif','2.jfif','3.jfif']
          
        },
        {
          url: './2.jfif',
          content: 'My Bday Party',
          date:"25 May 2020 • 26 May 2020",
          friends: ['1.jfif','2.jfif','3.jfif']
          
        },
        {
          url: './3.jfif',
          content: ' Summer vibes party ☀️',
          date:"25 May 2020 • 26 May 2020",
          friends: ['1.jfif','2.jfif','3.jfif']
           
        }
        
        
      ],
      ColMoment: [
        {
          url: './1.jfif',
          content: ' Our Wedding',
          friends: ['1.jfif','2.jfif','3.jfif']
          
        }
      ]
    };
         
  }

  render() {
    return (
      
      <div className="flex h-screen w-1024  flex-none ">
        <div className="w-280  h-screen bg-white hidden lg:block">
                <div className="w-280 h-74 pl-15">
                    <img className='w-215 h-full' src="./logo-logotype-black-on-light-bck.png" />
                </div>
                <div className='flex justify-between pl-48 pr-16 mt-14'>
                    <span className='text-[#2eb88a]'>MENU</span>
                    <div className='w-24 h-24'>
                        <img src='./theicons-co_2@2x.png'/>
                    </div>
                </div>
                <ul className='mt-3'>
                    <li className='h-50 pl-48 flex flex-col justify-center'>
                        <div className='flex space-x-16 items-center'>
                             <div className='w-24 h-24'>
                                <img src='./icons-dashboard@2x.png'/>
                            </div>
                            <span className='text-black text-16 font-bold font-["Nunito"]'>Dashboard</span>
                        </div>
                    </li>
                    <li className='h-50 pl-48 flex flex-col justify-center'>
                        <div className='flex space-x-16 items-center'>
                             <div className='w-24 h-24'>
                                <img src='./icons-moment@2x.png'/>
                            </div>
                            <span className='text-[#9fa6ba] text-16 font-normal font-["Nunito"]'>Moment</span>
                        </div>
                    </li>
                </ul>
                {/* Line */}
                <div className="border-0.5 ml-46 w-208 border-solid border-[#9fa6ba]"></div>
            </div>
        <div className="flex flex-col bg-[#f4f7f6] w-full">
            <header className="w-full  h-74 bg-white flex justify-between">
                <div className="ml-20 mt-17 w-161 h-41 text-30 font-bold font-['Nunito']">
                    Dashboard
                </div>
                <div className="w-24 h-24 mr-50 mt-25">
                    <img src="./icons-bell.svg" />
                </div>
            </header>
          <div className="w-full pl-30 pt-48 bg-[#f4f7f6]">
              <span className="font-['Nunito'] text-18 text-bold text-black" >Moments created by you</span>
          </div>
          <div className="flex flex-wrap pl-20  sm:flex-row mt-16 space-x-10">
            {this.state.Moments.map(moment =>{return <Moment content={moment}/>})}
            <NewMoment />
          </div>
          <div className=" w-full h-full pl-30 pt-48 bg-[#f4f7f6]">
              <span class="Moments-you-collabor">
                Moments you collaborate
              </span>
              <div className="flex flex-col mt-16 gap-10">
              {this.state.ColMoment.map(col=>{return <Moment content={col} />})}
            </div>
              
          </div>          
          </div>
          </div>  
          
        
    )

      
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);