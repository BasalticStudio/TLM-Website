/**
 * Gulp Config
 */

const SRC_BASE = ''
const TMP_BASE = './tmp/'
const DEST_BASE = './bundle/'

module.exports = {
    tmp: TMP_BASE,
    dest: DEST_BASE,
    html: {
        src: `${SRC_BASE}html/*.html`,
        tmp: `${TMP_BASE}`,
        dest: `${DEST_BASE}`,
    },
    javascript: {
        src:`${SRC_BASE}app/app.js`,
        tmp: `${TMP_BASE}js/`,
        dest: `${DEST_BASE}js/`,
    },
    sass: {
        src: `${SRC_BASE}sass/**/*.{sass,scss}`,
        tmp: `${TMP_BASE}css/`,
        dest: `${DEST_BASE}css/`,
        includePaths: [],
        imagePath: '/images',
    },
    images: {
        src: `${SRC_BASE}images/**/*`,
        tmp: `${TMP_BASE}images/`,
        dest: `${DEST_BASE}images/`
    },
    bower: {
        enable: false,
        dest: `${DEST_BASE}vendor/`
    },
    browserSync: {
        autoOpen: true,
        baseDir: [TMP_BASE, DEST_BASE],
        routes: {
            './vendor': './bower_components'
        }
    },
    parse: {
        cloud: [`${SRC_BASE}cloud/**/*.js`],
        config: `${SRC_BASE}parse/**/*.json`,
        dest: `./deploy`
    }
}
