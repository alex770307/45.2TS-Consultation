import { useState } from "react";
import styles from "./App_form.module.css";

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  imgUrl: string;
  email: string;
}

function App_form(): JSX.Element {
  const [texts, setTexts] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const handleTextSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text") as string;
    setTexts([...texts, text]);
    console.log(text);
    event.currentTarget.reset();
  };

  const handleImageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imgUrl = formData.get("img_url") as string;
    setImages([...images, imgUrl]);
    console.log(imgUrl);
    event.currentTarget.reset();
  };

  const handleStudentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newStudent: Student = {
      firstName: formData.get("firstname") as string,
      lastName: formData.get("lastname") as string,
      age: Number(formData.get("age")),
      imgUrl: formData.get("img_url") as string,
      email: formData.get("email") as string,
    };
    setStudents([...students, newStudent]);
    console.log(newStudent);
    event.currentTarget.reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleTextSubmit} className={styles.form}>
        <input type="text" name="text" placeholder="Введите текст" required />
        <button type="submit">Добавить</button>
      </form>
      <div className={styles.textContainer}>
        {texts.map((text, index) => (
          <p key={index}>Text: {text}</p>
        ))}
      </div>

      <form onSubmit={handleImageSubmit} className={styles.form}>
        <input type="url" name="img_url" placeholder="Введите URL изображения" required />
        <button type="submit">Добавить</button>
      </form>
      <div className={styles.imgsContainer}>
        {images.map((src, index) => (
          <img key={index} src={src} alt="User added" className={styles.img} />
        ))}
      </div>

      <form onSubmit={handleStudentSubmit} className={styles.form}>
        <input type="text" name="firstname" placeholder="Имя" required />
        <input type="text" name="lastname" placeholder="Фамилия" required />
        <input type="number" name="age" placeholder="Возраст" required />
        <input type="url" name="img_url" placeholder="Ссылка на фото" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Добавить студента</button>
      </form>
      <div className={styles.studentsContainer}>
        {students.map(({ firstName, lastName, age, imgUrl, email }, index) => (
          <div key={index} className={styles.studentCard} style={{ backgroundColor: age < 18 ? "lightpink" : "white" }}>
            <img src={imgUrl} alt={`${firstName} ${lastName}`} className={styles.studentImg} />
            <p>{firstName} {lastName}</p>
            <p>{age} лет</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App_form;