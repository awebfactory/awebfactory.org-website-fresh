import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  preflight: {
    "@font-face": [
      {
        fontFamily: "Crete Round",
        fontWeight: "normal",
        fontStyle: "normal",
        src:
          'url("/fonts/creteround/CreteRound-Regular.ttf") format("truetype")',
      },
      {
        fontFamily: "PT Sans",
        fontWeight: "normal",
        fontStyle: "normal",
        src: 'url("/fonts/ptsans/PT_Sans-Web-Regular.ttf") format("truetype")',
      },
    ],
    h2: apply`font-heading`,
    p: apply`font-content`,
    nav: apply`font-heading`,
  },
  theme: {
    extend: {
      fontFamily: {
        heading: "Crete Round, Geneva, Arial, Helvetica, sans-serif",
        content: "PT Sans, Verdana, Arial, Helvetica, sans-serif",
      },
    },
  },
} as Options;
