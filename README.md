# tsc-completion

## bash completion spec for tsc

Provides autocomplete for the [TypeScript](https://github.com/Microsoft/Typescript) compiler's command line options.

It's only prototype quality and I'm not a very good shell scripter nor a very good JavaScript developer. But it gets the job done.


### Installation:

```
git clone https://github.com/minestarks/tsc-completion.git
cd tsc-completion/
npm install
source ./register-tsc-completion.bash
```

Then start a new bash session.

### Demo:
```
$ tsc --t<tab><tab>
--target           --traceresolution  --tsbuildinfofile  --typeroots        --types
$ tsc --target es<tab><tab>
es2015  es2016  es2017  es2018  es2019  es2020  es3     es5     es6     esnext
```
