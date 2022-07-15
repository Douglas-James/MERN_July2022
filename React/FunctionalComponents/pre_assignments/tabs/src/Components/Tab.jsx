import React, {useState} from 'react';
import './tabstyle.css'
const Tab = (props) => {
  // style for p inline block
  const tabStyle = {
      display: 'inline-block',
    }
  // tab state track
  const [tab, setTab] = useState(0);

  // hand the onchange 
  const handTab = (e, idx) => {
      setTab(idx);
  }
  return (
    <div>
        {/* Map the tabs */}
        {
          props.selectTab.map((tab, idx) => {
            console.log(tab)
            // Sending Arguments in Callbacks on handTab(e, idx) need the index it is the only
            return(
              <div style={tabStyle} key={idx} >
                  <p key={idx}  className='tabs' onClick={(e)=> handTab(e, idx)}>{tab.label}</p> 
              </div>
            )
          })
        }
        {/* Show contents */}
        <div className='container'>
          {
            <p className='content' style={{backgroundColor: props.selectTab[tab].color}}>{props.selectTab[tab].content}</p>
          }
        </div>
    </div>
  );
};
export default Tab;