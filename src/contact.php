<!DOCTYPE html>
<html lang="en">

<?php include('../layout/head.php'); ?>

<body class="single-page">
    <header class="site-header">
        <div class="nav-bar">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div class="site-branding d-flex align-items-center">
                            <a class="d-block" href="index.html" rel="home"><img class="d-block" src="../assets/images/logo.png" alt="logo"></a>
                        </div><!-- .site-branding -->

                        <?php include('../layout/nav.php'); ?>

                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- .hamburger-menu -->
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .nav-bar -->

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Contact</h1>

                    <div class="breadcrumbs">
                        <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="#">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div><!-- .breadcrumbs -->

                </div>
            </div>
        </div>

        <img class="header-img" src="../assets/images/contact-bg.png" alt="">
    </header><!-- .site-header -->

    <div class="contact-page-short-boxes">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="contact-info h-100">
                        <h2 class="d-flex align-items-center">Contact Info</h2>

                        <ul class="p-0 m-0">
                            <li><span>Addtress:</span>Mitlton Str. 26-27 London UK</li>
                            <li><span>Phone:</span>+53 345 7953 32453</li>
                            <li><span>Email:</span>yourmail@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-4 mt-5 mt-lg-0">
                    <div class="opening-hours h-100">
                        <h2 class="d-flex align-items-center">Opening Hours</h2>

                        <ul class="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-4 mt-5 mt-lg-0">
                    <div class="emergency-box h-100">
                        <h2 class="d-flex align-items-center">Emergency</h2>

                        <div class="call-btn text-center">
                            <a class="d-flex justify-content-center align-items-center button gradient-bg" href="#"><img src="../assets/images/emergency-call.png"> +34 586 778 8892</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-form">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Get in Touch</h2>
                </div>

                <div class="col-12  col-md-4">
                    <input type="text" placeholder="Name">
                </div><!-- col-4 -->

                <div class="col-12 col-md-4">
                    <input type="email" placeholder="E-mail">
                </div><!-- col-6 -->

                <div class="col-12 col-md-4">
                    <input type="text" placeholder="Subject">
                </div>

                <div class="col-12">
                    <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                </div>

                <div class="col-12">
                    <input type="submit" name="" value="Send Message" class="button gradient-bg">
                </div>
            </div><!-- row -->
        </div>
    </div><!-- contact-form -->

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contact-page-map">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div><!-- map -->
            </div>
        </div>
    </div>









    <div class="subscribe-banner">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 offset-lg-2">
                    <h2>Subscribe to our newsletter</h2>

                    <form>
                        <input type="email" placeholder="E-mail address">
                        <input class="button gradient-bg" type="submit" value="Subscribe">
                    </form>
                </div>
            </div>
        </div>
    </div>

    
    <?php include('../layout/footer.php'); ?>

<?php include('../layout/scripts.php'); ?>

</body>
</html>