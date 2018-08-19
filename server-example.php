<?php 
//1. Get data from $_POST
//2. Do Operartion 
//3. Response json encode status ("success" or "failed")

$data = $_POST;
$data['status'] = 'success';
echo json_encode($data);