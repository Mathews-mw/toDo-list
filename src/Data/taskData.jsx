import { v4 as uuidv4 } from 'uuid';

export const taskData = [
    {
        id: uuidv4(),
        content:'Aprender React Js e React Native',
        puplishedAt: new Date('2022-08-09 20:18:00'),
        status: false
    },
    {
        id: uuidv4(),
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam quae sequi recusandae dolorem, possimus exercitationem voluptatibus labore aspernatur, libero, animi vero maiores autem quaerat nihil nostrum qui! Natus, eveniet.',
        puplishedAt: new Date('2022-08-10 10:15:00'),
        status: true
    },
    {
        id: uuidv4(),
        content:'Aprender mais sobre banco de dados, SQL, MySQL e Oracle',
        puplishedAt: new Date('2022-08-10 16:25:15'),
        status: false
    }
]
