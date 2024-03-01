import botanic1 from '../../Assets/img/botanic1.png';
import botanic2 from '../../Assets/img/botanic2.png';
import botanic3 from '../../Assets/img/botanic3.png';
import botanic4 from '../../Assets/img/botanic4.png';

import ocean1 from '../../Assets/img/ocean1.png';
import ocean2 from '../../Assets/img/ocean2.png';
import ocean3 from '../../Assets/img/ocean3.png';
import ocean4 from '../../Assets/img/ocean4.png';

import nature1 from '../../Assets/img/random1.png';
import nature2 from '../../Assets/img/random2.png';
import nature3 from '../../Assets/img/random3.png';
import nature4 from '../../Assets/img/random4.png';

import janetmeinke from '../../Assets/img/janetmeinke.png';
import golsagolchini from '../../Assets/img/golsagolchini.png';
import artist3 from '../../Assets/img/artist3.png';
import artist4 from '../../Assets/img/artist4.png';
import artist5 from '../../Assets/img/artist5.png';
import artist6 from '../../Assets/img/artist6.png';
import artist7 from '../../Assets/img/artist7.png';

const galleryContent = {
  botanic: [
    { id: 1, src: botanic1, alt: "botanic1", theme: "botanic", year: "2024", artist: "JANET MEINKE", name: "Primero botanico"},
    { id: 2, src: botanic2, alt: "botanic2", theme: "botanic", year: "2022", artist: "JANET MEINKE", name: "Segundo botanico"},
    { id: 3, src: botanic3, alt: "botanic3", theme: "botanic", year: "2023", artist: "JANET MEINKE", name: "Tercero botanico"},
    { id: 4, src: botanic4, alt: "botanic4", theme: "botanic", year: "2021", artist: "JANET MEINKE", name: "Quatero botanico"},
    ],

  ocean: [
    { id: 1, src: ocean1, alt: "ocean1", theme: "ocean", year: "2024", artist: "JANET MEINKE", name: "Primero oceano"},
    { id: 2, src: ocean2, alt: "ocean2", theme: "ocean", year: "2023", artist: "JANET MEINKE", name: "Segundo oceano"},
    { id: 3, src: ocean3, alt: "ocean3", theme: "ocean", year: "2022", artist: "JANET MEINKE", name: "Tercero oceano"},
    { id: 4, src: ocean4, alt: "ocean4", theme: "ocean", year: "2021", artist: "JANET MEINKE", name: "Quatero oceano"},
    { id: 5, src: ocean1, alt: "ocean1", theme: "ocean", year: "2024", artist: "JANET MEINKE", name: "Cinquero oceano"},
    { id: 6, src: ocean2, alt: "ocean2", theme: "ocean", year: "2023", artist: "JANET MEINKE", name: "Sesero oceano"},
    { id: 7, src: ocean3, alt: "ocean3", theme: "ocean", year: "2022", artist: "JANET MEINKE", name: "Setero oceano"},
    { id: 8, src: ocean4, alt: "ocean4", theme: "ocean", year: "2021", artist: "JANET MEINKE", name: "Ocheo oceano"},
  
  ],

  nature: [
    { id: 1, src: nature1, alt: "nature1", theme: "nature", year: "2024", artist: "JANET MEINKE", name: "Primera natura"},
    { id: 2, src: nature2, alt: "nature2", theme: "nature", year: "2023", artist: "JANET MEINKE", name: "Segunda natura"},
    { id: 3, src: nature3, alt: "nature3", theme: "nature", year: "2022", artist: "JANET MEINKE", name: "Tercera natura"},
    { id: 4, src: nature4, alt: "nature4", theme: "nature", year: "2021", artist: "JANET MEINKE", name: "Quatera natura"},
  ],

  artistscover: [
    { id: 1, src: janetmeinke, alt: "artist1" },
    { id: 2, src: golsagolchini, alt: "artist2" },
    { id: 3, src: artist3, alt: "artist3" },
    { id: 4, src: artist4, alt: "artist4" },
    { id: 5, src: artist5, alt: "artist5" },
    { id: 6, src: artist6, alt: "artist6" },
    { id: 7, src: artist7, alt: "artist7" },
  ]
};

export default galleryContent;


export const getImagesByYear = (year) => {
  return Object.values(galleryContent).flatMap(gallery => gallery.filter(image => image.year === year));
};

