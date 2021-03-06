import {IComponentConstructor} from './type';

const ComponentCenter = new Map<string,IComponentConstructor>()

export function defineComponent(name:string,ComponentProto:IComponentConstructor){
    ComponentCenter.set(name,ComponentProto);
}


export function getComponentByName(name:string):IComponentConstructor{
    return ComponentCenter.get(name);
}