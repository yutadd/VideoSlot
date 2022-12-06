/*const { assertSupportedNodeVersion } = require('../src/Engine');

module.exports = async () => {
    // @ts-ignore
    process.noDeprecation = true;

    assertSupportedNodeVersion();

    const mix = require('../src/Mix').primary;
mix.js("resources/js/game.js",'public/js');
    require(mix.paths.mix());

    await mix.installDependencies();
    await mix.init();

    return mix.build();
};*/
const mix=require('laravel-mix');
mix.js('resources/js/game.js',"public/js");
