const fruits = [
    {
      ref: "Pain_1",
      category: 0,
      name: "Baguette tradition",
      price: 1.35,
      unit: "pièce",
      image: "baguette tradition.jpg",
      description:"Baguette Tradition à la farine 100% naturelle et au levain."
    },
    {
      ref: "baguette",
      category: 0,
      name: "Baguette",
      price: 1.05,
      unit: "pièce",
      image: "baguette.jpg",
      description:"Baguette blache"
    },
    {
      ref: "Paindecampagne",
      category: 0,
      name: "Pain de campagne",
      price: 1.35,
      unit: "pièce",

      image: "pain de campagne.jpg",
      description:"Pain fabriqué à partir de farine de blé belge."

     

    },
    {
      ref: "Paintradition",
      category: 0,
      name: "Pain tradtion",
      price: 1.29,
      unit: "pièce",
      image: "pain tradition.jpg",
      description:"Pain fait à partir de la même recette depuis 1848."
    },
    {
      ref: "Paingris",
      category: 0,
      name: "Pain Gris",
      price: 1.25,
      unit: "pièce",
      image: "paingris.jpg",
      description:"Pain fabriquer à partir de farine complète."
    },
    {
      ref: "painblanc",
      category: 0,
      name: "Pain blanc",
      price: 1.00,
      unit: "pièce",
      image: "painblanc.jpg",
      description:"Pain fabriquer à partir de farine blanche. Moelleux et léger."
    }
    
  ];  
  
  const legumes = [
    {
      ref: "brioche",
      category: 1,
      name: "Brioche au chocolat",
      price: 0.85,
      unit: "pièce",
      image: "brioche.png"
    
    },
    {
      ref: "couqueauchoco",
      category: 1,
      name: "Couque au chocolat",
      price: 0.90,
      unit: "pièce",
      image: "couque au choco.png"
    },
    {
      ref: "couqueauraisins",
      category: 1,
      name: "Couque au raisins",
      price: 0.85,
      unit: "pièce",
      image: "couqueauraisin.png"
    },
    {
      ref: "Croissants",
      name: "Croissant",
      category: 1,
      price: 0.75,
      unit: "pièce",
      image: "croissant.jpg"
    },
    {
      ref: "painauchocolat",
      name: "Pain au chocolat",
      category: 1,
      price: 0.80,
      unit: "pièce",
      image: "pain au chocolat.jpg"
    },
    {
      ref: "Pistolet",
      name: "Pistolet",
      category: 1,
      price: 0.75,
      unit: "pièce",
      image: "pistolet.png"
    }
  ]; 
  
  const fresh = [
    {
      ref: "éclair",
      category: 2,
      name: "éclair au chocolat",
      price: 1.00,
      unit: "pièce",
      image: "eclair.jpg"
    },
    {
      ref: "merveilleux",
      category: 2,
      name: "Merveilleux au chocolat",
      price: 1.20,
      unit: "pièce",
      image: "merveilleux.jpg"
    },
    {
      ref: "Muffins",
      category: 2,
      name: "Muffin au chocolat",
      price: 1.25,
      unit: "pièce",
      image: "muffins.jpg"
    },
    {
      ref: "tarteabricot",
      category: 2,
      name: "Tarte à l'abricot",
      price: 7.99,
      unit: "pièce",
      image: "tarte abricot.jpg"
    },
    {
      ref: "tartecerise",
      category: 2,
      name: "Tarte à la fraise",
      price: 7.99,
      unit: "pièce",
      image: "tarte au fraise.jpg"
    },
    {
      ref: "tartecerise",
      category: 2,
      name: "Tarte à la cerise",
      price: 7.99,
      unit: "pièce",
      image: "tarte au cerise.jpg"
    }
  ];  
  
  const epicerie = [
    {
      ref: "sandwich1",
      category: 3,
      name: "Sandwich au thon",
      price: 3.99,
      unit: "pièce",
      image: "sandwich au thon.jpg",
      description:"Contient : Baguette blanche, tomates, salade, mayonnaise, thon."
    },
    {
      ref: "sandwich2",
      category: 3,
      name: "Sandwich au bacon",
      price: 3.99,
      unit: "pièce",
      image: "sandwich bacon.jpg",
      description:"Contient : jambon de dinde, bacon, mayonnaise, salade, tomates, oignions, baguette blanche."
    },
    {
      ref: "sandwich3",
      category: 3,
      name: "Sandwich Jambon Fromage",
      price: 3.99,
      unit: "pièce",
      image: "sandwich jambon fromage.jpg",
      description:"Contient : jambon, Gouda, tomates, salades, mayonnaise."
    },
    {
      ref: "sandwich4",
      category: 3,
      name: "Sandwich veggie",
      price: 3.99,
      unit: "pièce",
      image: "sandwich vege.jpg",
      description:"Contient : jambon végétarien, Gouda, tomates, salades, mayonnaise, concombres."
    },
    {
      ref: "sandwich5",
      category: 3,
      name: "Sandwich ardennais",
      price: 3.99,
      unit: "pièce",
      image: "sanwdick roti.jpg",
      description:"Contient : tranches de rosbeef, Gouda, tomates, salades, mayonnaise, concombre."
    }
  ];
  
  const boissons = [
    {
      ref: "boissons_1",
      category: 4,
      name: "Vin Rouge",
      price: 12.99,
      unit: "pièce",
      image: "bordeaux.png"
    },
    {
      ref: "boissons_2",
      category: 4,
      name: "Vin blanc",
      price: 11.99,
      unit: "pièce",
      image: "white_wine.png"
    },
    {
      ref: "boissons_3",
      category: 4,
      name: "Riesling",
      price: 25.99,
      unit: "pièce",
      image: "riesling.png"
    },
    {
      ref: "boissons_4",
      category: 4,
      name: "Coca ",
      price: 2.49,
      unit: "pièce",
      image: "coke.png"
    },
    {
      ref: "boissons_5",
      category: 4,
      name: "Sprite",
      price: 1.49,
      unit: "pièce",
      image: "sprite.png"
    },
    {
      ref: "boissons_6",
      category: 4,
      name: "Finley",
      price: 1.49,
      unit: "pièce",
      image: "finley.png"
    },
    {
      ref: "boissons_7",
      category: 4,
      name: "Nestea",
      price: 1.19,
      unit: "pièce",
      image: "nestea.png"
    },
    {
      ref: "boissons_8",
      category: 4,
      name: "Sprite",
      price: 1.49,
      unit: "pièce",
      image: "sprite.png"
    },
    {
      ref: "boissons_9",
      category: 4,
      name: "Sprite Zero",
      price: 1.49,
      unit: "pièce",
      image: "sprite_zero.png"
    }
  ];
  
  export const list = [fruits, legumes, fresh, epicerie, boissons]
