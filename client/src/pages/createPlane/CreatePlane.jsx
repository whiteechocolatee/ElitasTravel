import ContentWrapper from "../../components/contentBlock/ContentWrapper";
import Input from "../../components/input/Input";
import styles from "./createPlane.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createPlane } from "../../store/plane/planeSlice";
import { paths } from "../../paths";
import { useSelector } from "react-redux";

function CreatePlane() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => {
    return state.plane;
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [planeImage, setPlaneImage] = useState(null);

  const handleFormSubmit = useCallback(() => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);

    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, {
          replace: true,
        });
      }
    });
  }, [
    capacity,
    description,
    dispatch,
    name,
    navigate,
    planeImage,
    price,
  ]);

  return (
    <ContentWrapper>
      <form className={styles.form}>
        <Button
          onClick={() => navigate(-1)}
          className={styles.backBtn}>
          Назад
        </Button>
        <h1 className={styles.title}>Создайте самолет</h1>
        <Input
          type='text'
          name='name'
          placeholder='Укажите название'
          error={
            errors && errors.name && errors.name.message
          }
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='text'
          name='description'
          placeholder='Укажите описание'
          error={
            errors &&
            errors.description &&
            errors.description.message
          }
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type='text'
          name='price'
          placeholder='Укажите цену'
          error={
            errors && errors.price && errors.price.message
          }
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name='capacity'
          type='text'
          placeholder='Укажите колличество мест'
          error={
            errors &&
            errors.capacity &&
            errors.capacity.message
          }
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          type='file'
          name='planeImage'
          placeholder='Добавьте фото'
          error={
            errors &&
            errors.planeImage &&
            errors.planeImage.message
          }
          onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <Button onClick={handleFormSubmit}>
          Создать самолет
        </Button>
      </form>
    </ContentWrapper>
  );
}

export default CreatePlane;
