
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<!-- horizontal footer-->
<!-- Footer Section -->
<footer class="mt-auto">
  <div class="container-fluid">
    <div class="container">
      <div class="row p-5 ">
        <div class="col-4 margin02 b5">
          <a href="aboutus.html"><strong>More Info</strong></a><br>
          <a href="https://www.instagram.com/heerdtphotography?igsh=MjdlZXp6bDMxdjRr">Instagram</a><br>
          <a href="aboutus.html">About</a><br>
          <a href="aboutus.html">Blog</a><br>
          <a href="aboutus.html">Recipe Index</a><br>
          <a href="aboutus.html">Blogging Resources</a><br>
          <a href="aboutus.html">Income Reports</a><br>
          <a href="aboutus.html">Sponsored Content</a><br>
          <a href="aboutus.html">Media Mentions</a><br>
          <a href="aboutus.html">Contact</a><br>
        </div>
        <div class="col-4 margin02">
          <a href="recipes.html"><strong>Food & Recipes</strong></a><br>
          <a href="recipes.html">Sugar Free January</a><br>
          <a href="recipes.html">Freezer Meals 101</a><br>
          <a href="recipes.html">Quick and Easy Recipes</a><br>
          <a href="recipes.html">Instant Pot Recipes</a><br>
          <a href="recipes.html">Pasta Recipes</a><br>
          <a href="recipes.html">Vegan Recipes</a><br>
          <a href="recipes.html">Soup Recipes</a><br>
          <a href="recipes.html">Taco Recipes</a><br>
          <a href="recipes.html">Meal Prep Recipes</a><br>
        </div>
        <div class="col Signup follow_us Signup_border p4">
          <h3 class="email-updates ">Sign Up For Updates</h3>
          <p>Get a Free eBook with our top 25 recipes</p>
          <!-- Trigger Button for Newsletter Popup -->
          <button class="btn btn-primary signbutton" data-bs-toggle="modal" data-bs-target="#newsletterModal">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  </div>
      <div class="rsignup Signup_border follow_us">
        <div class="row">
          <h3 class="email-updates text-center">Follow us!</h3>
          <div class="d-flex justify-content-center">
              <!-- Social Media Icons -->
              <a href= ‘fbooklink’ class="icon_color";><i class="bi bi-facebook mx-2" style="font-size: 2rem;"></a></i>
              <a href= 'instalink' class="icon_color";><i class="bi bi-instagram mx-2" style="font-size: 2rem;"></a></i>
              <a href= 'pinlink' class="icon_color";><i class="bi bi-pinterest mx-2" style="font-size: 2rem;"></a></i>
              <a href= 'tiktoklink' class="icon_color";><i class="bi bi-tiktok mx-2" style="font-size: 2rem;"></a></i>
            </div>
        </div>
</footer>


<div class="modal fade" id="newsletterModal" tabindex="-1" aria-labelledby="newsletterModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header popup-color">
        <h5 class="modal-title text-light" id="newsletterModalLabel">Subscribe to Our Newsletter</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Sign up and get a free eBook with our top 25 recipes!</p>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Your Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
          </div>
          <button type="submit" class=" popup-color btn  btn-primary w-100">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!--Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
<!--Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
`;
  }
}


customElements.define('footer-component', Footer);

  