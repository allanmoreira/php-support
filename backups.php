<?php require_once 'templates/header.php'; ?>

    <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
        <h4><strong>Retorno</strong></h4>
        <table id="tabela" class="table table-bordered">
            <tbody>

<?php
    $arquivos = scandir('/var/www/html/backups/planilha_financeira');
    foreach ($arquivos as $arquivo){
        echo '<tr>' .
                '<td>'. $arquivo .'</td>' .
                '<td>'. date("F d Y H:i:s.", filemtime($arquivo)) . '</td>' .
            '</tr>';
    }
?>
            </tbody>
        </table>
    </div>

<?php require_once 'templates/scripts.php'; ?>
<script src="static/js/jquery.mask.min.js"></script>
<script src="static/js/plugins/aguardar_carregamento_ajax.js"></script>
<script src="static/js/jquery.maskMoney.min.js"></script>
<script src="static/js/plugins/funcoes_gerais.js"></script>
<script src="static/js/paginas/despesas_maccari.js"></script>
<?php require_once 'templates/footer.php'; ?>