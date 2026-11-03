/**
 * URLs from the pre-2016 WordPress blog. mkdocs-redirects used to emit a stub
 * page for each; Astro's `redirects` config does the same job.
 */
const ARCHIVE = 'https://web.archive.org/web';

export const legacyRedirects = {
  '/autor/': `${ARCHIVE}/20180823163315/http://thinkoneering.com/autor/`,
  '/blog/': `${ARCHIVE}/20180823163315/http://thinkoneering.com/blog/`,
  '/2014/05/16/und-wozu-braucht-man-das/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2014/05/16/und-wozu-braucht-man-das/`,
  '/2014/06/06/kommunismus-im-internet/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2014/06/06/kommunismus-im-internet/`,
  '/2014/10/11/von-menschen-und-maschinen/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2014/10/11/von-menschen-und-maschinen/`,
  '/2014/10/31/turbovegetarier-ohne-facebook/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2014/10/31/turbovegetarier-ohne-facebook/`,
  '/2015/01/30/natur-und-technik/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2015/01/30/natur-und-technik/`,
  '/2015/03/16/die-3-stufen-der-open-source-liebe/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2015/03/16/die-3-stufen-der-open-source-liebe/`,
  '/2015/06/05/haus-am-see/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2015/06/05/haus-am-see/`,
  '/2015/06/21/anders-als-gedacht/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2015/06/21/anders-als-gedacht/`,
  '/2015/09/25/pflanze-dir-ein-winterkorn/': `${ARCHIVE}/20190309125210/http://thinkoneering.com/2015/09/25/pflanze-dir-ein-winterkorn/`,
};
