const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true // change importing css to less
    }),
    addLessLoader({
        //javascriptEnabled: true,
        modifyVars: { 
            "@brand-primary": "#1cae82", 
            "@brand-primary-tap": "#1DA57A" 
        }
    })
);