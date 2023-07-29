export interface ISingleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        subtitle: string;
        categories: string[];
        imageLinks: {
            thumbnail: string;
            smallThumbnail: string;
        };
    };
}

export interface IGetBooksQueryParams {
    name: string;
    startIndex: string | number;
}
