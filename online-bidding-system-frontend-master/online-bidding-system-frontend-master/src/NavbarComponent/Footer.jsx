import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Online Bidding System
                  </h5>

                  <p>
                    Welcome to our online bidding hub, where sellers showcase,
                    buyers bid, and thrilling auctions unfold. Explore, engage,
                    and bid smartly for unparalleled experiences!
                  </p>
                </div>

              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2023 Copyright:
            <a class="text-color-3" href="https://codewithmurad.com/">
              codewithmurad.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
