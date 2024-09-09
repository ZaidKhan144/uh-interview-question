<?php

  

  $config = [
    'host' => '127.0.0.1',
    'username' => 'root',
    'password' => 'zaid',
    'database' => 'directory',
    'port' => 3306
  ];

  $conn = new mysqli($config['host'], $config['username'], $config['password'], $config['database']);
  if ($conn->connect_error) {
    echo "PHP Database Connection failed: " . $conn->connect_error;
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "
    SELECT pictureUrl, firstName, lastName, title, email, phone, mailcode, mailingAddress, building, roomNumber, departmentName
    FROM directories 
    LEFT JOIN departments ON directories.departmentId = departments.departmentId 
    WHERE id = 1";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $pictureUrl = $row['pictureUrl'];
      $name = $row['firstName'] . ' ' . $row['lastName'];
      $title = $row['title'];
      $email = $row['email'];
      $phone = $row['phone'];
      $mailcode = $row['mailcode'];
      $mailingAddress = $row['mailingAddress'];
      $building = $row['building'];
      $roomNumber = $row['roomNumber'];
      $department = $row['departmentName'];
    }
  } else {
    echo "0 results";
  }

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="robots" content="noindex">
  <title>Faculty/Staff Biography</title>
  <meta charset="utf-8" />
  <meta content="ie=edge" http-equiv="x-ua-compatible">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="https://<HOST>/<path>" />
  <meta name="description" content="META DESCRIPTION">
  <meta name="keywords" content="META KEYWORDS">
  <meta name="author" content="University of Houston">
  <!-- include: _ssi/global/head.html -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&amp;family=League+Gothic&amp;family=Source+Sans+Pro:ital,wght@0,200;0,400;0,700;0,900;1,200;1,400;1,700;1,900&amp;display=swap"
    rel="stylesheet" />
  <link href="/_css/vendor/bootstrap-5.3.3.css" rel="stylesheet" />
  <script defer src="/_js/vendor/bootstrap.bundle.min.js"></script>
  <script src="/_js/vendor/jquery.js"></script>
  <script src="/_js/vendor/modernizr.js"></script>
  <link href="/_css/global.css" rel="stylesheet" />
  <script src="/_js/global.js"></script>
  <!-- end of include -->
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-M76VPMR"
      style="display:none;visibility:hidden" width="0"></iframe>
  </noscript>
  <?php include '_ssi/header.php'; ?>
  <!-- main content -->
  <main class="container" id="wrap">
    <ul class="breadcrumb">
      <li>
        <a href="https://www.uh.edu/">
          <abbr data-markjs="true" title="University of Houston">UH</abbr> Home


        </a>
      </li>
      <li class="active">Faculty/Staff Biography</li>
    </ul>
    <section class="row" id="page">
      <div class="nav-secondary col">
        <h2 class="site-title">
          <a href="#" title="UH">
            <abbr data-markjs="true" title="University of Houston">Hierarchy
              Variations for Left Navigation

          </a>
        </h2>
        <?php include '_ssi/sidenav.php'; ?>
      </div>
      <article class="col-12 order-1 order-md-2" id="main-content">
        <header>
          <h1><?= $name ?></h1>
        </header>
        <div class="row">
          <section class="col-12 col-md-8" id="content-well">
            <div class="row">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <p class="card-text mt-0"><?= $title ?>

                      <br>
                      <?php if($department) :?>
                        <a href="https://www.uh.edu/search/directory/offices.php?mod=content_offices&dpt=H0293"><?= $department ?></a>
                      <?php endif; ?>
                      <br>
                      <a href="mailto:<?= $email ?>"><?= $email ?></a>
                      <br>
                      <a href="tel:<?= $phone ?>"><?= $phone ?></a>
                    </p>
                    <p class="card-text">Mailcode: <?= $mailcode ?>

                      <br>Mailing Address: <?= $mailingAddress ?>

                      <br>Building: <?= $building ?>

                      <br>Room #: <?= $roomNumber ?>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis nec libero venenatis, ut
              blandit est iaculis. In hac habitasse platea dictumst. Vestibulum eleifend ante et neque consectetur
              ultricies. Etiam ante diam, iaculis vel posuere a, porttitor nec dolor. Mauris id mollis ipsum. Curabitur
              eget luctus ante, non ultrices ipsum. Sed malesuada felis tortor, ac gravida erat rhoncus quis. Cras eu
              lorem ultricies, consequat leo et, aliquet nulla. Duis at finibus lacus. Aliquam condimentum turpis elit.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce imperdiet,
              orci nec gravida aliquet, ex enim malesuada enim, at egestas sapien dui a enim. Ut a massa eu ligula
              porttitor bibendum. Aliquam imperdiet lacus vitae risus placerat rhoncus sed nec sem.</p>
            <p>Phasellus nec lectus sed dui placerat viverra. Etiam sed dictum leo. Duis vel lorem et risus ultricies
              laoreet. Ut efficitur aliquam ultrices. Proin ac sapien nec odio placerat rhoncus. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Vivamus lectus sem, placerat eu consequat id, convallis gravida
              sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
              hendrerit odio lacus, et suscipit mi venenatis eu.</p>
            <p>Aliquam ex velit, vehicula sed dictum ac, vestibulum id sem. Etiam dapibus, massa eu ultricies ultrices,
              risus leo placerat quam, quis iaculis dui eros et nulla. Nunc eleifend velit varius mi bibendum, et
              suscipit enim tincidunt. Sed mauris sem, ornare vel dictum id, mollis eget mauris. Nunc a massa id sapien
              lobortis dapibus in eget nunc. Vivamus rutrum augue sed magna dignissim finibus. Fusce faucibus vitae
              lectus in auctor. Phasellus id nisi non turpis scelerisque iaculis eget vel quam. Quisque rhoncus at risus
              vitae accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Nullam vel orci velit. Aliquam dictum rhoncus velit ac sollicitudin.</p>
          </section>
          <aside class="col-12 col-md-4" id="sidebar" role="complementary">
            <img class="biography-photo rounded-3" src="<?=$pictureUrl?>" alt="...">
          </aside>
        </div>
      </article>
    </section>
  </main>
  <!-- footer -->
  <?php include '_ssi/footer.php'; ?>
</body>
</body>

</html>