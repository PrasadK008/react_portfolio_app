import React from 'react';
import mock1 from '../assets/images/mock1.png';
import mock2 from '../assets/images/mock2.png';
import mock3 from '../assets/images/mock3.png';

function Gallery() {
  return (
    <section className="gallery">
      <h2>My Work</h2>
      <div className="grid">
        <img key={`img1`} src={mock1} alt={`Artwork`} />
        <img key={`img2`} src={mock2} alt={`Artwork`} />
        <img key={`img3`} src={mock3} alt={`Artwork`} />

        {/*         
        {[...Array(6)].map((_, i) => (
          <img key={i} src={mock1} alt={`Artwork ${i + 1}`} />
        ))} */}
      </div>
    </section>
  );
}

export default Gallery;
