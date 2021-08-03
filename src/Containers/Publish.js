import PublishInputs from "../Components/PublishInputs";
import { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ userToken }) => {
  // console.log(userToken);
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {userToken ? (
        <form onSubmit={handleSubmit}>
          <PublishInputs type="file" setFunc={setPicture}></PublishInputs>
          <PublishInputs
            inputName="Titre"
            type="text"
            placeholder="ex : Chemise Sézane verte"
            setFunc={setTitle}
          ></PublishInputs>
          <PublishInputs
            inputName="Décris ton article"
            type="textarea"
            placeholder="ex : porté quelquefois, taille correctement"
            setFunc={setDescription}
          ></PublishInputs>
          <PublishInputs
            inputName="Marque"
            type="text"
            placeholder="ex : zara"
            setFunc={setBrand}
          ></PublishInputs>
          <PublishInputs
            inputName="Taille"
            type="text"
            placeholder="ex : L/40/12"
            setFunc={setSize}
          ></PublishInputs>
          <PublishInputs
            inputName="Couleur"
            type="text"
            placeholder="ex : Fushia"
            setFunc={setColor}
          ></PublishInputs>
          <PublishInputs
            inputName="Etat"
            type="text"
            placeholder="ex : Neuf avec étiquette"
            setFunc={setCondition}
          ></PublishInputs>
          <PublishInputs
            inputName="Lieu"
            type="text"
            placeholder="ex : Paris"
            setFunc={setCity}
          ></PublishInputs>
          <PublishInputs
            inputName="Prix"
            type="text"
            placeholder="0,00 €"
            setFunc={setPrice}
          ></PublishInputs>

          <input type="submit" />
        </form>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Publish;
