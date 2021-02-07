export interface CarouselProps {
    items: ImageItem[]
}

export interface ImageListProps {
    header: string,
    items: ImageItem[],
    listType: ImageListType
}      

export interface CardProps {
    imageItem: ImageItem,
    cardSize: CardSize
}

export interface ImageItem {
    title: string,
    location: string,
    img: string
}

export enum CardSize {
    SMALL = 0,
    MEDIUM = 1,
    LARGE = 2
}

export enum ImageListType {
    CAROUSEL = 0,
    FIXED = 1
}

export enum Position {
    LEFT = 0,
    RIGHT = 1
}

export interface CarouselButtonProps {
    position?: Position,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface ImageItemApiResponse{
    data: ImageItem[]
}

export interface ThemeType{
    name: string,
    values: ThemeValues
}

export interface ThemeValues {
    fontPrimary: string,
    fontSecondary: string,
    background:string,
    panel: string,
    accent: string
}

