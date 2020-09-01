<!DOCTYPE html>
<html lang="en">

<?php include('../layout/head.php'); ?>>

<body class="single-page elements-page">
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
                <h1>Elements</h1>

                <div class="breadcrumbs">
                    <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                        <li><a href="#">Home</a></li>
                        <li>Elements</li>
                    </ul>
                </div><!-- .breadcrumbs -->
            </div>
        </div>
    </div>

    <img class="header-img" src="../assets/images/elements-bg.png" alt="">
</header><!-- .site-header -->

    <div class="container">
        <div class="row elements-wrap">
            <div class="col-12">
                <header class="entry-header elements-heading">
                    <h2 class="entry-title">Buttons</h2>
                </header>

                <div class="entry-content elements-container">
                    <a href="#" class="button gradient-bg">Read More</a>
                    <a href="#" class="button dark">Read More</a>
                    <a href="#" class="button">Read More</a>
                </div>
            </div>
        </div>

        <div class="row elements-wrap">
            <div class="col-12">
                <header class="entry-header elements-heading">
                    <h2 class="entry-title">Accordion & Tabs</h2>
                </header>

                <div class="entry-content elements-container">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="accordion-wrap type-accordion">
                                <h3 class="entry-title d-flex justify-content-between align-items-center active">Elit mir congue ligula et efficitur pellentesqu<span class="arrow-r"></span></h3>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </div>

                                <h3 class="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span class="arrow-r"></span></h3>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </div>

                                <h3 class="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span class="arrow-r"></span></h3>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="tabs">
                                <ul class="tabs-nav d-flex  flex-wrap">
                                    <li class="tab-nav d-flex justify-content-center align-items-center" data-target="#tab_1">Pellentesque pulv</li>
                                    <li class="tab-nav d-flex justify-content-center align-items-center" data-target="#tab_2"> Pellentesque</li>
                                    <li class="tab-nav d-flex justify-content-center align-items-center" data-target="#tab_3">Consectetur diam</li>
                                </ul>

                                <div class="tabs-container">
                                    <div id="tab_1" class="tab-content">
                                        <img src="../assets/images/element-thumb.jpg" alt="">
                                        <h4>Scelerisque, at rutrum nulla</h4>
                                        <p>Amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scel erisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus fauci bus finibus. Curabitur ut augue.</p>
                                    </div>

                                    <div id="tab_2" class="tab-content">
                                        <img src="../assets/images/element-thumb.jpg" alt="">
                                        <h4>Scelerisque, at rutrum nulla</h4>
                                        <p>Amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scel erisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus fauci bus finibus. Curabitur ut augue.</p>
                                    </div>

                                    <div id="tab_3" class="tab-content">
                                        <img src="../assets/images/element-thumb.jpg" alt="">
                                        <h4>Scelerisque, at rutrum nulla</h4>
                                        <p>Amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scel erisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus fauci bus finibus. Curabitur ut augue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row elements-wrap">
            <div class="col-12">
                <header class="entry-header elements-heading">
                    <h2 class="entry-title">Loaders</h2>
                </header>

                <div class="entry-content elements-container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 offset-lg-1 col-lg-2">
                            <div class="circular-progress-bar">
                                <div class="circle" id="loader_1">
                                    <strong class="d-flex justify-content-center"></strong>
                                </div>

                                <h3 class="entry-title">Donation <span>Dolor sit amet</span></h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div class="circular-progress-bar">
                                <div class="circle" id="loader_2">
                                    <strong class="d-flex justify-content-center"></strong>
                                </div>

                                <h3 class="entry-title">Ambition<span>Sit amet, consecte</span></h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div class="circular-progress-bar">
                                <div class="circle" id="loader_3">
                                    <strong class="d-flex justify-content-center"></strong>
                                </div>

                                <h3 class="entry-title">Good Luck<span>Dolor sit amet</span></h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div class="circular-progress-bar">
                                <div class="circle" id="loader_4">
                                    <strong class="d-flex justify-content-center"></strong>
                                </div>

                                <h3 class="entry-title">High Tech<span>Sit amet, consecte</span></h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div class="circular-progress-bar">
                                <div class="circle" id="loader_5">
                                    <strong class="d-flex justify-content-center"></strong>
                                </div>

                                <h3 class="entry-title">Science<span>Dolor sit amet</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row elements-wrap">
            <div class="col-12">
                <header class="entry-header elements-heading">
                    <h2 class="entry-title">Milestones</h2>
                </header>

                <div class="milestones">
                    <div class="row flex flex-wrap justify-content-between">
                        <div class="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/blood-donation.png" alt="">
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="5632" data-speed="2000"></div>
                                </div>

                                <h3 class="entry-title">Blood donations</h3><!-- entry-title -->
                            </div><!-- counter-box -->
                        </div><!-- .col -->

                        <div class="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/pacients.png" alt="">
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="23" data-speed="2000"></div>
                                    <div class="counter-k">k</div>
                                </div>

                                <h3 class="entry-title">Pacients</h3><!-- entry-title -->
                            </div><!-- counter-box -->
                        </div><!-- .col -->

                        <div class="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/specialities.png" alt="">
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="25" data-speed="2000"></div>
                                </div>

                                <h3 class="entry-title">Specialities</h3><!-- entry-title -->
                            </div><!-- counter-box -->
                        </div><!-- .col -->

                        <div class="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/doctors.png" alt="">
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="723" data-speed="2000"></div>
                                </div>

                                <h3 class="entry-title">Doctors</h3><!-- entry-title -->
                            </div><!-- counter-box -->
                        </div><!-- .col -->
                    </div>
                </div>
            </div>
        </div>

        <div class="row elements-wrap">
            <div class="col-12">
                <header class="entry-header elements-heading">
                    <h2 class="entry-title">Icon Boxes</h2>
                </header>

                <div class="entry-content elements-container">
                    <div class="row align-items-start">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="icon-box active">
                                <header class="entry-header d-flex align-items-center">
                                    <img src="../assets/images/heart-beat.png" alt="">

                                    <h3 class="entry-title">Cardiology</h3>
                                </header>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </div>

                                <div class="entry-footer">
                                    <a href="#">read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
                            <div class="icon-box">
                                <header class="entry-header d-flex align-items-center">
                                    <img src="../assets/images/stomach.png" alt="">

                                    <h3 class="entry-title">Gastroenterology</h3>
                                </header>

                                <div class="entry-content">
                                    <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                </div>

                                <div class="entry-footer">
                                    <a href="#">read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
                            <div class="icon-box">
                                <header class="entry-header d-flex align-items-center">
                                    <img src="../assets/images/blood-sample.png" alt="">

                                    <h3 class="entry-title">Medical Lab</h3>
                                </header>

                                <div class="entry-content">
                                    <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                </div>

                                <div class="entry-footer">
                                    <a href="#">read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="margin-top: 120px;"></div>

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