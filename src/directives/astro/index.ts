import type {AstroIntegration} from "astro";

export default function CustomClientDirective(): AstroIntegration {
  return {
    name: "astro-directives",
    hooks: {
      "astro:config:setup": ({addClientDirective}) => {
        addClientDirective({
          name: "click",
          entrypoint: "./src/directives/astro/click.ts"
        })
        addClientDirective({
          name: "hover",
          entrypoint: "./src/directives/astro/hover.ts"
        })
        addClientDirective({
          name: "scroll",
          entrypoint: "./src/directives/astro/scroll.ts"
        })
      }
    },
  }
}