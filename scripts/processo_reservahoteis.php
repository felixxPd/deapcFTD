<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destino = htmlspecialchars($_POST['destino']);
    $checkin = htmlspecialchars($_POST['checkin']);
    $checkout = htmlspecialchars($_POST['checkout']);
    $hospedes = htmlspecialchars($_POST['hospedes']);
    
    echo "<h1>Detalhes da Reserva</h1>";
    echo "<p>Destino: $destino</p>";
    echo "<p>Check-in: $checkin</p>";
    echo "<p>Check-out: $checkout</p>";
    echo "<p>Hóspedes: $hospedes</p>";
}
?>
