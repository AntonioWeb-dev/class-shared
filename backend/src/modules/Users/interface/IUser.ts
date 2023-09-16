export interface IUser {
    email: string;
    name: string;
    surname: string;
    birthdate: string;
    typeUser: 'STUDENT' | 'PROFESSOR';
    avatarUrl: string;
}