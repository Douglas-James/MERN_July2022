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
            return(
              <div style={tabStyle} >
                  <p key={idx}  className='tabs' onClick={(e)=> handTab(e, idx)}>{tab.label}</p>
              </div>
            )
          })
        }
        {/* Show contents */}
        <div className='container'>
          {
            <p className='content'>{props.selectTab[tab].content}</p>
          }
        </div>
    </div>
  );
};
export default Tab;