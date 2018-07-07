<?php

    $num = count((array)$display);
    if($num < 1){
        echo "No data found";
    }

    foreach($display as $data){
        $account = @$data['username'];
		$organization = @$data['organization'];
		$task = @$data['task'];
		$asset = @$data['assets'];
        $request = @$data['request'];
        $worker = @$data['worker'];
        $equipments = @$data['equipments'];

        $total_worker = count($worker);
        ?>

        <h3 class="text-aqua"><span class="fa fa-tasks"></span> Task</h3>
        <p><span class="fa fa-calendar"></span> <?=@$task->date_start; ?> <strong>to</strong>  <?=@$task->date_end; ?> |
            <strong>Organization:</strong> <?=$organization->name;?> |
            <strong>Asset:</strong> <?=$asset->name; ?> <?=$asset->model_number; ?></p>

        <p><?=@$task->notes; ?></p>


        <form data-parsley-validate>

            <div class="form-group">
                <label class="control-label" for="equipment_id">Equipment</label>
                <select class="form-control" name="equipment_id" onchange="updateQuantity(this)" required>
                    <option value="">Choose...</option>
                    <?foreach($equipments as $value){?>
                    <option tag="<?=@$value->quantity;?>" value="<?=@$value->id?>"><?=@$value->name;?></option>
                    <?}?>
                </select>
            </div>

            <div class="form-group">
                <label class="label-control" for="quantity">Quantity</label>
                <input id="quantity" type="number" name="quantity" max="" class="form-control" />
            </div>

            <div class="form-group">
                <button class="btn btn-info">Add Reservation</button>
            </div>
        </form>

        <script>
            function updateQuantity(select) {
                var max = select.attr
                $('#quantity').attr('max',);
            }
        </script>

        <?php


    }
 ?>