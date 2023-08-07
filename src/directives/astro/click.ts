import type { ClientDirective } from "astro";
import axiosConfig from "../../config/AxiosConfig";
import type {ProductType} from "../../types/product";

const click: ClientDirective = (load, options, element) => {
  element.addEventListener(
    "click",
    async () => {
      const hydrate = await load();
      const newArrivalProducts: ProductType[] = await axiosConfig.get(`/api/products?limit=4`)
      console.log(newArrivalProducts)
      await hydrate();
    },
    { once: true }
  );
};

export default click;