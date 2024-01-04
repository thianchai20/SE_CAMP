<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplication Table</title>
  <style>
    table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px auto;
    }

    table, th, td {
      border: 1px solid black;
    }

    th, td {
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

<?php
// กำหนดแม่สูตรที่ต้องการคำนวณ
$multiplier = 24;

// แสดงตารางแม่สูตร
echo "<h2>Multiplication Table (1 to 24)</h2>";
echo "<table>";
echo "<tr><th>&nbsp;</th>";

// สร้างหัวตาราง
for ($i = 1; $i <= $multiplier; $i++) {
    echo "<th>{$i}</th>";
}

echo "</tr>";

// สร้างข้อมูลในตาราง
for ($i = 1; $i <= $multiplier; $i++) {
    echo "<tr><th>{$i}</th>";

    for ($j = 1; $j <= $multiplier; $j++) {
        echo "<td>" . ($i * $j) . "</td>";
    }

    echo "</tr>";
}

echo "</table>";
?>
</body>
</html>