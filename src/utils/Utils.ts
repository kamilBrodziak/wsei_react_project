const checkValidation = (obj: any, validationFunc: (val: any) => boolean):boolean => {
    const values:[] = typeof obj === 'object' ? Object.values(obj) : obj;
    
    return values.filter(el => {
        return (typeof el === 'object' || Array.isArray(el)) ?
            checkValidation(el, validationFunc) :
            validationFunc(el)
    }).length === 0
};

const deepClone = <T>(obj:T):T => {
    return JSON.parse(JSON.stringify(obj))
}


export {checkValidation, deepClone}