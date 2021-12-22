<?php require_once 'templates/header.php'; ?>
<?php require_once 'templates/login_pf.php'; ?>

        <div style="margin-left: 10px">
            <h4><strong>Mensagem:</strong> <span id="mensagem"></span></h4>
        </div>

        <hr/>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <h4><strong>Retorno</strong></h4>
            <table id="tabela" class="table table-bordered">
                <tbody></tbody>
            </table>
        </div>

<?php require_once 'templates/scripts.php'; ?>
        <script src="static//js/jquery.mask.min.js"></script>
        <script src="static//js/jquery.maskMoney.min.js"></script>
        <script src="static//js/plugins/js.cookie.min.js"></script>
        <script src="static//js/plugins/bootstrap-notify.js"></script>
        <script src="static//js/plugins/urls_planilha_financeira.js"></script>
        <script src="static//js/plugins/token_planilha_financeira.js"></script>
        <script src="static//js/plugins/notificacao.js"></script>
        <script src="static//js/plugins/aguardar_carregamento_ajax.js"></script>
        <script src="static//js/plugins/funcoes_gerais.js"></script>
        <script src="static//js/paginas/projecao_contas/projecao_contas.js"></script>
        <script src="static//js/paginas/projecao_contas/projecao_contas_teste.js"></script>
<?php require_once 'templates/footer.php'; ?>