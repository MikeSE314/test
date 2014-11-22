#pragma strict

var on: boolean;

function self(){
	GetComponent(UI.Button).interactable = false;
	
}

function other(){
	GetComponent(UI.Button).interactable = true;
}