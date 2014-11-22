#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(Vector3(15, 30, 45) * Time.deltaTime);
	if (rigidbody.velocity.y == 0) {
		Debug.Log("1");
		if (rigidbody.position.y == 0.5) {
			Debug.Log("2");
			transform.Translate(Vector3.up * Time.deltaTime * 5, Space.World);
		}
		if (rigidbody.position.y == 5) {
			 transform.Translate(Vector3.down * Time.deltaTime, Space.World);
		}
	}
	if (rigidbody.position.y < 5 && rigidbody.velocity.y > 0) {
		transform.Translate(Vector3.up * Time.deltaTime, Space.World);
	} 
	if (rigidbody.position.y < 5 && rigidbody.velocity.y < 0) {
		transform.Translate(Vector3.down * Time.deltaTime, Space.World);
	} 
}

