#!/usr/bin/env node
/// @ts-check

const child_process = require("child_process");
const ts = require('typescript');


const compLine = process.env['COMP_LINE'] || "";
const compPoint = parseInt(process.env['COMP_POINT']) || compLine.length;

console.error(`invoked: compLine = ${compLine} compPoint = ${compPoint}`)

if (compPoint == compLine.length) {

    const optionNameMap = ts.getOptionNameMap();
    const names = Array.from(optionNameMap.optionNameMap.keys());
    names.concat(Array.from(optionNameMap.shortOptionNames.keys()));
    const options = names.map(n => "--" + n);

    // need better parsing
    const match = compLine.match(/tsc\s+([^\s]+\s+)*([^\s]+(\s?))$/);
    const lastWord = match[2];
    const spaceAfterLastWord = match[3];
    
    console.error(`lastWord: "${lastWord}" space: "${spaceAfterLastWord}"`);

    if (!spaceAfterLastWord) {
        const compgenCmd = `bash -lic 'compgen -W "${options.join(' ')}" -- "${lastWord}"'`;
        const results = child_process.execSync(compgenCmd).toString();
    
        process.stdout.write(results);
    } else {
        if (options.find(lastWord)) {
            console.log('yeah!');
        }
    }

    

    //console.error(`results = ${results.split('\n').join(', ')}`);
}
// otherwise forget it too hard
