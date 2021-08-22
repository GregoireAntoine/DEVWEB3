import React from 'react'
import { List } from  '../../components'
import { Link } from "react-router-dom";
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

export const Acceuil = props => {
    const { isFiltering, filtered, list, category, loadCategory } = props
    return( 
      <div className="acceuil">
        <div className="description"><p>
          <h3>Description</h3>
          Bienvenue sur le site web de la Boulangerie Patisserie François.<br></br>
          Etant donné les condtitions sanitaires actuelles et au vu du succès de nos produits,<br></br> nous avons décidé de vous proposer une formule de réservation en ligne de vos produits
          dans le but de désangorger la boutique.
        </p></div>

        <div className="expliquation"><p>
        <h3>Expliquation</h3>
        En cliquant sur le bouton ci dessous, vous pourrez avoir un aperçu de l'ensemble de nos produits.<br></br>
        Ensuite, vous pourrez mettre dans votre panier les produits que vous désirez pour enfin les commander.
        </p></div>

      
        <Link class="boutondépart" to="/home" >
                j'ai compris
            </Link>
      </div>
    )
}


