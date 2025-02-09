import style from './PostCard.module.css'

interface IPostContainer {
    id: number;
    title: string;
    description: string;
    likes: number;
    author_firstname: string;
    author_lastname: string;
    picture: string;
}

export default function PostCard(
    { title, description, likes, author_firstname, author_lastname, picture }: IPostContainer): JSX.Element {
    return (
        <div className={style.post_card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{likes}</p>
            <p className={style.autor}>Autor: {author_firstname} {author_lastname}</p>
            <img src={picture} alt={title} />
        </div>
    )
}