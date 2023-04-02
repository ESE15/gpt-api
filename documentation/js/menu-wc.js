'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gpt-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' : 'data-target="#xs-controllers-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' :
                                            'id="xs-controllers-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' : 'data-target="#xs-injectables-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' :
                                        'id="xs-injectables-links-module-AppModule-2e3749d74a01e260f8b669a1c95403cbfaba20a59124e0972b138fc92fc738722c5e0011a85e4a865dd80b23c9142b32b533bef1fb5cd278e9d599bd2ae8a20e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenaiModule.html" data-type="entity-link" >OpenaiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' : 'data-target="#xs-controllers-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' :
                                            'id="xs-controllers-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' }>
                                            <li class="link">
                                                <a href="controllers/OpenaiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenaiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' : 'data-target="#xs-injectables-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' :
                                        'id="xs-injectables-links-module-OpenaiModule-2b705a733c21e3e72906286c29a12e5452ccd9f238eb52ad839f4fa20cc2780d0d7b7b5b24b3014410fc9b460ded9b48e7ffeda307c4d18e21406da2a49d3979"' }>
                                        <li class="link">
                                            <a href="injectables/OpenaiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenaiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});