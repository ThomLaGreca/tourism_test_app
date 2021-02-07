import { CardSizeType, ImageListType, PositionType } from "./enum";

export interface ICarousel {
    items: IImageItem[]
}

export interface IImageList {
    header: string,
    items: IImageItem[],
    listType: ImageListType,
    theme: ITheme
}      

export interface ICard {
    theme: ITheme,
    imageItem: IImageItem,
    cardSize: CardSizeType
}

export interface ICarouselButton {
    position?: PositionType,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface IImageItem {
    title: string,
    location: string,
    img: string
}

export interface ImageItemApiResponse{
    data: IImageItem[]
}

export interface ITheme{
    name: string,
    values: IThemeValues
}

export interface IThemeValues {
    fontPrimary: string,
    fontSecondary: string,
    background:string,
    panel: string,
    accent: string
}

