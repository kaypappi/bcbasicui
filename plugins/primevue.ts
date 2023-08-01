import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Tailwind_PT from "../passthrough/tailwind.js";
import { PrimeVuePTOptions } from "primevue/config";


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    pt: {
      button: {
        root: {
          class:
            " bg-brand hover:bg-brand-600 text-black font-bold capitalize hover:text-white cursor-pointer p-3 w-full max-w-md text-center justify-center rounded-lg border-none flex gap-2",
        },
        label: "text-white font-bold text-xl", // OR { class: 'text-white font-bold text-xl' }
        icon: "text-white text-2xl",
      },
      inputtext:{
        root:{
          class:"rounded-lg border border-[#E2E2E2] p-3 max-w-md"
        },
      },
      panel: {
        header: "bg-primary border-primary",
        content: "border-primary text-lg text-primary-700",
        title: "bg-primary text-xl",
        toggler: "bg-primary hover:bg-primary-reverse",
      },
    } as PrimeVuePTOptions,
  });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("InputText", InputText);
});
