<?php require_once 'templates/header.php'; ?>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <div class="col-lg-4">
                <label>claimId</label>
                <input id="claimId" class="form-control" placeholder="claimId">
                <label>Token</label>
                <input id="token" class="form-control" placeholder="token">
                <label>Arquivo</label>
                <input id="arquivo" type="file" class="file" data-browse-on-zone-click="true">
                <br>
                <button class="btn btn-primary" id="btn_executar">Executar</button>
            </div>
        </div>

        <!--<div style="margin-left: 10px">-->
        <!--<h4>Resultado</h4>-->
        <!--<div id="div_resultado"></div>-->
        <!--</div>-->

        <div>
            <div id="div_dados"></div>
        </div>

<?php require_once 'templates/scripts.php'; ?>
        <script src="static//js/paginas/upload.js"></script>
<?php require_once 'templates/footer.php'; ?>