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

export type PagePreview = {
    id: string;
    image: string;
    width?: number;
}

export type ContentMap = {
    [key: string]: ContentComponent;
}

export type ContentComponent = {
    name: string;
    startDate: string;
    endDate?: string;
    image: string;
    width?: number;
};
