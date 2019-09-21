import { LitElement, html, svg } from "lit-element";

export class FlexTangle extends LitElement {
  static get properties() {
    return {
      image1: String,
      image2: String,
      image3: String,
      image4: String,
      slice1: Boolean,
      slice2: Boolean,
      slice3: Boolean,
      slice4: Boolean
    };
  }
  constructor() {
    super();
    this.slice1 = true;
    this.slice2 = true;
    this.slice3 = true;
    this.slice4 = true;
    this.image1 =
      "https://images.unsplash.com/photo-1559036211-b50481ffd03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1965&q=80";
    this.image2 =
      "https://images.unsplash.com/photo-1563618770208-088b83ebd2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80";
    this.image3 =
      "https://images.unsplash.com/photo-1546488718-3403ccbba0dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80";
    this.image4 =
      "https://images.unsplash.com/photo-1464002255390-2de63a26c637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
  }

  render() {
    return html`
      ${svg`
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
      <image href="${
        this.image1
      }" id="pic1" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice1 ? "slice" : ""
      }" clip-path="url(#test)"/>
      <image href="${
        this.image2
      }" id="pic2" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice2 ? "slice" : ""
      }" clip-path="url(#test)"/>
      <image href="${
        this.image3
      }" id="pic3" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice3 ? "slice" : ""
      }" clip-path="url(#test)"/>
      <image href="${
        this.image4
      }" id="pic4" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice4 ? "slice" : ""
      }" clip-path="url(#test)"/>
   </defs>

   <g id="all" fill="none" style="stroke:#000000;stroke-width:0.3px">
      <g fill="none" clip-path="url(#polys)">
         <use href="#pic1" x="-20" y="0"/>
         <use href="#poly" x="-20" y="0"  />
         <use href="#pic1" x="20" y="0"/>
         <use href="#poly" x="20" y="0" />
         <use href="#pic1" x="60" y="0"/>
         <use href="#poly" x="60" y="0" />
         <use href="#pic1" x="100" y="0"/>
         <use href="#poly" x="100" y="0" />
         <use href="#pic2" x="0" y="10"/>
         <use href="#poly" x="0" y="10" />
         <use href="#pic2" x="40" y="10"/>
         <use href="#poly" x="40" y="10" />
         <use href="#pic2" x="80" y="10"/>
         <use href="#poly" x="80" y="10" />
         <use href="#pic3" x="-20" y="20"/>
         <use href="#poly" x="-20" y="20" />
         <use href="#pic3" x="20" y="20"/>
         <use href="#poly" x="20" y="20" />
         <use href="#pic3" x="60" y="20"/>
         <use href="#poly" x="60" y="20" />
         <use href="#pic3" x="100" y="20"/>
         <use href="#poly" x="100" y="20" />
         <use href="#pic4" x="0" y="30"/>
         <use href="#poly" x="0" y="30" />
         <use href="#pic4" x="40" y="30"/>
         <use href="#poly" x="40" y="30" />
         <use href="#pic4" x="80" y="30"/>
         <use href="#poly" x="80" y="30" />
      </g>
      <use href="#bigglue" x="0" y="0" />
      <use href="#bigglue" x="40" y="0" />
      <use href="#bigglue" x="80" y="0" />
      <use href="#smallglue" x="120" y="0" />
      <use href="#smallglue" x="120" y="20" />
   </g>
</svg>
`}
    `;
  }
}
customElements.define("flex-tangle", FlexTangle);
