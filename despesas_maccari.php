<?php require_once 'templates/header.php'; ?>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <div class="col-lg-4">
                <label>Dividir por Ano</label>
                <select id="dividir_por_ano" class="form-control">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
        </div>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <h4><strong>Retorno</strong></h4>
            <table id="tabela" class="table table-bordered table-striped">
                <thead>
                    <th>Data</th>
                    <th>Nº Ref</th>
                    <th>Categoria</th>
                    <th>Propósito</th>
                    <th>Valor</th>
                </thead>
                <tbody></tbody>
            </table>
        </div>

<?php require_once 'templates/scripts.php'; ?>
<script src="static/js/paginas/despesas_maccari.js"></script>
<?php require_once 'templates/footer.php'; ?>