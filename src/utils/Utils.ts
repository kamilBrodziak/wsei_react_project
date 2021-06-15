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

const distinctArr = <T>(arr:T[]):T[] => {
    const newArr:T[] = [];
    arr.forEach(T => {
    	if(!newArr.includes(T)) newArr.push(T)
    });
    return newArr;
}

const missingValues = <T>(values:T[], allValues:T[]):T[] => {
    return values.filter(val => !allValues.includes(val));
}


const dateToString = (pattern:string, date:Date) => {
    const dateStrings:{[key:string]:string[]} = {
        M: ["January", "February", "March" ,"April", "May", "June",
            "July", "August", "September", "October", "November", "December"],
        D: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday', 'Sunday'],
    }
    let dateStr = pattern;
    const dateAttrs:{[key:string]:number} = {
        M: date.getMonth() + 1,
        D: date.getDay(),
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    dateStr = dateStr.replace(/(M+|d+|h+|m+|s+|D+)/g, (attr:string):string => {
        const name = attr.slice(-1);
        switch(attr.length) {
            case 0: return "";
            case 1: return "" + dateAttrs[name];
            case 2: return (dateAttrs[name] < 10 ? "" : "0") + dateAttrs[name];
            case 3: if(dateStrings[name]) return dateStrings[name][dateAttrs[name] - 1].slice(0,3);
            case 4: if(dateStrings[name]) return dateStrings[name][dateAttrs[name] - 1];
            default: return attr;
        }
    })
    return dateStr.replace(/(y+)/g, (year:string):string => date.getFullYear().toString().slice(-year.length));
}

const range = (start:number, stop:number, step:number=1) => {
    const items = [];
    for(let i = start; start < stop; i+=step) {
        items.push(i);
    }
    return items;
}

export {range, checkValidation, deepClone, distinctArr, missingValues, dateToString}