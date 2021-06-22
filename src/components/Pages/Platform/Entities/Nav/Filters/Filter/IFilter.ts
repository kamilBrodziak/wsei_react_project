

export enum FilterPropertyEnum {
    WHERE = 'Where',
    AND = 'And',
    OR = 'Or'
}

export enum FilterValueEnum {
    TEXT = 'text',
    DATE = 'date',
    NUMBER = 'number'
}

export enum TextFilterEnum {
    CONTAINS = 'Contains',
    EQUAL = 'Equal',
    NOTEQUAL = 'Not equal'
}

export enum DateFilterEnum {
    ENDSBEFORE = 'Ends before',
    STARTSAFTER = 'Starts after',
    BETWEEN = 'Between'
}

export type TFilterStartData = {[key:string]:FilterValueEnum};



