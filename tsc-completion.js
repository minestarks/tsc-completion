#!/usr/bin/env node
/// @ts-check

const child_process = require("child_process");
const ts = require('typescript');


const compLine = process.env['COMP_LINE'] || "";
const compPoint = parseInt(process.env['COMP_POINT']) || compLine.length;

// console.error(`invoked: compLine = ${compLine} compPoint = ${compPoint}`)

if (compPoint == compLine.length) {

    const optionNameMap = ts.getOptionNameMap();
    const optionMap = optionNameMap.optionNameMap;
    const names = Array.from(optionMap.keys());
    const shortOptions = optionNameMap.shortOptionNames;
    names.concat(Array.from(shortOptions.keys()));
    const options = names.map(n => "--" + n);

    // need better parsing
    const parts = compLine.split(/\s/).filter(s => s);
    const lastWord = (parts.length > 1 && parts[parts.length - 1]) || "";
    const lastWordComplete = compLine.endsWith(' ');
    const currentOption = (lastWord.startsWith('-') && lastWordComplete)? lastWord : 
        (!lastWordComplete && parts.length > 2 && parts[parts.length - 2].startsWith('-') ? parts[parts.length - 2] : "");
    
    // console.error(`lastWord: "${lastWord}" currentOption: "${currentOption}"`);

    let completions = [];

    if (currentOption) {
        let option = currentOption.startsWith('--') ? currentOption.substr(2) : shortOptions.get(currentOption.substr(1));
        const optionDesc = optionMap.get(option);
        if (optionDesc && optionDesc.type instanceof Map) {
            completions = Array.from(optionDesc.type.keys());
        }
    } 
    
    if(completions.length === 0) {
        completions = options;
    }
    
    completions.filter(o => lastWord && !lastWordComplete ? o.startsWith(lastWord) : true ).forEach(o => console.log(o));
    
    //console.error(`results = ${results.split('\n').join(', ')}`);
}
// otherwise forget it too hard
