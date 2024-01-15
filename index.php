<html>

<head>
    <meta charset="utf-8">
</head>

<body style="background-color : pink">
    <center>
        <?php $multi_x = 2; ?>
        <h1>ตารางสูตรคูณแม่ <?php echo $multi_x ?></h1>
        <div>
            <table>
                <tbody>
                    <?php
                    for ($i = 1; $i <= 24; $i++) {
                    ?>
                        <tr>
                            <td><?php echo $i ?></td>
                            <td>x</td>
                            <td><?php echo $multi_x ?></td>
                            <td>=</td>
                            <td><?php echo $i * $multi_x ?></td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </center>

    <style>
        div {
            background-color: white;
            width: 220px;
            height: 380px;
            border: 1px solid black;
            overflow-y: scroll;

        }
    </style>


</body>

</html>