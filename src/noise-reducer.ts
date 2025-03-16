/* eslint-disable no-plusplus */
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { noReducer, basicReducer, squashReducer } from './reducer-functions.js';
import { getNewData } from './data.js';

@customElement('noise-reducer')
export class NoiseReducer extends LitElement {
  @property({ attribute: 'function' }) denoiserName: string;

  @property({ attribute: 'delta', type: Number }) delta: number;

  data: number[][];

  static styles = css``;

  render() {
    return html`
      <main>
        <div class="controls"></div>
        <div>
          <canvas width="1000" height="500"></canvas>
        </div>
      </main>
    `;
  }

  constructor() {
    super();
    this.denoiserName = 'none';
    this.data = getNewData();
    this.delta = 0.0;
  }

  updated() {
    const width = 10;
    const height = 10;
    const canvas = this.renderRoot.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const getColor = this.getDenoiser();

    for (let y = 0; y < 50; y++) {
      for (let x = 0; x < 100; x++) {
        const color = getColor(this.data[y][x], this.delta);
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx?.fillRect(x * width, y * height, width, height);
      }
    }
  }

  getDenoiser() {
    switch (this.denoiserName) {
      case 'basic':
        return basicReducer;
      case 'squash':
        return squashReducer;
      default:
        return noReducer;
    }
  }
}
