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

export interface ISearchParams {
    bookName: string;
    startIndex: number;
    booksOrder?: string;
}
