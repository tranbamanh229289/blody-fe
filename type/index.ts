export interface IUser{
    email: string,
    name: string,
    male: boolean,
    linkAvatar  : string,
    age: number,
    introduction: string
}

export interface IComment{
    content: string,
    like: number,
    dislike: number,
}
export interface INotification{
    content: string,
    date: Date,
    path: string,
}
export interface IBlog{
    content: string,
    title: string,
    like: number,
    dislike: number,
    status: boolean,
    views: number,
    description: string
}

