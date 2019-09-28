import { LitElement, css, html, svg } from "lit-element";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-checkbox";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-upload";

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
  static get styles() {
    return css`
      @media print {
        :host > * {
          display: none !important;
        }
        :host > svg {
          display: inherit !important;
        }
      }
      vaadin-text-field {
        width: 100%;
      }
      .imagecontainer {
        display: inline-flex;
        flex-direction: column;
        align-items: baseline;
      }
      .glue {
        font-size: 3px;
        stroke-width: 0px;
        fill: black;
      }
    `;
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 70" version="1.1" style="height:auto">
   <defs>
      <path id="poly" d="m 0,10 20,10 20,-10 -20,-10 z" style="stroke:#000000;stroke-width:0.2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">
      </path>
      <clipPath id="image-clip">
         <use href="#poly"/>
      </clipPath>
      <clipPath id="polys">
         <rect x="0" y="0" width="120" height="50"/>
      </clipPath>
      <g id="bigglue">
        <path d="m 0,0 40,0 -20,10 z"/>
        <text x="17" y="4" class="glue">glue</text>
      </g>
      <g id="smallglue">
        <path d="m 0,0 5,5 0,10 -5,5 z"/>
        <text y="-2" x="7" class="glue" transform="rotate(90)" >glue</text>
      </g>
      <path id="fold-vertical" d="m 0,0 0,10 z" stroke-dasharray="0.3" stroke-width="0.1px"/>
      <image href="${
        this.image1
      }" id="pic1" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice1 ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image2
      }" id="pic2" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice2 ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image3
      }" id="pic3" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice3 ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image4
      }" id="pic4" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice4 ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
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
         <path d="m 0,0 0,40" fill="red"/>
      </g>
      <use href="#bigglue" x="0" y="0" />
      <use href="#bigglue" x="40" y="0" />
      <use href="#bigglue" x="80" y="0" />
      <use href="#smallglue" x="120" y="0" />
      <use href="#smallglue" x="120" y="20" />

      <use href="#fold-vertical" x="20" y="0"/>
      <use href="#fold-vertical" x="60" y="0"/>
      <use href="#fold-vertical" x="100" y="0"/>
      <use href="#fold-vertical" x="20" y="50"/>
      <use href="#fold-vertical" x="60" y="50"/>
      <use href="#fold-vertical" x="100" y="50"/>
      <use href="#fold-vertical" x="40" y="40"/>
      <use href="#fold-vertical" x="80" y="40"/>
      <use href="#fold-vertical" x="120" y="40"/>
   </g>
</svg>
`}
${[1, 2, 3, 4].map(
  nr => html`
    <div class="imagecontainer">
      Image ${nr}<br />
      <vaadin-upload
        @upload-before="${e => this.handleUpload(e, `image${nr}`)}"
        capture="camera"
        accept="image/*"
      >
      </vaadin-upload>
      <vaadin-checkbox
        .checked=${this[`slice${nr}`]}
        @change="${e => (this[`slice${nr}`] = e.target.checked)}"
        >Stretch</vaadin-checkbox
      >
    </div>
  `
)}
      </div>
      <p>
      <vaadin-button @click="${e => window.print()}">Print</vaadin-button>
      </p>
    `;
  }
  handleUpload(e, v) {
    e.preventDefault();
    e.target.files = [];
    var reader = new FileReader();
    reader.addEventListener("loadend", ee => {
      const data = reader.result;
      this[v] = data;
      // Yey Safari..
      this.shadowRoot
        .querySelectorAll("use")
        .forEach(use => use.setAttribute("href", use.getAttribute("href")));
    });

    reader.readAsDataURL(e.detail.file);
  }
}
customElements.define("flex-tangle", FlexTangle);
