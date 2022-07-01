export type APIData = {
    data: {
        [key: string]: any;
    };
};

export type Column = {
    height?: string;
    components: ContentComponent[];
};

export type PageData = {
    components: Column[];
};

export type ContentComponent = {
    name: string;
    startDate: string;
    endDate?: string;
    image: string;
    width?: number;
};
