import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.querySelector("#inputHeader");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value));

    handleRenderList(result);
}