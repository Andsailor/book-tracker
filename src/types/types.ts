export interface ISingleBook {
    searchInfo: {
        textSnippet: string;
    };
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        subtitle: string;
        categories: string[];
        description: string;
        ratingsCount?: number;
        pageCount?: number;
        infoLink?: string;
        imageLinks: {
            thumbnail: string;
            smallThumbnail: string;
        };
    };
}

export interface IGoogleBookResponse {
    totalItems: number;
    items: ISingleBook[];
}

export interface ISearchParams {
    bookName: string;
    startIndex: number;
    booksOrder?: string;
}

export interface IAboutBookPageContent {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageLinks?: {
        thumbnail: string;
        smallThumbnail: string;
    };
}

export interface IAxiosGetBook {
    data: IGoogleBookResponse;
}
