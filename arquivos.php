<?php
    require_once 'templates/header.php';
    require_once 'service/FileUtils.php';
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
                '<td><a href="download.php?tipo='.$tipo.'&projeto='. $projeto.'&arquivo='. $arquivo.'">'. $arquivo .'</a></td>' .
            '</tr>';
    }
?>
            </tbody>
        </table>
    </div>

<?php require_once 'templates/scripts.php'; ?>
<?php require_once 'templates/footer.php'; ?>