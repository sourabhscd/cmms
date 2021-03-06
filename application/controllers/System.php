<?php
/**
 * Created by PhpStorm.
 * User: Mark
 * Date: 12/05/2018
 * Time: 11:28
 */
include "ChromePhp.php";
class System extends CI_Controller {

    public function index() {
        $this->dashboard();
    }

    public function dashboard() {

		$this->load->library("table");
		$data['template'] = array(
							'thead_open'            => '<thead>',
							'thead_close'           => '</thead>',

							'heading_row_start'     => '<tr>',
							'heading_row_end'       => '</tr>',
							'heading_cell_start'    => '<th>',
							'heading_cell_end'      => '</th>',

							'tbody_open'            => '<tbody>',
							'tbody_close'           => '</tbody>',

							'row_start'             => '<tr>',
							'row_end'               => '</tr>',
							'cell_start'            => '<td>',
							'cell_end'              => '</td>',

							'row_alt_start'         => '<tr>',
							'row_alt_end'           => '</tr>',
							'cell_alt_start'        => '<td>',
							'cell_alt_end'          => '</td>',

							'table_close'           => '</table>'
					);
		
		$name = "assets";
        $data['main_content'] = 'dash_two';
        $data['data']['display'] = $this->models_data($name);
		$data['name'] = $name;
        $this->load->view('includes/system', $data);
    }
	
	public function view(){
		$name = $this->uri->segment(3);
		$this->load->library("table");
		$data['template'] = array(
							'thead_open'            => '<thead>',
							'thead_close'           => '</thead>',

							'heading_row_start'     => '<tr>',
							'heading_row_end'       => '</tr>',
							'heading_cell_start'    => '<th>',
							'heading_cell_end'      => '</th>',

							'tbody_open'            => '<tbody>',
							'tbody_close'           => '</tbody>',

							'row_start'             => '<tr>',
							'row_end'               => '</tr>',
							'cell_start'            => '<td>',
							'cell_end'              => '</td>',

							'row_alt_start'         => '<tr>',
							'row_alt_end'           => '</tr>',
							'cell_alt_start'        => '<td>',
							'cell_alt_end'          => '</td>',

							'table_close'           => '</table>'
					);

		$data['data']['display'] = $this->models_data($name);
		$data['name'] = $name;
        $data['main_content'] = 'dash_two';
        $this->load->view('includes/system',$data);
	}
	
    function models_data($data){
        if($data == 'users'){
            $this->load->model('user_model');
            return $this->user_model->get_all();
        }else if($data == 'assets'){
            $this->load->model('asset_model');
            return $this->asset_model->get_all();
        }
		else if($data == 'equipment'){
            $this->load->model('equipment_model');
            return $this->equipment_model->get_all();
        }else{
            return "unknown model";
        }
    }

    function asset_suggestions() {
        $data = $this->input->post("myData");
        $this->load->model("asset_model");
        $assets = $this->asset_model->get_many_by(array("name LIKE" => $data));

        ChromePhp::log($assets);
        echo json_encode($assets);
    }

    function add_asset() {
        foreach ($_POST as $key => $value) {
            ChromePhp::log($key . "=" . $value);
        }
        foreach ($_GET as $key => $value) {
            ChromePhp::log($key . "=" . $value);
        }
        ChromePhp::log($this->input->get("name"));
        $this->load->model("asset_model");
        $this->asset_model->insert(array("name" => $this->input->post("name"), "model_number" => $this->input->post("model")));
        ChromePhp::log("Asset Added Successfully");
    }
	
	function add_item_to_db(){}
}