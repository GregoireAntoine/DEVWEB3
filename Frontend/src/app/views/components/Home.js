
import React from 'react'
import { List } from  '../../components'

import "../../styles/App.css";
import "../../styles/Confirm.css";

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Pains", "Viennoiseries", "Pâtisseries", "Sandwicherie"]
    return(
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return(<li className={category == index && 'active'} key={index} onClick={() => loadCategory(index)}>{link}</li>)
          })}
        </ul>
      </div>
    
    )
  }

export const Home = props => {
    const { isFiltering, filtered, list, category, loadCategory } = props
    return( <div className="container">
    <div className="row">
      <SideMenu loadCategory={loadCategory} category={category}/>
      <div className="col-sm">
        <div className="row">
           <List data={isFiltering ? filtered : list[category]} category={category} />
        </div> 
      </div>
    </div>
  </div>)
}
