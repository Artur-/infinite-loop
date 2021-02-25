import "@vaadin/vaadin-button";
import "@vaadin/vaadin-checkbox";
import { CheckboxCheckedChanged } from "@vaadin/vaadin-checkbox";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-upload";
import { UploadBefore, UploadElement } from "@vaadin/vaadin-upload";
import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  svg,
} from "lit-element";

@customElement("infinite-loop")
export class InfiniteLoop extends LitElement {
  @internalProperty()
  private slice = [true, true, true, true];
  @internalProperty()
  private image = [
    "https://images.unsplash.com/photo-1559036211-b50481ffd03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1563618770208-088b83ebd2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    "https://images.unsplash.com/photo-1546488718-3403ccbba0dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    "https://images.unsplash.com/photo-1464002255390-2de63a26c637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  ];

  static get styles() {
    return css`
      @media print {
        :host > * {
          display: none !important;
        }
        :host > svg {
          display: inherit !important;
        }
        .instructions {
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
      .instructions {
        font-size: 2px;
        fill: black;
        stroke: none;
        display: none;
      }
    `;
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
        this.image[0]
      }" id="pic1" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice[0] ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image[1]
      }" id="pic2" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice[1] ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image[2]
      }" id="pic3" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice[2] ? "slice" : ""
      }" clip-path="url(#image-clip)"/>
      <image href="${
        this.image[3]
      }" id="pic4" width="40" height="20" preserveAspectRatio="xMidYMid ${
        this.slice[3] ? "slice" : ""
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
      <text x="10" y="55" class="instructions">
        <tspan x="0" dy="1.2em">1. Fold and unfold along the dashed lines.</tspan>
        <tspan x="0" dy="1.2em">2. Fold and unfold along the diagonal lines.</tspan>
        <tspan x="0" dy="1.2em">3. Cut along the outer edge (remove the lower dashed lines)</tspan>
        <tspan x="0" dy="1.2em">4. Fold so that two glue tabs on top align with the polygon at the bottom.</tspan>
        <tspan x="0" dy="1.2em">5. Add glue on tabs marked with “glue” and press together. Finally glue the end tabs.</tspan>
      </text>
</g>
</svg>
`}
${[0, 1, 2, 3].map(
  (id) => html`
    <div class="imagecontainer">
      Image ${id + 1}<br />
      <vaadin-upload
        @upload-before="${(e: UploadBefore) => this.handleUpload(e, id)}"
        capture="camera"
        accept="image/*"
      >
      </vaadin-upload>
      <vaadin-checkbox
        .checked=${this.slice[id]}
        @checked-changed="${(e: CheckboxCheckedChanged) =>
          this.setStretch(e.detail.value, id)}"
        >Stretch</vaadin-checkbox
      >
    </div>
  `
)}
      </div>
      <p>
      <vaadin-button @click="${() => window.print()}">Print</vaadin-button>
      </p>
    `;
  }
  setStretch(stretch: boolean, id: number) {
    this.slice[id] = stretch;
    this.requestUpdate();
  }
  handleUpload(e: UploadBefore, id: number) {
    e.preventDefault();
    (e.target! as UploadElement).files = [];
    var reader = new FileReader();
    reader.addEventListener("loadend", () => {
      const data = reader.result as string;
      this.image[id] = data;
      // Yey Safari..
      this.renderRoot
        .querySelectorAll("use")
        .forEach((use) => use.setAttribute("href", use.getAttribute("href")!));
      this.requestUpdate();
    });

    reader.readAsDataURL(e.detail.file);
  }
}
