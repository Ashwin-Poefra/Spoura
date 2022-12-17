/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        adidas:
          "url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/running-shoe-finder-attract-fw22-digital-hp-teaser-carousel-d_tcm143-938990.jpg')",
        nike:
          "url('https://g.foolcdn.com/editorial/images/703379/nike-shoes.jpg')",
        puma:
          "url('https://media.istockphoto.com/id/1402713281/photo/pink-pastel-color-sneakers-on-background.jpg?b=1&s=170667a&w=0&k=20&c=B7mzyvxA5oOlcuoW0HI-wBZoV1R07lwjNacwVFXbm5U=')",
        under:
          "url('https://underarmour.scene7.com/is/image/Underarmour/FW22_CURRY_CurryFlow10_NL_Site_1_1?qlt=75&fmt=jpg&wid=768&op_sharpen=1&')",
      },
    }
  },
  plugins: [require("daisyui")]
};