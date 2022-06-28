import { BrowserRouter as Router} from 'react-router-dom';
import AnimateRouter from './animateRouter';
function MyAppRouting() {   

  
    return(
       <div>
            <Router> 
            <AnimateRouter/>
            </Router>
     </div>
    )
    
}
export default MyAppRouting;