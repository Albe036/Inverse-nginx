import { styleText as st } from 'node:util'

export function format_console(list_format = [], to_print = '') {
    let result;
    if(!!to_print){
        result = to_print;
        for(let i of list_format){
            result = `${st(i, result)}`
        }
        console.log(result);
    }
}