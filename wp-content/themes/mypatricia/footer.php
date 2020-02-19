<footer><footer class="footer section-map section-border">
        <div class="footer-inner">
              <div class="col-md-3 ">
                    <div class="form-group mb-5 focused">
                          <div class="input-group">
                                <select class="form-control intouch-input">
                                      <option>🇳🇬 Nigeria [English]</option>
                                      <option>Ghana [English]</option>
                                      <option>China [Chinese]</option>


                                </select>
                          </div>
                    </div>
                    <img class="footer-img" src="<?php bloginfo("template_directory")?>/assets/img/patricia/patricia-white.svg" alt="patricia logo">
                    <div class="copyright">
                          © 2020
                          <a href="#" class="text-white" target="_blank"> Patricia</a>.
                    </div>
              </div>
              <div class="col-md-2">
                    <ul class="footer-list">
                          <li>
                                <a href="#!" class="font-weight-bold">Products</a>
                          </li>
                          <li class="child">
                                <a href="https://app.mypatricia.co/giftcards" id="giftcardbtn">Giftcards</a>
                          </li>
                          <li class="child">
                                <a href="https://app.mypatricia.co/bitcoin/trade" id="btcbtn">BTC</a>
                          </li>
                          <li href="" class="child">
                                <a href="https://app.mypatricia.co/pm/trade" id="pmbtn">Perfect Money</a>
                          </li>
                          <!-- <li class="child">
                                <a class="muted">Send Money(coming soon)</a>
                          </li>
                          <li class="child">
                                <a class="muted">Market Place(coming soon)</a>
                          </li> -->
                    </ul>
              </div>

              <div class="col-md-2">
                    <ul class="footer-list">
                          <li>
                                <a href="" class="font-weight-bold">Company</a>
                          </li>
                          <li class="child">
                                <a href="career.html">Careers</a>
                          </li>
                          <!-- <li class="child">
                                <a href="#">Engineering</a>
                          </li> -->
                          <li class="child">
                                <a href="faq.html">FAQs</a>
                          </li>
                          <li class="child">
                                <a href="privacypolicy.html">Terms of Use</a>
                          </li>
                          <li class="child">
                                <a href="privacypolicy.html">Privacy Policy </a>
                          </li>
                          <li class="child">
                              <a href="privacypolicy.html#antimoneylaunderingpolicy">Anti Money Laundering Policy </a>
                        </li>
                    </ul>
              </div>

              <div class="col-md-2">
                    <ul class="footer-list">
                          <li>
                                <a href="#" class="font-weight-bold">Social</a>
                          </li>
                          <li class="child">
                                <a href="https://patricia.com.ng/blog">Blog</a>
                          </li>
                          <li class="child">
                                <a href="https://twitter.com/patriciaswitch">Twitter</a>
                          </li>
                          <li class="child">
                                <a href="https://facebook.com/patricia.com.ng">Facebook</a>
                          </li>
                    </ul>
              </div>
        </div>
  </footer>
</footer>

    <div
      class="modal advert fade"
      id="modal-advert"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-default"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal- modal-dialog-centered modal-lg"
        role="document"
      >
        <div class="modal-content bg-gradient-danger" style="cursor:pointer;">
          <img
            src="<?php bloginfo('template_directory')?>/assets/img/patricia/adverts/favorite_5.png"
            id="advert-img"
            width="100%"
            alt="Image advert"
          />
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <h4>Close</h4>
          </button>
        </div>
      </div>
    </div>

    <!-- Start of Tidio livechart -->
    <!-- <script src="//code.tidio.co/dxgevwqyz2rsdsobpuljty6dz2x0eg5s.js"></script> -->
    <!-- End of livechart -->
    <!-- FreshChat -->
    <script>
      function initFreshChat() {
        window.fcWidget.init({
          token: '2c70f595-82cf-406f-b073-a62468ec3bf5',
          host: 'https://wchat.freshchat.com'
        });
        // Copy the below lines under window.fcWidget.init inside initFreshChat function in the above snippet

        // To set unique user id in your system when it is available
        window.fcWidget.setExternalId(localStorage.getItem('userid'));

        // To set user name
        window.fcWidget.user.setFirstName(localStorage.getItem('firstname'));

        // To set user email
        window.fcWidget.user.setEmail(localStorage.getItem('email'));

        // To set user properties
        window.fcWidget.user.setProperties({
          plan: 'Estate', // meta property 1
          status: 'Active' // meta property 2
        });
      }
      function initialize(i, t) {
        var e;
        i.getElementById(t)
          ? initFreshChat()
          : (((e = i.createElement('script')).id = t),
            (e.async = !0),
            (e.src = '../wchat.freshchat.com/js/widget.js'),
            (e.onload = initFreshChat),
            i.head.appendChild(e));
      }
      function initiateCall() {
        initialize(document, 'freshchat-js-sdk');
      }
      window.addEventListener
        ? window.addEventListener('load', initiateCall, !1)
        : window.attachEvent('load', initiateCall, !1);
    </script>
    <!-- Segment Integration -->
    <script>
      !(function() {
        var analytics = (window.analytics = window.analytics || []);
        if (!analytics.initialize)
          if (analytics.invoked)
            window.console &&
              console.error &&
              console.error('Segment snippet included twice.');
          else {
            analytics.invoked = !0;
            analytics.methods = [
              'trackSubmit',
              'trackClick',
              'trackLink',
              'trackForm',
              'pageview',
              'identify',
              'reset',
              'group',
              'track',
              'ready',
              'alias',
              'debug',
              'page',
              'once',
              'off',
              'on'
            ];
            analytics.factory = function(t) {
              return function() {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(t);
                analytics.push(e);
                return analytics;
              };
            };
            for (var t = 0; t < analytics.methods.length; t++) {
              var e = analytics.methods[t];
              analytics[e] = analytics.factory(e);
            }
            analytics.load = function(t, e) {
              var n = document.createElement('script');
              n.type = 'text/javascript';
              n.async = !0;
              n.src =
                'https://cdn.segment.com/analytics.js/v1/' +
                t +
                '/analytics.min.js';
              var a = document.getElementsByTagName('script')[0];
              a.parentNode.insertBefore(n, a);
              analytics._loadOptions = e;
            };
            analytics.SNIPPET_VERSION = '4.1.0';
            analytics.load('MfXVDtRu24qY4Lt2pkFPHg2zBSefDkBu');
            analytics.page();
          }
      })();
    </script>
    <!-- Segment Integration -->

    <!-- Core -->
    <script src="<?php bloginfo('template_directory')?>/assets/js/includes.js"></script>
    <script src="<?php bloginfo('template_directory')?>/assets/vendor/jquery/jquery.min.js"></script>
    <script src="<?php bloginfo('template_directory')?>/assets/vendor/popper/popper.min.js"></script>
    <script src="<?php bloginfo('template_directory')?>/assets/vendor/bootstrap/bootstrap.min.js"></script>
    <script src="<?php bloginfo('template_directory')?>/assets/vendor/headroom/headroom.min.js"></script>

    <!-- Argon JS -->
    <script src="<?php bloginfo('template_directory')?>/assets/js/argonf700.js?v=1.0.1"></script>
    <script src="<?php bloginfo('template_directory')?>/assets/js/custom.js" defer></script>
    <script>
      $(document).ready(function() {
        $('#modal-advert').modal('show');
        $('#advert-img').click(function() {
          //Replace with Advert URL
          window.open(
            '../app.mypatricia.co/index.html',
            '_blank'
          );
        });
      });
    </script>

		<script src="<?php bloginfo('template_directory')?>/assets/js/animate.js"></script>
		<?php wp_footer(); ?>
  </body>
</html>
