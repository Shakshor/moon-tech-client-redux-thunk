import { removeProduct } from "../../actions/productAction";

const deleteProduct = (id) => {
  //   console.log(id);
  return async (dispatch, getState) => {
    console.log(dispatch);
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    // if (data.acknowledged) {
    //   dispatch(removeProduct(id));
    // }
  };
};

export default deleteProduct;
