<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM PatientVisit pv, Patient p
        WHERE pv.patientGuid = p.patientGuid
        ORDER BY priority DESC, visitDateUtc ASC';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;