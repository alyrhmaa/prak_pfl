import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkList from './FrameworkList.jsx'
import FrameworkListSearchFilter from './FrameworkListSearchFilter.jsx'
import ResponsiveText from './ResponsiveDesign.jsx'

createRoot(document.getElementById("root"))
  .render(
    <div>
     {/* <FrameworkList/> */}
     {/* <FrameworkListSearchFilter/> */}
     <ResponsiveText/>
    </div>
  )