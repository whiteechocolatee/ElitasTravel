import ContentWrapper from "../../components/contentBlock/ContentWrapper";
import Input from "../../components/input/Input";
import styles from "./createPlane.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePlane() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [capacity, setCapacity] = useState();
  const [planeImage, setPlaneImage] = useState();

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
          value={name}
          type='text'
          name='name'
          placeholder='Укажите название'
        />
        <Input
          type='text'
          name='name'
          placeholder='Укажите описание'
        />
        <Input
          type='text'
          name='name'
          placeholder='Укажите цену'
        />
        <Input
          type='text'
          name='name'
          placeholder='Укажите колличество мест'
        />
        <Input
          type='file'
          name='name'
          placeholder='Добавьте фото'
        />
        <Button>Создать самолет</Button>
      </form>
    </ContentWrapper>
  );
}

export default CreatePlane;
