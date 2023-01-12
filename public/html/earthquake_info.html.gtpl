<!DOCTYPE html>
<html lang="en" {{- if .Epicenter -}}epicenter="{{.Epicenter}}" {{- end -}} {{- if .Ints -}}ints="{{.Ints}}"{{- end -}} >

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/js/earthquake_info" defer></script>
</head>

<body>
    <header class="data">
        <div class="title">
            {{.Title}}
        </div>
        <div class="date">
            発生日時: {{.Date}}
        </div>
    </header>
    <div class="map" id="map"></div>
</body>

</html>