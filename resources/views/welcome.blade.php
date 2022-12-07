<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Welcome to --|VideoSlot|--</title>
        <link href="home.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Abril+Fatface">
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="antialiased">
        <div style="z-index=0;position:absolute;width:100%;height:100%;background-image:url(/VideoSlot.png); filter:blur(5px)"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <div style="z-index:1;position:absolute;width:100%;height:100%;">
    <header style="display:flex;position:relative;">
        <div class="title">VideoSlot</div>
        <img src="digit.png" width="80px" alt="digit.png" style="display:inline-block;margin-left:auto;margin-right:auto;margin-top:10px"></img>
        <div style="display:inline-block;text-align:center;margin-right:30px;">
            <button type="button" class="btn btn-primary login" >Login</button>
            <button type="button" class="btn btn-primary login">Sign up</button>
        </div>
       </header>
       <button type="button" onclick="location.href='/dashboard'" class="btn btn-primary play" >Go To Play&gt;&gt;</button>
    </div>

    </body>
</html>
