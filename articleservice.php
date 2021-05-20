<?php
function getpost($param) {
    if(isset($_POST[$param])){
        $ret=$_POST[$param];
    }else{
        $ret="";			
    }return $ret;
}

$category=getpost("category");

$pdo = new PDO('mysql:dbname=b18jenli;host=localhost;', 'sqllab', 'Tomten2009');
$articles=array();

$sql = 'SELECT * FROM shopItems where cat=:cat';

$stmt = $pdo->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
        $stmt->bindParam(':cat', $category);
        $stmt->execute();

foreach($stmt as $key => $row){
    $article=array(
        "id"=>$row['id'],
        "img"=>$row['img'],
        "price"=>$row['price']
    );
    array_push($articles,$article);
}
header('Content-type:application/json;charset=utf-8');
echo json_encode($articles);

?>