#pragma strict

public var object1 : UI.Text;

function Start () {

}

function Update () {
    object1.text = Time.fixedTime.ToString();
}