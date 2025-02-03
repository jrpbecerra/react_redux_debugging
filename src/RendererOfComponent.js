import { useState } from 'react';
import { SomeOtherComponent } from './SomeOtherComponent';
import TroublesomeComponent from './TroublesomeComponent';

const RendererOfComponent = ({location}) => {
  const [activeView, setActiveView] = useState(location.pathname.includes("troublesome") ? "troublesome" : "someOther");
  return(
    <>
      {activeView === "troublesome" && <TroublesomeComponent />}
      {activeView === "someOther" && <SomeOtherComponent setActiveView={setActiveView}/>}
    </>
  )
};

export default RendererOfComponent;