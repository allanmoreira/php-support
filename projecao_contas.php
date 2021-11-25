<?php require_once 'templates/header.php'; ?>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <div class="col-lg-6">
                <h4><strong>Token</strong></h4>
                <label>Ambiente</label>
                <select id="ambiente" class="form-control">
                    <option value="LOCAL">Local</option>
                    <option value="PROD">Produção</option>
                </select>

                <br>
                <button class="btn btn-success" id="btn_atualizar_token">Atualizar token</button>
                <button class="btn btn-primary" id="btn_executar">Executar</button>
            </div>
        </div>

        <hr/>

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
        <script src="static/js/jquery.mask.min.js"></script>
        <script src="static/js/jquery.maskMoney.min.js"></script>
        <script src="static/js/plugins/js.cookie.min.js"></script>
        <script src="static/js/plugins/bootstrap-notify.js"></script>
        <script src="static/js/plugins/urls_planilha_financeira.js"></script>
        <script src="static/js/plugins/token_planilha_financeira.js"></script>
        <script src="static/js/plugins/notificacao.js"></script>
        <script src="static/js/plugins/aguardar_carregamento_ajax.js"></script>
        <script src="static/js/plugins/funcoes_gerais.js"></script>
        <script src="static/js/paginas/projecao_contas/projecao_contas.js"></script>
        <script src="static/js/paginas/projecao_contas/projecao_contas_teste.js"></script>
<?php require_once 'templates/footer.php'; ?>