import Scrollmap from "scrollmap";

(function() {
    const Site = {
        init() {
            this.animate.cards();
        },
        animate: {
            cards() {
                Scrollmap.trigger({
                    target: '.design-layout-card',
                    surfaceVisible: 0.7
                });
            }
        }
    };

    Site.init();

})();