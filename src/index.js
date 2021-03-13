require( '@babel/polyfill' );
import './css/main.scss';
import getList from './scripts/getList';
import renderList from './scripts/renderList';

// Note:
// - If you wish to load files using XHR or `fetch`,
//   then the path is relative to this project's root directory,
//   _not_ relative to the file in which you're using XHR or `fetch`.
//
//   E.g. Using XHR or `fetch` in this file would require you to
//        use the following:
//        * `./src/data/...` rather than `./data/...`

const element = document.getElementById('js-app');
getList().then(json => {
    renderList(json, element);
})
