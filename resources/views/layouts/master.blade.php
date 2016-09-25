<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-touch-fullscreen" content="yes" />
  <title>@yield('title') - randomize.co</title>
  <meta property="og:title" content="" />
  <meta property="og:image" content="" />
  <meta property="og:url" content="" />
  <meta property="og:site_name" content="" />
  <meta property="og:description" content="" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:image" content="" />
  <meta name="twitter:url" content="" />
  <meta name="twitter:card" content="" />
  <link rel="canonical" href="https://randomize.co/" />
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" media="all" />
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ elixir('css/global.css') }}" type="text/css" media="all" />
</head>
<body>
  <div class="container">@yield('content')</div>
  {{--
      Working with both Webpack for React and Gulp for Lumen presents some odd
      challenges. When running webpack-dev-server, the file served exists only in
      memory, there is no "bundle.js" that's written to the hard drive. This is problematic
      for Elixir because it looks for "bundle.js" in order to minify it. So when
      this is ready for production we need to run the "webpack" command to actually
      create a physical "bundle.js" file that Gulp will then minimize if it's watching:
      e.g. $ node ./node_modules/webpack/bin/webpack.js
  --}}
  @if (app()->environment() === 'local')
  <script src="/js/bundle.js" type="text/javascript"></script>
  @else
  <script src="{{ elixir('js/bundle.js') }}" type="text/javascript"></script>
  @endif
</body>
</html>
