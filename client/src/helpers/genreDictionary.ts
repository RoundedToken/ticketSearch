import { TGenre } from '@/models/TGenre';

//@ts-ignore
export const genreDictionary = (genre) => {
    const dictionary = {
        fantasy: 'Фэнтези',
        horror: 'Ужасы',
        action: 'Боевик',
        comedy: 'Комедия',
    };
    //@ts-ignore
    return dictionary[genre] as TGenre;
};
