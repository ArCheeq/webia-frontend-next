type CSSWithNestedStyles = {
    [key: string]: string | number | CSSWithNestedStyles;
};

type TDynamicElementProps = {
    textContent?: string;
    className?: string;
} & Record<string, any>;

interface IDynamicElement {
    id: number;
    key: string;
    type: string;
    pageName?: string;
    pageLink?: string;
    props: TDynamicElementProps;
    styles: CSSWithNestedStyles;
    code: string;
    children: IDynamicElement[];
}
