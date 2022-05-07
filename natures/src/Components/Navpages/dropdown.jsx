import '../style.css';
import { hovercheck } from '../../Redux/NavbarPages/action';
import {useDispatch} from 'react-redux';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Dropdown=()=>{
    const dispatch=useDispatch();
    const handleMouseOver=()=>{
        // dispatch(hovercheck(true));
        return
    }
    const handleMouseOut=()=>{
        // dispatch(hovercheck(false));
        return  
    }
   return(
       <>
       <div className="dropdown-content">
            <div><div><a href='#' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Wine & Beer </a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div> <div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Gift Hampers</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Fruit & Vegetables</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Cheese, Meat & Fruit Platters</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Delicatessen & Cheese</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>International Cuisine</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Health</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Indian Grocery</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Confictionary & Patisserie</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Meats, Seafood And Eggs</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Snack Bar</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Snacks & Beverages</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
            <div><div><a href='#'onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Breakfast, Dairy & Bakery</a></div><div><FontAwesomeIcon className='icons' icon={faAngleRight}/></div></div>
        </div>
       </>
   )
}