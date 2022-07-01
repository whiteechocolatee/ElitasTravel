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

function CreatePlane() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [capacity, setCapacity] = useState();
  const [planeImage, setPlaneImage] = useState();

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
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='text'
          name='description'
          placeholder='Укажите описание'
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type='text'
          name='price'
          placeholder='Укажите цену'
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name='capacity'
          type='text'
          placeholder='Укажите колличество мест'
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          type='file'
          name='planeImage'
          placeholder='Добавьте фото'
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
