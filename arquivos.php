<?php
    require_once 'templates/header.php';
    require_once 'src/config/Config.php';
    require_once 'src/service/FileUtils.php';
?>

    <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
        <h4><strong>Retorno</strong></h4>
        <table id="tabela" class="table table-bordered">
            <tbody>

<?php
    $tipo = $_GET['tipo'];
    $projeto = $_GET['projeto'];
    $diretorio = FileUtils::getProjetoDir($tipo, $projeto);
    $arquivos = FileUtils::getArquivos($diretorio);
    foreach ($arquivos as $arquivo){
        if($arquivo != '.' && $arquivo != '..')
        echo '<tr>' .
                '<td><a href="download.php?diretorio='.$diretorio.'&arquivo='. $arquivo.'">'. $arquivo .'</a></td>' .
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
<?php require_once 'templates/footer.php'; ?>