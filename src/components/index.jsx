import PostCard from "../PostCard"
import style from './PostContainer.module.css'



export default function PostContainer(){

    const postsData = [
        {
            id: 1,
            title: 'Post 1',
            description: 'Post 2 description',
            likes: 100,
            author_firstname: 'Inna',
            author_lastname: 'Petrova',
            picture: 'https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg'
        },
        {
            id: 2,
            title: 'Post 2',
            description: 'Post 2 description',
            likes: 300,
            author_firstname: 'Anna',
            author_lastname: 'Ivanova',
            picture: 'https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg'
        },
        {
            id: 3,
            title: 'Post 3',
            description: 'Post 3 description',
            likes: 150,
            author_firstname: 'Oleg',
            author_lastname: 'Sidorov',
            picture: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 4,
            title: 'Post 4',
            description: 'Post 4 description',
            likes: 10,
            author_firstname: 'Anton',
            author_lastname: 'Ushanov',
            picture: 'https://c.files.bbci.co.uk/D8CD/production/_117310555_16.jpg'
        },
        {
            id: 5,
            title: 'Post 5',
            description: 'Post 5 description',
            likes: 78,
            author_firstname: 'Max',
            author_lastname: 'Kozlov',
            picture: 'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp'
        }
    ]

    return(
    
        <div className={style.posts_container}>{
            postsData.map(el=> <PostCard key={el.id} {...el}/>)
        }
             {/* Запись {...el} — это spread-синтаксис,
         который передает все свойства объекта el как пропсы для компонента PostCard. */}

        </div>
    )
}
// Атрибут key
// В React, когда вы создаете список компонентов с помощью .map(),
//  важно указать уникальный key для каждого компонента.
//  Это помогает React эффективно обновлять DOM при изменении списка.
//  В данном случае, в качестве key используется el.id.