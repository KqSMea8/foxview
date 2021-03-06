export interface ComponentProp {
    [key: string]: any;
}
export interface ComponentPropSchema {
    name: string;
    index?: number;
    value?: any;
}
export declare type ComponentSlotSchema = {
    [name: string]: Array<Element>;
};
export interface IComponentLifeCycle {
    componentDidMount(): void;
    componentDidUpdate(prevProps: ComponentProp, prevState: ComponentProp, snapshot?: any): void;
    componentWillUnmount(): void;
    componentDidCatch?(e: Error): void;
    shouldComponentUpdate(nextProps: ComponentProp, nextState: ComponentProp): boolean;
    getSnapshotBeforeUpdate?(prevProps: ComponentProp, prevState: ComponentProp): any;
    state?: ComponentProp;
    forceUpdate(callback?: () => void): any;
    render(): ITemplateResult;
    setState(partialState?: Partial<ComponentProp>, callback?: () => void): any;
}
export interface IComponent {
    id: string;
    _firstCommit(): void;
    _commit(prevProps: ComponentProp, prevState: ComponentProp, snapshot?: any): void;
    props: ComponentProp;
    _pendProps: ComponentProp;
    part: Peon;
    _mountFlag: boolean;
    _slots?: ComponentSlotSchema;
    fragment: DocumentFragment;
    renderOption: RenderOptions;
    _mount: (node: Element | DocumentFragment) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ComponentProp, prevState: ComponentProp, snapshot?: any): void;
    componentWillUnmount(): void;
    componentDidCatch?(e: Error): void;
    /**
     * 此刻this.state,this.props已经是最新值
     * prevProps,prevState引用更新前的值
     * **/
    getSnapshotBeforeUpdate?(prevProps: ComponentProp, prevState: ComponentProp): any;
    shouldComponentUpdate(nextProps: ComponentProp, nextState: ComponentProp): boolean;
    state?: ComponentProp;
    forceUpdate(callback?: () => void): any;
    render(): ITemplateResult;
    setState(partialState?: Partial<ComponentProp>, callback?: () => void): any;
}
export interface IComponentConstructor {
    new (props: ComponentProp): IComponent;
}
export interface Peon {
    setValue(value: any): void;
    /**
     * Commits the current part value, cause it to actually be written to the DOM.
     */
    commit(): void;
    destroy(): void;
}
export declare type ProcessResult = {
    fragment: DocumentFragment;
    partIndex: number;
    peons: Array<Peon>;
};
export declare type TemplateProcessor = (templateResult: ITemplateResult, option: RenderOptions) => ProcessResult;
export interface TemplateStringsArray extends ReadonlyArray<string> {
    readonly raw: ReadonlyArray<string>;
}
export interface ITemplateResult {
    strings: TemplateStringsArray;
    values: any[];
    type: string;
    getHTML: () => string;
    getTemplateElement: () => HTMLTemplateElement;
}
export interface ComponentPrototype {
    render: () => string[];
}
export interface RenderOptions {
    eventContext?: any;
    slots?: ComponentSlotSchema;
    notInWebComponent?: boolean;
    templateProcessor: TemplateProcessor;
    templateClone: (template: HTMLTemplateElement) => DocumentFragment;
}
