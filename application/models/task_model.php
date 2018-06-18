<?php
/**
 * Created by PhpStorm.
 * User: Mark
 * Date: 14/05/2018
 * Time: 13:44
 */

class task_model extends MY_Model {

    public function add_task($req_id, $workers_id, $date_start, $date_end, $notes, $status) {
        $this->load->model("task_model");
        $this->load->model("request_model");


        $data = array(
            'requests_id' => $req_id,
            'workers_id' => $workers_id,
            'date_start' => $date_start,
            'date_end' => $date_end,
            'notes' => $notes,
            'status' => 'pending'
        );

        $this->task_model->insert($data);
        $this->request_model->update($req_id, array('status' => 'scheduled'));
    }

    public function update_task_status($id, $req_id, $workers_id, $date_start, $date_end, $notes, $status) {
        $this->load->model('task_model');

        $task = $this->task_model->get($id);

        $data = array(
            'requests_id' => !is_null($req_id) ? $req_id : $task->requests_id,
            'workers_id' => !is_null($workers_id) ? $workers_id : $task->workers_id,
            'date_start' => !is_null($date_start) ? $date_start : $task->date_start,
            'date_end' =>!is_null($date_end) ? $date_end : $task->date_end,
            'notes' => !is_null($notes) ? $notes : $task->notes,
            'status' => !is_null($status) ? $status : $task->status
        );

        $this->task_model->update($id, $data);
    }



}