export type APIData = {
    data: {
        [key: string]: any;
    };
};

export type Column = {
    height?: string;
    sideHeight?: string;
    components: ContentComponent[];
};

export type PageData = {
    components: Column[];
};

export type PagePreview = {
    id: string;
    image: string;
    width?: number;
};

export type ContentMap = {
    [key: string]: ContentComponent;
};

export type ContentCategories =
    | 'web'
    | 'academic'
    | 'games'
    | 'art'
    | 'film'
    | 'code';

export type ContentComponent = {
    name: string;
    startDate: string;
    backgroundColor?: string;
    color?: string;
    endDate?: string;
    icon?: ContentCategories;
    image?: string;
    width?: number;
};
