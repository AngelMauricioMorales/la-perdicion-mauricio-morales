const PRODUCTS = [
  { 
    id: "0",
    name: "Eminem", 
    price: 10, 
    img: "https://hiphop24x7.com/wp-content/uploads/2017/05/Today-Marks-15th-Anniversary-of-Eminems-The-Eminem-Show-Album-2.jpg",
    info: "Duration: 01:17:19 <br>Date: May 26, 2002",
    description: "Texto descriptivo de prueba.",
    category: "rap"
  },
  { 
    id: "1", 
    name: "Ariana Grande", 
    price: 8.50, 
    img: "https://4.bp.blogspot.com/-ClISKu9zBYA/UgPSM3to4UI/AAAAAAAACWg/C9viBUtcUJE/s320/Ariana-Grande_Yours-truly5.png",
    info: "Duration: 46:21 <br>Date: August 30, 2013",
    description: "Texto descriptivo de prueba.",
    category: "pop"
  },
  { 
    id: "2", 
    name: "Rata Blanca", 
    price: 15, 
    img: "https://www.spirit-of-metal.com/les%20goupes/R/Rata%20Blanca/Simple/Simple.jpg",
    info: "Duration: 21:27 <br>Date: Dec 20, 2002",
    description: "Texto descriptivo de prueba.",
    category: "rock"
  },
  { 
    id: "3", 
    name: "Rick Astley", 
    price: 7, 
    img: "https://i.discogs.com/YQnDsP_AHpn_-t5WwGe--zqktcV12y93RFhlPkett90/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MTU3/NDItMTQ0MzA4OTc4/My04NTQxLmpwZWc.jpeg",
    info: "Duration: 17:44 <br>Date: May 26, 1980",
    description: "Texto descriptivo de prueba.",
    category: "others"
  },
  { 
    id: "4", 
    name: "Skrillex", 
    price: 9.20, 
    img: "https://1.bp.blogspot.com/-LuQkN1orAxQ/WBiaHsIIXoI/AAAAAAAAAFk/ycDaJb5K0qAqUoYtY1vG_dEnkxzxEbjdwCK4B/s1600/600x600bb.jpg",
    info: "Duration: 01:17:19 <br>Date: Dec 25, 2015",
    description: "Texto descriptivo de prueba.",
    category: "others"
  },
  { 
    id: "5", 
    name: "Los Palmeras", 
    price: 5, 
    img: "https://i.scdn.co/image/752de490403b03522adb5e1e874e8dc6139aae4a",
    info: "Duration: 01:17:19 <br>Date: May 26, 2002",
    description: "Texto descriptivo de prueba.",
    category: "cumbia"
  },
  { 
    id: "6", 
    name: "La Nueva Luna", 
    price: 4.60, 
    img: "https://direct.rhapsody.com/imageserver/images/alb.428236169/600x600.jpg",
    info: "Duration: 45:00 <br>Date: Dec 20, 2016",
    description: "Texto descriptivo de prueba.",
    category: "cumbia"
  },
  { 
    id: "7", 
    name: "Gorillaz", 
    price: 7.60, 
    img: "https://2.bp.blogspot.com/-lA_QLDKvy-w/WRByGsQMQpI/AAAAAAAACp4/z9IvCCvc10EoLz5zXJ_TqBKOaMBpW7XnQCLcB/s1600/Crack%2BMagazine.jpg",
    info: "Duration: 01:37:19 <br>Date: Jul 08, 2018",
    description: "Texto descriptivo de prueba.",
    category: "others"
  },
  { 
    id: "8", 
    name: "Porta", 
    price: 6.20, 
    img: "https://4.bp.blogspot.com/_tm5YgUcgoz4/TT0MnU3BEUI/AAAAAAAAAP4/Wa49jWNjxKI/s1600/Portada.Porta.Trastorno+Bipolar.portada-g-www.erapahiphop.com.jg",
    info: "Duration: 01:10:00 <br>Date: En 01, 2009",
    description: "Texto descriptivo de prueba.",
    category: "rap"
  },
  { 
    id: "9", 
    name: "Carlos Gardel", 
    price: 11.40, 
    img: "https://www.totemvertigo.com/imagenes_articulos/8429965016116.jpg",
    info: "Duration: 01:07:17 <br>Date: May 07, 2015",
    description: "Texto descriptivo de prueba.",
    category: "others"
  },
  { 
    id: "10", 
    name: "Tarja Turunen", 
    price: 12, 
    img: "https://cps-static.rovicorp.com/3/JPG_1080/MI0003/433/MI0003433309.jpg?partner=allrovi.com",
    info: "Duration: 01:48:20 <br>Date: Ago 24, 2012",
    description: "Texto descriptivo de prueba.",
    category: "rock"
  },
  { 
    id: "11", 
    name: "Dua Lipa", 
    price: 6, 
    img: "https://pm1.narvii.com/6685/2cc1f0d3eb01e044fd578961913e56e1f79a458d_hq.jpg",
    info: "Duration: 01:17:19 <br>Date: May 26, 2017",
    description: "Texto descriptivo de prueba.",
    category: "pop"
  }
];


export const getFetch = new Promise((resolve, reject) => {
  let condtion = true;
  if (condtion) {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  } else {
    reject("404 not found");
  }
});
