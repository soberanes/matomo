/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
var SEOWidget = {
    getRank: function () {
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.setLoadingElement('#ajaxLoadingSEO');
        ajaxRequest.addParams({
            module: 'SEO',
            action: 'getRank',
            url: encodeURIComponent($('#seoUrl').val())
        }, 'get');
        ajaxRequest.setCallback(
            function (response) {
                $('#SeoRanks').html(response);
            }
        );
        ajaxRequest.setFormat('html');
        ajaxRequest.send();
    }
}
