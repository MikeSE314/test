#pragma strict

function Start () {

}

function Update () {
	
}

public var speed : float;

function FixedUpdate () {
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	
	var movement : Vector3 = Vector3(moveHorizontal, 0.0, moveVertical);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
	if (Input.GetMouseButtonDown(0)){
		Debug.Log(rigidbody.position.y);
		if (rigidbody.position.y < 0.500000){
			rigidbody.AddForce(Vector3(0.0, 0.5, 0.0) * speed * Time.deltaTime * 100.0);
			}
	}
}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "Pickup"){
		other.gameObject.SetActive(false);
	}
}
