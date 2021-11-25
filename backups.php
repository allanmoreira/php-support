<?php require_once 'templates/header.php'; ?>

<?php
    echo '<pre>' . var_export(scandir('/var/www/html/backups/planilha_financeira'), true) . '</pre>';
?>

<?php require_once 'templates/scripts.php'; ?>
<script src="static/js/jquery.mask.min.js"></script>
<script src="static/js/plugins/aguardar_carregamento_ajax.js"></script>
<script src="static/js/jquery.maskMoney.min.js"></script>
<script src="static/js/plugins/funcoes_gerais.js"></script>
<script src="static/js/paginas/despesas_maccari.js"></script>
<?php require_once 'templates/footer.php'; ?>