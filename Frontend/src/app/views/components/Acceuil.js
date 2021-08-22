
import React from 'react'
import { List } from  '../../components'
import { Link } from "react-router-dom";
import  * as list from '../../data.js';
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
     console.log(list)
    return( 
     
      <div className="acceuil">
         <div className="produits"><p>
          <h3><center>Nos produits phares</center></h3>
          <table>
            <tr><td>Baguette</td><td>Merveilleux au chocolat</td><td>Tarte à la fraise</td><td>Brioche au chocolat</td></tr>
            <tr><td>item.image</td><td>item.image</td><td>item.image</td><td>item.image</td></tr>
          </table>
          
        </p>
        </div>
        <div className="heure">
        <h3 className="heureTitre"><center>Nos Heures d'ouvertures</center></h3>
         <table>
          <tr><td>Lundi</td><td>Fermé</td></tr>
          <tr><td>mardi</td><td>7:00 - 17h30</td></tr>
          <tr><td>Mercredi</td><td>7:00 - 17h30</td></tr>
          <tr><td>Jeudi</td><td>7:00 - 17h30</td></tr>
          <tr><td>Vendredi</td><td>7:00 - 17h30</td></tr>
          <tr><td>Samedi</td><td>7:00 - 17h30</td></tr>
          <tr><td>Dimanche</td><td>6:00 - 18h00</td></tr>
         </table>
        </div>

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


