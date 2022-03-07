export const required = (value: any) => {

    if (value) {
        return undefined
    } else {
        return 'Filed is required'
    }

}


export const maxLengthCreator = (maxLength:number) => (value: string) => {

    if (value && value.length > maxLength) {
        return `Max text length is ${maxLength}`
    } else {
        return undefined
    }

}