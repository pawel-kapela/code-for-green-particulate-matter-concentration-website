<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Code for Green</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        @if(config('app.env') == 'local')
            <script src="http://localhost:35729/livereload.js" defer></script>
        @endif

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <noscript>JavaScript musi być włączony, aby uruchomić tę aplikację. / You need to enable JavaScript to run this app.</noscript>

        <div id="app"></div>
    </body>
</html>
