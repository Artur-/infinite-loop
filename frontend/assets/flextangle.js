import { svg } from "lit-element";

export const flextangle = svg`
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 50" version="1.1" style="height:auto">
   <defs>
      <path id="poly" d="m 0,10 20,10 20,-10 -20,-10 z" style="stroke:#000000;stroke-width:0.2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">
      </path>
      <clipPath id="test">
         <use href="#poly"/>
      </clipPath>
      <clipPath id="polys">
         <rect x="0" y="0" width="120" height="50"/>
      </clipPath>
      <path id="bigglue" d="m 0,0 40,0 -20,10 z"/>
      <path id="smallglue" d="m 0,0 5,5 0,10 -5,5 z"/>
      <image href="https://images.unsplash.com/photo-1559036211-b50481ffd03d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1965&amp;q=80" id="pic1" width="40" height="20" preserveAspectRatio="xMidYMid slice" clip-path="url(#test)"/>
      <image href="https://images.unsplash.com/photo-1563618770208-088b83ebd2b0?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" id="pic2" width="40" height="20" preserveAspectRatio="xMidYMid slice" clip-path="url(#test)"/>
      <image href="https://images.unsplash.com/photo-1546488718-3403ccbba0dc?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1949&amp;q=80" id="pic3" width="40" height="20" preserveAspectRatio="xMidYMid slice" clip-path="url(#test)"/>
      <image href="https://images.unsplash.com/photo-1464002255390-2de63a26c637?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" id="pic4" width="40" height="20" preserveAspectRatio="xMidYMid slice" clip-path="url(#test)"/>
   </defs>

   <g id="all" fill="none" style="stroke:#000000;stroke-width:0.2px">
      <g fill="none" clip-path="url(#polys)">
         <use href="#poly" x="-20" y="0" fill="green" />
         <use href="#pic1" x="-20" y="0"/>
         <use href="#poly" x="20" y="0" fill="green" />
         <use href="#pic1" x="20" y="0"/>
         <use href="#poly" x="60" y="0" fill="green" />
         <use href="#pic1" x="60" y="0"/>
         <use href="#poly" x="100" y="0" fill="green" />
         <use href="#pic1" x="100" y="0"/>
         <use href="#poly" x="0" y="10" fill="red" />
         <use href="#pic2" x="0" y="10"/>
         <use href="#poly" x="40" y="10" fill="red" />
         <use href="#pic2" x="40" y="10"/>
         <use href="#poly" x="80" y="10" fill="red" />
         <use href="#pic2" x="80" y="10"/>
         <use href="#poly" x="-20" y="20" fill="blue" />
         <use href="#pic3" x="-20" y="20"/>
         <use href="#poly" x="20" y="20" fill="blue" />
         <use href="#pic3" x="20" y="20"/>
         <use href="#poly" x="60" y="20" fill="blue" />
         <use href="#pic3" x="60" y="20"/>
         <use href="#poly" x="100" y="20" fill="blue" />
         <use href="#pic3" x="100" y="20"/>
         <use href="#poly" x="0" y="30" fill="yellow" />
         <use href="#pic4" x="0" y="30"/>
         <use href="#poly" x="40" y="30" fill="yellow" />
         <use href="#pic4" x="40" y="30"/>
         <use href="#poly" x="80" y="30" fill="yellow" />
         <use href="#pic4" x="80" y="30"/>
      </g>
      <use href="#bigglue" x="0" y="0" />
      <use href="#bigglue" x="40" y="0" />
      <use href="#bigglue" x="80" y="0" />
      <use href="#smallglue" x="120" y="0" />
      <use href="#smallglue" x="120" y="20" />
   </g>
</svg>

`;
